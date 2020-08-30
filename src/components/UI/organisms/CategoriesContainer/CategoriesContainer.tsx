import React, { useEffect } from "react";
import { ActualiWidgetdata, CardMapFunction } from "../../../../AppTypes";
import styles from "../NewsContainer/NewsContainer.module.css";
import { Redirect } from "react-router-dom";
import { RootState } from "../../../../store/configureStore";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { fetchCategories } from "../../../../store/actions/DataFetchingActions";
import { connect } from "react-redux";

interface ICatProps {
  widgetsData: Array<ActualiWidgetdata>;
  isLogin: boolean;
  mapFunction?: CardMapFunction;
  fetchCategories: Function;
  isLoading: boolean;
}

const CategoriesContainer: React.FC<ICatProps> = ({
  isLoading,
  mapFunction,
  isLogin,
  widgetsData,
  fetchCategories,
}) => {
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  if (isLogin) {
    return (
      <React.Fragment>
        {isLoading ? (
          <div className={styles.loader}> </div>
        ) : (
          <React.Fragment>
            <div className={`${styles.mainContainer} container`}>
              {mapFunction && widgetsData.map(mapFunction)}
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  } else {
    return <Redirect to={"/"} />;
  }
};

const mapStateToProps = (state: RootState) => ({
  isLogin: state.userLoginStatus.isLogin,
  widgetsData: state.fetchDataState.data,
  mapFunction: state.userStatus.mapFunc,
  isLoading: state.fetchDataState.loading,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, unknown, AnyAction>
) => ({
  fetchCategories: () => dispatch(fetchCategories()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesContainer);
