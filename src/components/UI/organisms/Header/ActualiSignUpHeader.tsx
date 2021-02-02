import React, { MouseEvent, useEffect } from "react";
import { connect } from "react-redux";
import { LoggedUserStatus } from "../../../../store/types";
import styles from "./ActualiUserHeader.module.scss";
import { MIN_CATEGORIES_NUM } from "../../../../utils/app-constants";
import { INewsData, NewsCard } from "../../molecules/ActualiCards/NewsCard";
import { RootState } from "../../../../store/configureStore";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { clearData } from "../../../../store/actions/DataFetchingActions";
import { CardMapFunction, UsersChoicesMap } from "../../../../AppTypes";
import {
  changeUserStatusToExist,
  changeUserStatusToNew,
} from "../../../../store/actions/UserStatusActions";
import { useHistory } from "react-router-dom";
import CategoryCard, {
  ICategoryData,
} from "../../molecules/ActualiCards/CategoryCard";
import Button from "react-bootstrap/Button";

interface ISUHeaderProps {
  userStatus: LoggedUserStatus;
  categories: UsersChoicesMap;
  changeToExistUser: (func: CardMapFunction) => void;
  clearData: () => void;
  logUserAsNew: CardMapFunction;
}
const ActualiSignUpHeader: React.FC<ISUHeaderProps> = ({
  clearData,
  userStatus,
  categories,
  changeToExistUser,
  logUserAsNew,
}) => {
  const history = useHistory();

  const handleCatSubmit = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    if (categories.length >= MIN_CATEGORIES_NUM) {
      clearData();
      history.push("userDashboard");
      changeToExistUser((news: INewsData, index?: number) => {
        return (
          <NewsCard
            key={index}
            title={news.title}
            urlToImage={news.urlToImage}
            url={news.url}
          />
        );
      });
    }
  };

  useEffect(() => {
    logUserAsNew((category: ICategoryData, index?: number) => {
      return (
        <CategoryCard
          key={index}
          urlToImage={category.urlToImage}
          catName={category.catName}
        />
      );
    });
  });
  return (
    <>
      {userStatus !== LoggedUserStatus.NOT_INITIALIZED && (
        <>
          <h1>Actuali</h1>
          <h1 className={styles.headerContent}>
            <div id={styles.chosenCategories}> {categories.length} </div>
          <div id={styles.userGuide}>            אנא בחר לפחות 3 נושאים על מנת שנוכל להתאים את אקטואלי במיוחד עבורך
          </div>
          </h1>
          <Button  variant={'primary'} onClick={handleCatSubmit} className={styles.submitCatButton}>
            המשך לפרופיל
          </Button>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  categories: state.userStatus.categories,
  isLogin: state.userLoginStatus.isLogin,
  userStatus: state.userStatus.status,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, unknown, AnyAction>
) => ({
  clearData: () => dispatch(clearData()),
  changeToExistUser: (cardNewsMapFunc: CardMapFunction) =>
    dispatch(changeUserStatusToExist(cardNewsMapFunc)),
  logUserAsNew: (CategoryCardMapFunc: CardMapFunction) =>
    dispatch(changeUserStatusToNew(CategoryCardMapFunc)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActualiSignUpHeader);
