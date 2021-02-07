import React from "react";
import { connect } from "react-redux";
import { LoggedUserStatus } from "../../../store/types";
import { RootState } from "../../../store/configureStore";
import CategoriesContainer from "../../UI/organisms/CategoriesContainer/CategoriesContainer";
import ActualiCatChoiceHeader from "../../UI/organisms/Header/ActualiCatChoiceHeader";

interface IDashboard {
  userStatus: LoggedUserStatus;
}

const CategoryPanel: React.FC<IDashboard> = () => {
  return (
    <div className={"catPanel"}>
        <React.Fragment>
          <ActualiCatChoiceHeader />
          <CategoriesContainer />
        </React.Fragment>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  userStatus: state.userStatus.status,
});

export default connect(mapStateToProps)(CategoryPanel);
