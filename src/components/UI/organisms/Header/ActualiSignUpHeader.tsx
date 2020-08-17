import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {LoggedUserStatus} from '../../../../store/types';
import styles from './ActualiUserHeader.module.scss'
import {MIN_CATEGORIES_NUM} from "../../../../utils/app-constants";
import {INewsData, NewsCard} from "../../molecules/ActualiCards/NewsCard";
import {RootState} from "../../../../store/configureStore";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {CardMapFunction} from "../../../../AppTypes";
import {changeUserStatusToExist} from "../../../../store/actions/UserStatusActions";


interface ISUHeaderProps{
    userStatus:LoggedUserStatus,
    categories : Array<string>,
    changeToExistUser:Function,
}
const ActualiSignUpHeader : React.FC<ISUHeaderProps> = ({userStatus,categories,changeToExistUser}) => {

    const handleCatSubmit = (e:any) => {
        e.preventDefault();
        if(categories.length >= MIN_CATEGORIES_NUM){
            changeToExistUser( (news:INewsData,index :number) => {
                return   <NewsCard key={index} title={news.title} urlToImage={news.urlToImage} url={news.url}/>;
            });
        }
    }

    return (
        <React.Fragment>
            {
                userStatus !== LoggedUserStatus.NOT_INITIALIZED &&
                <React.Fragment>
                    <h1>Actuali</h1>
                    <h1><div className={styles.chosenCategories}> {categories.length} </div>אנא בחר לפחות 3 נושאים על מנת שנוכל להתאים את אקטואלי במיוחד עבורך </h1>
                    <button onClick={handleCatSubmit} className={styles.submitCatButton}>המשך לפרופיל</button>
                </React.Fragment>

            }
        </React.Fragment>)

}

const mapStateToProps = (state:RootState) => ({
    categories : state.userStatus.categories,
    isLogin:state.userLoginStatus.isLogin,

});

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState,{},AnyAction>)=>({
    changeToExistUser  : (func :CardMapFunction)=> dispatch(changeUserStatusToExist(func))
});

export default connect(mapStateToProps,mapDispatchToProps)(ActualiSignUpHeader);