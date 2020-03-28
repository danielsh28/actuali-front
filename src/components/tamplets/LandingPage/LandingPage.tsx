import React from 'react';
import DynamicPharse from '../../UI/atoms/DynamicPhrase';
import ActualyLogo from '../../UI/atoms/ActualyLogo/ActualyLogo';
import styles from  './LandingPage.module.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginBox from "../../UI/organisms/LoginBox/LoginBox";



const LandPageTemplate : React.FC =()=> {
    return <div  className={styles.backgroundImage}>
        <Container className={styles.container} fluid  >
        <Row  className={'justify-content-center'} >
            <Col style={{position:'fixed',
                top:'50%'}}xs={6}>
            <DynamicPharse/>
            </Col>
        </Row>
        </Container>
        <LoginBox/>
    </div>
}

export default LandPageTemplate;