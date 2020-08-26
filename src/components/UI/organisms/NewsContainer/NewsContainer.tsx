import React, { useCallback, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { RootState } from "../../../../store/configureStore";
import styles from "./NewsContainer.module.css";
import { ActualiWidgetdata } from "../../../../AppTypes";
import { LoggedUserStatus } from "../../../../store/types";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { fetchNews } from "../../../../store/actions/DataFetchingActions";
import {
  INITIAL_NEWS_FETCH,
  NEWS_EACH_FETCH,
} from "../../../../utils/app-constants";

interface INewsProps {
  fetchNews: Function;
  mapFunction: (
    value: ActualiWidgetdata,
    index: number,
    array: ActualiWidgetdata[]
  ) => void;
  widgetsData: Array<ActualiWidgetdata>;
  categories: Array<string>;
  isLogin: boolean;
  userStatus: LoggedUserStatus;
  isLoading: boolean;
}
interface IParams {
  count: number;
  cat: Array<string>;
}

const NewsContainer: React.FC<INewsProps> = function ({
  isLoading,
  categories,
  fetchNews,
  mapFunction,
  widgetsData,
  isLogin,
  userStatus,
}) {
  const [newsCounter, _setNewsCounter] = useState(INITIAL_NEWS_FETCH);
  const counterRef = useRef<number>(newsCounter);
  const isLoadingRef = useRef<boolean>(isLoading);
  const handleScroll = useCallback(() => {
    const {
      clientHeight,
      scrollHeight,
      scrollTop,
    } = document.scrollingElement!;
    if (!isLoadingRef.current && scrollHeight - scrollTop === clientHeight) {
      setNewsCounter(counterRef.current + NEWS_EACH_FETCH);
    }
  }, []);

  const loadMoreNews = useCallback(() => {
    const currentSize = widgetsData.length;
    if (currentSize === newsCounter - INITIAL_NEWS_FETCH) {
      const params: IParams = {
        count: newsCounter,
        cat: categories,
      };
      fetchNews(params);
    }
  }, [categories, fetchNews, widgetsData.length, newsCounter]);

  const setNewsCounter = (num: number) => {
    counterRef.current = num;
    _setNewsCounter(num);
  };
  // in window event using ref object to get the current render value and update newsCounter accordingly

  //in mounting and clean add and remove the window  event listeners.
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // update isLoading reference for window event
  useEffect(() => {
    isLoadingRef.current = isLoading;
  }, [isLoading]);

  // call the fetch news action
  useEffect(() => {
    if (widgetsData.length === 0) {
      fetchNews({ cat: categories, count: INITIAL_NEWS_FETCH });
    } else {
      loadMoreNews();
    }
  }, [newsCounter, categories, fetchNews, widgetsData.length, loadMoreNews]);

  if (isLogin) {
    return (
      <React.Fragment>
        <div className={`${styles.mainContainer} container`}>
          {widgetsData.map(mapFunction)}
        </div>
        {isLoading && <div className={styles.loader}></div>}
      </React.Fragment>
    );
  }
  //if user not logged in - return to landing page
  else {
    return <Redirect to={"/"} />;
  }
};

const mapStateToProps = (state: RootState) => ({
  isLogin: state.userLoginStatus.isLogin,
  widgetsData: state.fetchDataState.data,
  mapFunction: state.userStatus.mapFunc,
  userStatus: state.userStatus.status,
  categories: state.userStatus.categories,
  isLoading: state.fetchDataState.loading,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, {}, AnyAction>
) => ({
  fetchNews: (params: Object) => dispatch(fetchNews(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
