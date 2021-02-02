import React from "react";
import { connect } from "react-redux";
import { LoggedUserStatus } from "../../../store/types";
import { RootState } from "../../../store/configureStore";
import NewsContainer from "../../UI/organisms/NewsContainer/NewsContainer";
import CategoriesContainer from "../../UI/organisms/CategoriesContainer/CategoriesContainer";
import ActualiUserHeader from "../../UI/organisms/Header/ActualiUserHeader";
import ActualiCatChoiceHeader from "../../UI/organisms/Header/ActualiCatChoiceHeader";
import { useHistory } from "react-router-dom";

interface IDashboard {
  userStatus: LoggedUserStatus;
}

const HomePage: React.FC<IDashboard> = ({ userStatus }) => {
  const history = useHistory();
  return (
    <div className={"homePage"}>
      {
      history.location.pathname !== "/" ? (
        <React.Fragment>
          <ActualiUserHeader />
          <NewsContainer />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <ActualiCatChoiceHeader />
          <CategoriesContainer />
        </React.Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  userStatus: state.userStatus.status,
});

export default connect(mapStateToProps)(HomePage);
