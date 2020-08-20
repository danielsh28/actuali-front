import React from "react";
import {connect} from "react-redux";
import {LoggedUserStatus} from "../../../store/types";
import {RootState} from "../../../store/configureStore";
import NewsContainer from "../../UI/organisms/NewsContainer/NewsContainer";
import CategoriesContainer from "../../UI/organisms/CategoriesContainer/CategoriesContainer";
import ActualiUserHeader from "../../UI/organisms/Header/ActualiUserHeader";
import ActualiSignUpHeader from "../../UI/organisms/Header/ActualiSignUpHeader";

interface IDashboard {
    userStatus:LoggedUserStatus;
}

const HomePage:React.FC<IDashboard> = ({userStatus})=>{
    return ( <div className={'homePage'}  >
        {
            userStatus === LoggedUserStatus.EXIST ?
                <React.Fragment>
                    <ActualiUserHeader/>
                    <NewsContainer/>
                </React.Fragment>:
                <React.Fragment>
                    <ActualiSignUpHeader/>
                <CategoriesContainer/>
                </React.Fragment>}
    </div> )
}

const mapStateToProps = (state:RootState) =>({
    userStatus: state.userStatus.status,
});

export default connect(mapStateToProps,null)(HomePage)
