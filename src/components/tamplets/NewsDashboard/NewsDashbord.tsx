import React, {useEffect} from "react";
import {connect} from "react-redux";
import ActualiWidgetTamplate from "../../UI/organisms/WidgetTemplate/ActualiWidgetTamplate";
import {LoggedUserStatus} from "../../../store/types";
import ActualiHeader from "../../UI/organisms/Header/ActualiHeader";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "../../../store/configureStore";
import {AnyAction} from "redux";
import {fetchData} from "../../../store/actions/DataFetchingActions";
import styles  from './NewsDahsboard.module.scss';

interface IDashboard {
    isLogin : boolean,
    userStatus:LoggedUserStatus;
    getWidgets : Function;
    categoryNum :number
}
const NewsDashboard  :React.FC<IDashboard> = ({ categoryNum,isLogin,userStatus,getWidgets})=>{

    useEffect( ()=>{
        window.scrollTo(0, 0)
        if(userStatus === LoggedUserStatus.FIRST_LOGIN) {
            getWidgets('/web-api/choose-category');
        }
        else  {
            getWidgets('/web-api/user-dashboard');

        }
    },[isLogin]);

    return ( <div>
        {userStatus === LoggedUserStatus.EXIST &&
        <ActualiHeader/>
            }
        {
            userStatus !== LoggedUserStatus.NOT_INITIALIZED  && (
                userStatus === LoggedUserStatus.FIRST_LOGIN ?
                    <div>
                        <h1>Actuali</h1>
                        <h1><div className={styles.chosenCategories}> {categoryNum} </div>אנא בחר לפחות 3 נושאים על מנת שנוכל להתאים את אקטואלי במיוחד עבורך </h1>
                    </div> : <div> Welcome back  User!</div>)
        }
    <ActualiWidgetTamplate/>
    </div> )
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState,{},AnyAction>)=> ({
    getWidgets : (query:string)=> dispatch(fetchData(query)),

});
const mapStateToProps = (state:RootState) =>({
    mapFunction: state.userState.mapFunc,
    widgetsData: state.fetchDataState.data,
    isLogin: state.userLoginStatus.isLogin,
    userStatus: state.userState.status,
    categoryNum : state.userState.categories.length
});

export default connect(mapStateToProps,mapDispatchToProps)(NewsDashboard)
