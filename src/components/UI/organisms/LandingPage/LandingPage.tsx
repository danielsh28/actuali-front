import React from 'react';
import DynamicPharse from '../../atoms/DynamicPharse/DynamicPhrase';
import ActualyLogo from '../../atoms/ActualyLogo/ActualyLogo';
import styles from './LandingPage.module.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LoginBox from "../LoginBox/LoginBox";

interface ILanding {
    onLogin: Function
}


const LandPageTemplate : React.FC<ILanding> =({onLogin})=> {
    return <div  className={styles.backgroundImage}>
        <Container className={styles.container} fluid  >
        <Row  className={'justify-content-center'} >
            <DynamicPharse/>
        </Row>
        </Container>
        <LoginBox onLogin={onLogin}/>
    </div>
}

export default LandPageTemplate;