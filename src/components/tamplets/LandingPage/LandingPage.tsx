import React, {useCallback} from "react";
import styles from "./LandingPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SignUpBox from "../../UI/organisms/SignUpBox/SignUpBox";
import {Button} from "react-bootstrap";
import  {useLocation, useHistory} from 'react-router-dom';
import LoginBox from "../../UI/organisms/LoginBox/LoginBox";

const userMap : Map<string, JSX.Element> = new Map();

userMap.set('/signup',<SignUpBox/>);
userMap.set('/',<SignUpBox/>);
userMap.set('/login',<LoginBox/>);

const LandPageTemplate: React.FC = () => {
    const location = useLocation();
    const history  = useHistory()
    const handleClickLogin = useCallback(() => {
        history.push('/login')
    },[history]);

    const handleClickSignup = useCallback(() => {

    },[])
  return (
    <div className={styles.backgroundImage}>
        <div className={styles.landingHeader}>
            <Button style={{margin:'0 2% 0 1%'}} onClick={handleClickLogin}> Login </Button>
            <Button onClick={handleClickSignup}> Signup </Button>
        </div>
        <Container className={styles.container} fluid>
        <Row className={"justify-content-center"}>
        </Row>
      </Container>
        {userMap.get(location.pathname)}
    </div>
  );
};

export default LandPageTemplate;
