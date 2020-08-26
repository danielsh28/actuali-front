import React from "react";
import DynamicPharse from "../../UI/atoms/DynamicPharse/DynamicPhrase";
import styles from "./LandingPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LoginBox from "../../UI/organisms/LoginBox/LoginBox";

const LandPageTemplate: React.FC = () => {
  return (
    <div className={styles.backgroundImage}>
      <Container className={styles.container} fluid>
        <Row className={"justify-content-center"}>
          <DynamicPharse />
        </Row>
      </Container>
      <LoginBox />
    </div>
  );
};

export default LandPageTemplate;
