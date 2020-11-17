import React from 'react';
import ActInput from "../../atoms/ActInput/ActInput";
import styles from './LoginBox.module.scss';
import {Button} from "react-bootstrap";


const LoginBox : React.FC = ()=> {

    return(
        <div className={styles.main}>
            <ActInput placeholder={"הקלד/י אי-מייל כאן..."} label={'אי-מייל'}></ActInput>
            <ActInput placeholder={"הקלד/יסיסמא כאן..."} label={'סיסמא'}></ActInput>
            <Button className={styles.submit} variant={"primary"}> Submit</Button>
        </div>
    )
}

export default LoginBox;