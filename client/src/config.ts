export const MAIN_PAGE_URL: string = (process.env.NODE_ENV === 'production') ? process.env.PUBLIC_URL : '/photo-comparison';
export const API_URL: string = (process.env.NODE_ENV === 'production') ? '/api' : 'http://localhost:8000/api';
export const IMAGES_URL: string = (process.env.NODE_ENV === 'production') ? '/images' : 'http://localhost:8000/images';