import React, { useState } from 'react';
//Creation de l'interface ImageSearchProps

interface ImageSearchProps {
    onSearch: (query: string) => void;
}
//Creation du composant ImageSearch
const ImageSearch: React.FC<ImageSearchProps> = ({ onSearch }) => {
    //Creation de l'etat query
    const [query, setQuery] = useState<string>('');

    //Creation de la fonction handleChange
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };
//Creation de la fonction handleSubmit
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(query);
    };
    return (
        //Creation du formulaire de recherche
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search for images..."
            style={{ padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <button
            type="submit"
            style={{
                padding: '10px 20px',
                backgroundColor: '#007BFF',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
            }}
            >
            Search
            </button>
        </form>
    )
}
export default ImageSearch;

