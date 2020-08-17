import React, {useEffect} from 'react';
import {connect} from "react-redux";
import styles from './ActualiUserHeader.module.scss';
import {LoggedUserStatus} from "../../../../store/types";
import {RootState} from "../../../../store/configureStore";

interface IHeaderProps{
    userStatus:LoggedUserStatus
}

const ActualiUserHeader :React.FC<IHeaderProps> = ({userStatus})=>{

    return (
        <div className= {styles.main}>
        <h1 className={styles.logo}>
            Actuali
        </h1>
        <input type='text' className={styles.searchBar}/>
        <div>
            <p style={{display:'inline'}}>דניאל שלי</p>
            <img className={styles.profilePic} src = 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-9/s960x960/99010983_10223880507507230_4231502222124384256_o.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=sxF24_wPX50AX8anysP&_nc_ht=scontent.fsdv2-1.fna&_nc_tp=7&oh=27589c82b327f0ebd209a4052b8a6738&oe=5F16F9F9'/>
        </div>
    </div>)
}


const mapStatetoProps = (state:RootState)=>({
    userStatus:state.userStatus.status
})
export default connect(mapStatetoProps,null)(ActualiUserHeader);