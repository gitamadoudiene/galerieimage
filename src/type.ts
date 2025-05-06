export interface Image {
    id:number;
    photographer:string;
    photographer_url:string;
    src:{
        original:string;
        medium:string;
    };
    alt:string;
}

export interface SearchResponse {
    photos:Image[];
}

export interface SearchState {
    query:string;
    images:Image[];
    loading:boolean;
    error:string|null;
}