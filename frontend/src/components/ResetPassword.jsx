import {useState} from 'react';
import styles from '../css/ResetPassword.module.css';
import {useNavigate} from 'react-router-dom';

function ResetPassword(){
    const [touched,setTouched]=useState(false);
    const [newPassword,setNewPassword]=useState("");
    const [conformPassword,setConformPassword]=useState("");
    const navigate=useNavigate();
    const passwordMatched=newPassword === conformPassword;
    return(
        <div className={styles.resetPassDiv}>
             <p className={styles.backButton} onClick={()=>{navigate('/Auth')}}>&lt;&lt; Back to Login</p>
            <h2>Reset Password</h2>
            <form>
                <label htmlFor="Email">Email:</label>
                <input type="email"  id="Email" required></input>
                <label htmlFor="newPassword">New Password:</label>
                <input type="password"  id="newPassword" value={newPassword} onChange={(e)=>{setNewPassword(e.target.value)}} required></input>
                <label htmlFor="conformPassword">Conform Password:</label>
                <input type="password"  id="conformPassword" value={conformPassword} onChange={(e)=>{setConformPassword(e.target.value)}} onBlur={() => setTouched(true)}required></input>
                {touched && conformPassword &&(<p style={{margin:0,color:passwordMatched ?'green':'red'}}>{passwordMatched ? 'Matched ' : 'Not Matched '}</p>)}
                <button disabled={!passwordMatched} className={styles.submitButton}>Update</button>
            </form>
        </div>
    );
}

export default ResetPassword;