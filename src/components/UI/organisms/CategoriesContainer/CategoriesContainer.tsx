import React, { useEffect } from "react";
import styles from "../NewsContainer/NewsContainer.module.css";
import { RootState } from "../../../../store/configureStore";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { fetchCategories } from "../../../../store/actions/DataFetchingActions";
import { connect } from "react-redux";
import CategoryCard, {ICategoryData} from "../../molecules/ActualiCards/CategoryCard";

interface ICatProps {
  widgetsData: Array<ICategoryData>;
  fetchCategories: Function;
  isLoading: boolean;
}

const CategoriesContainer: React.FC<ICatProps> = ({
  isLoading,
  widgetsData,
  fetchCategories,
}) => {
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

    return (
      <React.Fragment>
        {isLoading ? (
          <div className={styles.loader}> </div>
        ) : (
          <React.Fragment>
            <div className={`${styles.mainContainer} container`}>
              {widgetsData.map((category:ICategoryData,index :number) => {
                return (
                    <CategoryCard  key={index} urlToImage={category.urlToImage} catName={category.catName}/>
                );
              })}
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }

const mapStateToProps = (state: RootState) => ({
  isLogin: state.userLoginStatus.isLogin,
  widgetsData: state.fetchDataState.categoriesData,
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
