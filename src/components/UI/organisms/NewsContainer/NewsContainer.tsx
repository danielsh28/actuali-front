import React, {useCallback, useEffect, useRef, useState} from "react";
import { connect } from "react-redux";
import { RootState } from "../../../../store/configureStore";
import styles from "./NewsContainer.module.css";
import {
  UsersChoicesMap,
} from "../../../../AppTypes";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {fetchNews} from "../../../../store/actions/DataFetchingActions";
import {
  INITIAL_NEWS_FETCH,
  NEWS_EACH_FETCH,
} from "../../../../utils/app-constants";
import {INewsData, NewsCard} from "../../molecules/ActualiCards/NewsCard";
import {IParams} from "../../../../utils/utilsFuncs";
interface INewsProps {
  fetchNews: (params: unknown) => void;
  widgetsData: Array<INewsData>;
  categories: UsersChoicesMap;
  isLoading: boolean;
}


const NewsContainer: React.FC<INewsProps> = function ({
  isLoading,
  categories,
  fetchNews,
  widgetsData ,
}) {
  const [newsCounter, setNewsCounter] = useState(INITIAL_NEWS_FETCH);
  const counterRef = useRef<number>(newsCounter);
  const isLoadingRef = useRef<boolean>(isLoading);
  const setNewsCounterWrapper = (num: number) => {
    counterRef.current = num;
    setNewsCounter(num);
  };

  const handleScroll = useCallback(()=> {
    const {
      clientHeight,
      scrollHeight,
      scrollTop,
    } = document.scrollingElement!;
    if (!isLoadingRef.current && scrollHeight - scrollTop === clientHeight) {
      setNewsCounterWrapper(counterRef.current + NEWS_EACH_FETCH);
    }
  },[]);



  // in window event using ref object to get the current render value and update newsCounter accordingly
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // update isLoading reference for window event
  useEffect(() => {
    isLoadingRef.current = isLoading;
  }, [isLoading]);

  // call the fetch news action
  useEffect(() => {
    if (widgetsData.length === 0) {
      fetchNews({ cat: categories, count: INITIAL_NEWS_FETCH });
    } else {
      if (widgetsData.length === newsCounter - INITIAL_NEWS_FETCH) {
        const params: IParams = {
          count: newsCounter,
          cat: categories,
        };
        fetchNews(params);
      }
    };
  }, [newsCounter, categories, fetchNews, widgetsData.length]);


    return (
      <React.Fragment>
          <div className={`${styles.mainContainer} container`}>
            { widgetsData.map((news, index?: number) => {
              return <NewsCard key={index} title={news.title} urlToImage={news.urlToImage} url={news.url}/>
            })}
          </div>
         {isLoading && <div className={styles.loader}></div>}
      </React.Fragment>
    );
  //if user not logged in - return to landing page

};
const mapStateToProps = (state: RootState) => ({
  widgetsData: state.fetchDataState.data,
  categories: state.userStatus.categories,
  isLoading: state.fetchDataState.loading,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, unknown, AnyAction>
) => ({
  fetchNews: (params: unknown) => dispatch(fetchNews(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
