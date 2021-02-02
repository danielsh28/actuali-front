import {INITIAL_NEWS_FETCH,NEWS_EACH_FETCH} from "./app-constants";
import {fetchNews} from "../store/actions/DataFetchingActions";
interface IParams {
    count: number;
    cat: Array<string>;
}

export   const loadMoreNews  = (dataLength : number ,newsCounter : number, categories : Array<string> ) => {
    const currentSize = dataLength;
    if (currentSize === newsCounter - INITIAL_NEWS_FETCH) {
        const params: IParams = {
            count: newsCounter,
            cat: categories,
        };
        fetchNews(params);
    }
};