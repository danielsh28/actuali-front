import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {Link, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { changeUserStatusToNew } from "../../../../store/actions/UserStatusActions";
import { AppHeight, LoggedUserStatus } from "../../../../store/types";
import { RootState } from "../../../../store/configureStore";
import styles from "./SignUpBox.module.scss";
import { CardMapFunction } from "../../../../AppTypes";
import { changeToLogged } from "../../../../store/actions/LoginStatusActions";

interface ISignUpBox {
  loginUser: (height: AppHeight) => void;
  isSignUpValid: boolean;
  logUserAsNew: CardMapFunction;
  userStatus: LoggedUserStatus;
}

const SignUpBox: React.FC<ISignUpBox> = ({
  loginUser,
  isSignUpValid,
  userStatus,
}) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    loginUser(AppHeight.DASHBOARD);
  };
  return isSignUpValid ? (
    <Redirect
      to={`/${
        userStatus === LoggedUserStatus.EXIST ? "userDashboard" : "choose-news"
      }`}
    />
  ) : (
    <Container className={styles.SignUpBox}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            {`We'll never share your email with anyone else.`}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="ormBasicCheckbox">
        </Form.Group>
        <Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form.Group>
      </Form>
      <Link to={'/login'} >
        Already have an account? Log In
      </Link>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isSignUpValid: state.userLoginStatus.isLogin,
    userStatus: state.userStatus.status,
  };
};

const mapStateToDispatch = (dispatch: Dispatch) => ({
  loginUser: (appHeight: AppHeight) => dispatch(changeToLogged()),
  logUserAsNew: (mapFunc: CardMapFunction) =>
    dispatch(changeUserStatusToNew(mapFunc)),
});
export default connect(mapStateToProps, mapStateToDispatch)(SignUpBox);
