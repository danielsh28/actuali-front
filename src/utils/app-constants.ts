export const DEFAULT_SRC_IMG :string='https://image.shutterstock.com/z/' +
    'stock-vector-breaking-news-world-news-with-map-backgorund-breaking-news-modern-concept-tv-news-design-640991758.jpg';

export const IMG_DIR =  `${process.env.PUBLIC_URL}/assets/images/`;

export const MOCKS_DIR =  `${process.env.PUBLIC_URL}/assets/images/`;

// TODO need to add production url well it will e ready
export const ACTUALI_SERVER_BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '';

export  const MIN_CATEGORIES_NUM = 3;
export const  NEWS_EACH_FETCH = 2;

export const  INITIAL_NEWS_FETCH = 10;
