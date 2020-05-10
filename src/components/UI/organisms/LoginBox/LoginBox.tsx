import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {Redirect} from 'react-router-dom'
import {connect} from "react-redux";
import {Dispatch} from 'redux';
import {changeToLogin, changeUserStatusToNew} from "../../../../store/actions";
import {AppHeight} from "../../../../store/types";
import {RootState} from "../../../../store/configureStore";
import CategoryCard from '../../molecules/NewsCard/CategoryCard';
import styles from './LoginBox.module.css';
import {Col} from "react-bootstrap";


interface ILoginBox {
    loginUser:Function,
    isLoginValid : boolean,
    logUserAsNew :Function


}

const LoginBox :React.FC<ILoginBox> =({loginUser,isLoginValid,logUserAsNew})=>{


    const handleSubmit = (event :any)=>{
        event.preventDefault();
        loginUser(AppHeight.DASHBOARD);
        //todo this is were distinguis betwee neew and exist user will be performed
        logUserAsNew( (category:any)=> {
            return (
                <Col key={category.url}>
                    <CategoryCard imageUrl={category.urlToImage} categoryName={category.category}/>
                </Col>);
        })

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
        isLoginValid : state.appHeighState.isLogin
    }

}

const mapStateToDispatch =  (dispatch: Dispatch)=> ({
    loginUser: (appHeight: AppHeight) => dispatch(changeToLogin(AppHeight.DASHBOARD)),
    logUserAsNew: (mapFunc :Function) => dispatch(changeUserStatusToNew(mapFunc))
});
export  default  connect(mapStateToProps,mapStateToDispatch)(LoginBox);