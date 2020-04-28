import React from 'react';
import DynamicPharse from '../../atoms/DynamicPharse/DynamicPhrase';
import ActualyLogo from '../../atoms/ActualyLogo/ActualyLogo';
import styles from './LandingPage.module.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LoginBox from "../LoginBox/LoginBox";




const LandPageTemplate : React.FC  = () => {
    return <div  className={styles.backgroundImage}>
        <Container className={styles.container} fluid  >
        <Row  className={'justify-content-center'} >
            <DynamicPharse/>
        </Row>
        </Container>
        <LoginBox/>
    </div>
}

export default LandPageTemplate;

