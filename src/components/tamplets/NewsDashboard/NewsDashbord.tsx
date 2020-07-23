import React, {useEffect} from "react";
import {connect} from "react-redux";
import ActualiWidgetTamplate from "../../UI/organisms/WidgetTemplate/ActualiWidgetTamplate";
import {LoggedUserStatus} from "../../../store/types";
import ActualiHeader from "../../UI/organisms/Header/ActualiHeader";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "../../../store/configureStore";
import {AnyAction} from "redux";
import {fetchData} from "../../../store/actions/DataFetchingActions";
import styles from './NewsDahsboard.module.scss';
import {MIN_CATEGORIES_NUM} from "../../../utils/app-constants";
import {changeUserStatusToExist} from "../../../store/actions/UserStatusActions";
import {INewsData, NewsCard} from "../../UI/molecules/ActualiCards/NewsCard";
import {CardMapFunction} from "../../../AppTypes";

interface IDashboard {
    userStatus:LoggedUserStatus;
    getWidgets : CardMapFunction;
    categoryNum :number;
    changeToExistUser :Function;
}

const NewsDashboard:React.FC<IDashboard> = ({changeToExistUser, categoryNum,userStatus,getWidgets})=>{
    const handleCatSubmit = (e:any) => {
        e.preventDefault();
        if(categoryNum >= MIN_CATEGORIES_NUM){
            changeToExistUser( (news:INewsData,index :number) => {
                return   <NewsCard key={index} title={news.title} urlToImage={news.urlToImage} url={news.url}/>;
            });
        }
    }

    useEffect( ()=>{
        window.scrollTo(0, 0);
        if(userStatus === LoggedUserStatus.FIRST_LOGIN) {
            getWidgets('/api/choose-category');
        }
        else if(userStatus === LoggedUserStatus.EXIST) {
            getWidgets('/api/user-dashboard');
        }
    }, [getWidgets,userStatus]);

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
                        <button onClick={handleCatSubmit} className={styles.submitCatButton}>המשך לפרופיל</button>
                    </div> : <div> Welcome back  User!</div>
            )
        }
    <ActualiWidgetTamplate/>
    </div> )
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState,{},AnyAction>)=> ({
    getWidgets : (query:string)=> dispatch(fetchData(query)),
    changeToExistUser : (mapFunc: CardMapFunction) =>dispatch(changeUserStatusToExist(mapFunc))

});
const mapStateToProps = (state:RootState) =>({
    mapFunction: state.userStatus.mapFunc,
    widgetsData: state.fetchDataState.data,
    userStatus: state.userStatus.status,
    categoryNum : state.userStatus.categories.length
});

export default connect(mapStateToProps,mapDispatchToProps)(NewsDashboard)
