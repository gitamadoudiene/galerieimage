import React from 'react'
import axios from 'axios'
import ImageSearch from './ImageSearch'
import ImageGallery from './ImageGallery'
import { SearchResponse, SearchState } from './type'
import './App.css'


const App: React.FC = () => {

  const [state, setState] = React.useState<SearchState>({
    query: '',
    images: [],
    loading: false,
    error: null,
  });
  
  const fetchImages = async (query: string) => {
    setState({...state,loading:true,error:null});
    try {
      //Request to the Pexels API
      const response = await axios.get<SearchResponse>(
        `https://api.pexels.com/v1/search`,
        {
          params: {
            query: query,
            per_page: 10,
          },
          headers: {
            Authorization: 'MyKey'
        },
        });
        setState({
          ...state,
          images: response.data.photos,
          loading: false,
        });
    } catch (error) {
      setState({
        ...state,
        loading: false,
        error: 'Error fetching images',
      });
    }
  };

  //Function to handle the search
  const handleSearch = (query: string) => {
    fetchImages(query);
  };
  return (
    //Creation of the main component
    <div className='app'>
      <h1>Image Search App</h1>
      {/* /appel de ImageSearch component  */}
      <ImageSearch onSearch={handleSearch} />
      {state.loading && <p>Loading...</p>}
      {state.error && <p>{state.error}</p>}
      {!state.loading && !state.error && <ImageGallery images={state.images} />}
    </div>
  )
}
export default App
// import React from 'react'
