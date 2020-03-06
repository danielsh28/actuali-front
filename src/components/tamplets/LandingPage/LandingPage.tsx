import React, {CSSProperties} from 'react';
import DynamicPharse from '../../UI/atoms/DynamicPhrase';
import ActualyLogo from '../../UI/atoms/ActualyLogo/ActualyLogo';
import styles from  './LandingPage.module.css';


const LandPageTamplate : React.FC =()=> {
    return <div  className={styles.landingContainer}>
       <ActualyLogo/>
    </div>
}

export default LandPageTamplate;