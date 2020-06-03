import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {Redirect} from 'react-router-dom'
import {connect} from "react-redux";
import {Dispatch} from 'redux';
import {changeUserStatusToNew} from "../../../../store/actions/UserStatusActions";
import {AppHeight} from "../../../../store/types";
import {RootState} from "../../../../store/configureStore";
import CategoryCard, {ICategoryData} from '../../molecules/ActualiCards/CategoryCard';
import styles from './LoginBox.module.css';
import {Col} from "react-bootstrap";
import {CardMapFunction} from "../../../../AppTypes";
import { changeToLogin } from '../../../../store/actions/LoginStatusActions';


interface ILoginBox {
    loginUser:Function,
    isLoginValid : boolean,
    logUserAsNew :CardMapFunction


}

const LoginBox :React.FC<ILoginBox> =({loginUser,isLoginValid,logUserAsNew})=>{


    const handleSubmit = (event :any)=>{
        event.preventDefault();
        loginUser(AppHeight.DASHBOARD);
        //todo this is were distinguis betwee n,ew and exist user will be performed
        logUserAsNew((category:ICategoryData,index :number) => {
            return (
                <Col  key={index} xs ={4}>
                    <CategoryCard  urlToImage={category.urlToImage} catName={category.catName}/>
                </Col>
            );
        });

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
        isLoginValid : state.userLoginStatus.isLogin
    }

}

const mapStateToDispatch =  (dispatch: Dispatch)=> ({
    loginUser: (appHeight: AppHeight) => dispatch(changeToLogin(AppHeight.DASHBOARD)),
    logUserAsNew: (mapFunc :CardMapFunction) => dispatch(changeUserStatusToNew(mapFunc))
});
export  default  connect(mapStateToProps,mapStateToDispatch)(LoginBox);