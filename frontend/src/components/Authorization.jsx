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
    const [isLogin,setIsLogin]=useState(false);
    const [isSignup,setIsSignup]=useState(false);
    useEffect(()=>{
        if(flag==="login"){
            setIsLogin(true);
            setIsSignup(false);
        }
        else{
            setIsLogin(false);
            setIsSignup(true);
        }
    },[])
    const handleLoginClick=()=>{
        setIsLogin(true);
        setIsSignup(false);
    }
    const handleSignupClick=()=>{
        setIsLogin(false);
        setIsSignup(true);
    }   
    return (
        <>
            <div className={styles.lognavbar}>
                <FontAwesomeIcon icon={faCircleArrowLeft} size="xl" style={{color: "rgb(0, 0, 0)",marginLeft:15}} /><a onClick={()=>{
                    navigate("/")
                }}
                className={styles.backthbtn}
                >Back to home</a>
                <button className={styles.loginbtn} onClick={handleLoginClick}>Login</button>
                <button className={styles.signUpbtn} onClick={handleSignupClick}>Sign Up</button>
            </div>
            {isLogin &&<Login />}
            {isSignup &&<SignUp handleLoginClick={handleLoginClick} />}
        </>

    );
}
export default Authorization;