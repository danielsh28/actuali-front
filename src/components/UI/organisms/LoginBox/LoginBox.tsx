import React, {useCallback, useState} from 'react';
import ActInput from "../../atoms/ActInput/ActInput";
import styles from './LoginBox.module.scss';
import {Button} from "react-bootstrap";
import validator from 'validator';



const LoginBox : React.FC = ()=> {
    const [emailVal,setEmailVal] = useState<string>('');
    const [pwdVal,setPwdVal] = useState<string>('');
    const handleEmailChange = useCallback((event) =>{
     event.preventDefault();
        setEmailVal(event.target.value);

    },[setEmailVal]);

    const handlePwdChange = useCallback((event) =>{
        event.preventDefault();
        setPwdVal(event.target.value);

    },[setPwdVal]);
    const handleSubmit = useCallback((e : React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        if(validator.isEmail(emailVal)){

        }
        else{
            setEmailVal('');
            setPwdVal('');
        }
    },[emailVal,setEmailVal]);
    return(
        <form  onSubmit={handleSubmit} className={styles.main}>
            <ActInput value={emailVal} onChange={handleEmailChange}  placeholder={"הקלד/י אי-מייל כאן..."} label={'אי-מייל'}/>
            <ActInput value={pwdVal} onChange={handlePwdChange}  placeholder={"הקלד/יסיסמא כאן..."} label={'סיסמא'}/>
            <Button type={"submit"} className={styles.submit} onSubmit={handleSubmit} variant={"primary"}> Submit</Button>
        </form>
    )
}

export default LoginBox;