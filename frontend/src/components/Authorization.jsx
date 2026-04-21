import {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from '../css/Authorization.module.css';
import Login from './Login';
import SignUp from "./SignUp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons';
function Authorization(){
    //State Declaration for validation and Athentication
    const {flag}=useParams();   
    const navigate=useNavigate();
    return (
        <>
            <div className={styles.authContianer}>
                <div className={styles.backtoHome}>
                    <FontAwesomeIcon icon={faCircleArrowLeft} size="xl" style={{color: "rgb(0, 0, 0)",marginLeft:15}} /><a onClick={()=>{
                        navigate("/")
                    }}
                    className={styles.backthbtn}
                    >Back to home</a>
                </div>
                <div className={styles.lognavbar}>
                    <button className={styles.loginbtn} onClick={()=>{navigate("/Auth/login")}}>Login</button>
                    <button className={styles.signUpbtn} onClick={()=>{navigate("/Auth/signup")}}>Sign Up</button>
                </div>
                <div className={styles.renderContent}>
                    {flag==="login" &&<Login />}
                    {flag==="signup" &&<SignUp />}
                </div>
            </div>
        </>

    );
}
export default Authorization;