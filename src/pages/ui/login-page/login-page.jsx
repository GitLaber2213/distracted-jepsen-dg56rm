import React from "react";
import classes from './login-page.module.css'
import userNamePhoto from '../../../shared/assets/userName.png'
import { Button, FormInput } from "../../../shared";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/chats", {relative: "path"})
    }

    return (
        <div className={classes.loginContainer}>
            <FormInput placeholder={'Username'} img={userNamePhoto} imgHeight={25} imgWidth={25}/>
            <Button handleClick={handleClick} text={'Login'}/>

            <div className={classes.PS}>
                P.S Authorization is mediocre since the real project provides real email addresses and phone numbers. In this test task, authorization occurs only using an existing username.
            </div>
        </div>
    )
}


export default Login;