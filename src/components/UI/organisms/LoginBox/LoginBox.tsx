import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import styles from './LoginBox.module.css';
import Button from "react-bootstrap/Button";
import {Redirect} from 'react-router-dom'
import {connect} from "react-redux";
import {Dispatch} from 'redux';
import {changeToLogin} from "../../../../store/actions";
import {AppHeight} from "../../../../store/types";
import {RootState} from "../../../../store/configureStore";

interface ILoginBox {
    loginToDashboard:Function,
    isLoginValid : boolean

}

const LoginBox :React.FC<ILoginBox> =({loginToDashboard,isLoginValid})=>{


    const handleSubmit = (event :any)=>{
        event.preventDefault();
        loginToDashboard(AppHeight,);

    };
    return(
              isLoginValid ?  <Redirect to={'/userDashboard'}/> :
                <Container className={styles.loginBox}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>


    )

};

const mapStateToProps = (state:RootState)=>{
    return {
        isLoginValid : state.appHeightReducer.isLogin
    }

}

const mapStateToDispatch =  (dispatch: Dispatch)=> ({
    changeHeight: (appHeight: AppHeight) => dispatch(changeToLogin(AppHeight.DASHBOARD))
    });
export  default  connect(mapStateToProps,mapStateToDispatch)(LoginBox);