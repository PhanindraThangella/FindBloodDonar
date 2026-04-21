import {useState,useEffect} from 'react';
import styles from '../css/ResetPassword.module.css';
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-regular-svg-icons';

function ResetPassword(){
    const API_URL=import.meta.env.VITE_API_URL;
    const [touched,setTouched]=useState(false);
    const [formData,setFormData]=useState({email:"",newPassword:"",conformPassword:""});
    const navigate=useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailed, setIsFailed] = useState(false);
    const [showPasswordRules,setShowPasswordRules]=useState(false);
    const [message,setMessage]=useState("");
    const [showPassword,setShowPassword]=useState(false);
    const passwordMatched=formData.newPassword === formData.conformPassword;
    useEffect(() => {
    }, [isVisible,isSuccess,isInvalid,isFailed]);
    const handleSubmit=async(event)=>{
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        event.preventDefault();
        var res;
        if(passwordRegex.test(formData.newPassword)){
            try{
                res=await fetch(`${API_URL}/api/user/updatePassword`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body:JSON.stringify(formData)
                });
            }
            catch(error){
                setMessage("Failed");
                setIsVisible(true);
                setIsFailed(true);
                setIsSuccess(false);
                setIsInvalid(false);
                setShowPasswordRules(false);
            }
            if(res.status==200)
            {
                setMessage("Success");
                setIsVisible(true);
                setIsSuccess(true);
                setIsInvalid(false);
                setShowPasswordRules(false);
                setIsFailed(false);
                setTimeout(()=>{
                    setMessage("Redirecting.");
                },800);
                setTimeout(()=>{
                    setMessage("Redirecting..");
                },1200);
                setTimeout(()=>{
                    setMessage("Redirecting...");
                },1600);
                setTimeout(() => {
                    navigate("/Auth/login");
                }, 2000);
            }
            else if(res.status==401){
                setMessage("Invalid Email");
                setIsVisible(true);
                setIsSuccess(false);
                setIsInvalid(true);
                setShowPasswordRules(false);
                setIsFailed(false);
            }
            else{
                setMessage("Failed");
                setIsVisible(true);
                setIsFailed(true);
                setIsSuccess(false);
                setShowPasswordRules(false);
                setIsInvalid(false);
            }
        }
        else{
            alert("Invalid password format!.");
        }
    }
    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    const closeModal=()=>{
        setIsVisible(!isVisible);
    };
    const togglePassword = () => {
        setShowPassword(prev => !prev);
    };
    const handleShowRules=()=>{
        setShowPasswordRules(true);
        setIsVisible(true);
        setIsFailed(false);
        setIsInvalid(false);
        setIsSuccess(false);
        setMessage("");
    }
    return(
        <>
            <div className={styles.resetPassDiv}>
                <p className={styles.backButton} onClick={()=>{navigate('/Auth/login')}}>&lt;&lt; Back to Login</p>
                <h2>Reset Password</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Email">Email:</label>
                    <input type="email"  id="Email" name='email' value={formData.email} placeholder='Enter email address' onChange={handleChange} required></input>
                    <label htmlFor="newPassword">New Password:</label>
                    <div className={styles.passdiv}><input type={showPassword ? "text" : "password"}  id="newPassword" placeholder='Enter Your Password' name='newPassword' value={formData.newPassword} onChange={handleChange} required></input>{showPassword ?<span onClick={togglePassword} className={`material-symbols-outlined ${styles.togglePasswordIcon}`}>visibility_off</span>:<span onClick={togglePassword} className={`material-symbols-outlined ${styles.togglePasswordIcon}`}>visibility</span>}</div>
                    <label htmlFor="conformPassword">Confirm Password:</label>
                    <div className={styles.passdiv}><input type={showPassword ? "text" : "password"}  id="conformPassword" placeholder='ReEnter Your Password' name='conformPassword' value={formData.conformPassword} onChange={handleChange} onBlur={() => setTouched(true)} required></input>{showPassword ?<span onClick={togglePassword} className={`material-symbols-outlined ${styles.togglePasswordIcon}`}>visibility_off</span>:<span onClick={togglePassword} className={`material-symbols-outlined ${styles.togglePasswordIcon}`}>visibility</span>}</div>
                    <a className={styles.passRules} onClick={handleShowRules}>Password Rules</a>
                    {touched && formData.conformPassword &&(<p style={{margin:0,color:passwordMatched ?'green':'red'}}>{passwordMatched ? 'Matched ' : 'Not Matched '}</p>)}
                    <button disabled={(!passwordMatched || !touched)} className={styles.submitButton} type="submit">Update</button>
                </form>
            </div>
           {isVisible && 
                 <div className={styles.overlay}>
                    <div className={styles.modal}>
                        <span className={styles.modalCloseBtn} onClick={closeModal}>X</span>
                        <div className={styles.modalMain}>
                            {isSuccess && (
                                <>
                                <FontAwesomeIcon icon={faCircleCheck} className={styles.modalSuccess} />
                                <p className={styles.modalMessage}>{message}</p>
                                </>
                            )}
                            {isInvalid && (
                                <>
                                <span className={`material-symbols-outlined ${styles.modalInvalid}`}>&#xe000; </span>
                                <p className={styles.modalMessage}> Invalid Email</p>
                                </>
                            )}
                            {isFailed && (
                                <>
                                <span className={`material-symbols-outlined ${styles.modalInvalid}`}>&#xe000; </span>
                                <p className={styles.modalMessage}> Failed</p>
                                </>
                            )}
                            {showPasswordRules &&(
                                <>
                                    <ul className={styles.passulelements}>
                                        <li>Minimum 8 characters long.</li>
                                        <li>Atleast 1 uppercase Alphabet</li>
                                        <li>Atleast 1 lowercase Alphabet</li>
                                        <li>Atleast 1 special symbols</li>
                                        <li>Atleast 1 numeric digit</li>
                                    </ul>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default ResetPassword;