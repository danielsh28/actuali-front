import React, { useEffect, useRef} from "react";
import {connect} from "react-redux";
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
import query from 'query-string';
import ActualiWidgetTamplate from "../../UI/organisms/WidgetTemplate/ActualiWidgetTamplate";

interface IDashboard {
    userStatus:LoggedUserStatus;
    getWidgets : CardMapFunction;
    categories :Array<string>;
    changeToExistUser :Function;
    isLoading:boolean;
}

const NewsDashboard:React.FC<IDashboard> = ({isLoading,changeToExistUser, categories,userStatus,getWidgets})=>{
    const dashboardRef = useRef<HTMLDivElement>(null);
    const handleCatSubmit = (e:any) => {
        e.preventDefault();
        if(categories.length >= MIN_CATEGORIES_NUM){
            changeToExistUser( (news:INewsData,index :number) => {
                return   <NewsCard key={index} title={news.title} urlToImage={news.urlToImage} url={news.url}/>;
            });
        }
    }

    useEffect( ()=>{
        if(userStatus === LoggedUserStatus.FIRST_LOGIN) {
            getWidgets('/api/choose-category');
        }
        else if(userStatus === LoggedUserStatus.EXIST) {
            getWidgets(`/api/user-dashboard?${query.stringify({cat:categories})
            }`);
        }

    }, [getWidgets,userStatus]);




    return ( <div className={'dashboard'} ref ={dashboardRef} >
        {userStatus === LoggedUserStatus.EXIST &&
        <ActualiHeader/>
            }
        {
            userStatus !== LoggedUserStatus.NOT_INITIALIZED  && (
                userStatus === LoggedUserStatus.FIRST_LOGIN ?
                    <React.Fragment>
                        <h1>Actuali</h1>
                        <h1><div className={styles.chosenCategories}> {categories.length} </div>אנא בחר לפחות 3 נושאים על מנת שנוכל להתאים את אקטואלי במיוחד עבורך </h1>
                        <button onClick={handleCatSubmit} className={styles.submitCatButton}>המשך לפרופיל</button>
                    </React.Fragment> : <div> Welcome back  User!</div>
            )
        }
        {isLoading ? <div  className={styles.loader}></div> : <ActualiWidgetTamplate/>}
    </div> )
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState,{},AnyAction>)=> ({
    getWidgets : (query:string)=> dispatch(fetchData(query)),
    changeToExistUser : (mapFunc: CardMapFunction) =>dispatch(changeUserStatusToExist(mapFunc))

});
const mapStateToProps = (state:RootState) =>({
    mapFunction: state.userStatus.mapFunc,
    widgetsData: state.fetchDataState.data,
    isLoading: state.fetchDataState.loading,
    userStatus: state.userStatus.status,
    categories : state.userStatus.categories
});

export default connect(mapStateToProps,mapDispatchToProps)(NewsDashboard)
