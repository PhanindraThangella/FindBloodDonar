import {useState} from "react";
import styles from '../css/Authorization.module.css';
import Login from './Login';
import SignUp from "./SignUp";
function Authorization(){
    //State Declaration for validation and Athentication
    const [isLogin,setIsLogin]=useState(true);
    const [isSignup,setIsSignup]=useState(false);

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