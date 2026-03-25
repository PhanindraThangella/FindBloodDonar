import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import styles from '../css/Authorization.module.css';
import Login from './Login';
import SignUp from "./SignUp";
function Authorization(){
    //State Declaration for validation and Athentication
    const {flag}=useParams();
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
                <button className={styles.loginbtn} onClick={handleLoginClick}>Login</button>
                <button className={styles.signUpbtn} onClick={handleSignupClick}>Sign Up</button>
            </div>
            {isLogin &&<Login />}
            {isSignup &&<SignUp handleLoginClick={handleLoginClick} />}
        </>

    );
}
export default Authorization;