export const MAIN_PAGE_URL = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '/photo-comparison';
export const API_URL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:8000/api';
export const IMAGES_URL = process.env.NODE_ENV === 'production' ? '/images' : 'http://localhost:8000/images';