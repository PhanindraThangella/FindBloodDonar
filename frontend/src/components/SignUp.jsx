import {useState} from'react';
import {useNavigate} from 'react-router-dom';
import styles from '../css/SignUp.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-regular-svg-icons';
function SignUp({handleLoginClick}){
    const API_URL=import.meta.env.VITE_API_URL;
    const navigate=useNavigate();
    const [formData,setFormData]=useState({name:"",email:"",newPassword:"",conformPassword:""});
    const [touched,setTouched]=useState(false);
    const [showPassword,setShowPassword]=useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailed, setIsFailed] = useState(false);
    const [showPasswordRules,setShowPasswordRules]=useState(false);
    const [message,setMessage]=useState("");
    const passwordMatched =formData.newPassword === formData.conformPassword;
    const handleChange = (e) => {
    setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
        }));
    };
    const handleSignUp = async (e) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        e.preventDefault();
        if(passwordRegex.test(formData.newPassword)){
            var res;
            try{
                res=await fetch(`${API_URL}/api/add-user`, {
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
                setMessage("User Created");
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
            else if(res.status==409){
                setMessage("User Already Exsists");
                setIsVisible(true);
                setIsSuccess(false);
                setIsInvalid(true);
                setIsFailed(false);
                setShowPasswordRules(false);
            }
            else{
                setMessage("Failed");
                setIsVisible(true);
                setIsFailed(true);
                setIsSuccess(false);
                setIsInvalid(false);
                setShowPasswordRules(false);
            }
        }
        else{
            alert("Invalid Password format!");
        }
    };
    const togglePassword = () => {
        setShowPassword(prev => !prev);
    };
    const closeModal=()=>{
        setIsVisible(!isVisible);
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
        <div className={styles.signupdiv}>
            <h2>Donor Signup</h2>
            <form onSubmit={handleSignUp}>
                <label htmlFor="Name">Name:</label>
                <input type="text"  id="Name" name="name" placeholder='Enter Your Full Name' onChange={handleChange} value={formData.name} required></input>
                <label htmlFor="Email">Email:</label>
                <input type="email"  id="Email" name="email" placeholder='Enter Your Email' onChange={handleChange} value={formData.email} required></input>
                <label htmlFor="newPassword">New Password:</label>
                <div className={styles.passdiv}><input type={showPassword ? "text" : "password"}  id="newPassword" placeholder='Enter Your Password' name='newPassword' value={formData.newPassword} onChange={handleChange} required></input>{showPassword ?<span onClick={togglePassword} className={`material-symbols-outlined ${styles.togglePasswordIcon}`}>visibility_off</span>:<span onClick={togglePassword} className={`material-symbols-outlined ${styles.togglePasswordIcon}`}>visibility</span>}</div>
                <label htmlFor="conformPassword">Confirm Password:</label>
                <div className={styles.passdiv}><input type={showPassword ? "text" : "password"}  id="conformPassword" placeholder='ReEnter Your Password' name='conformPassword' value={formData.conformPassword} onChange={handleChange} onBlur={() => setTouched(true)} required></input>{showPassword ?<span onClick={togglePassword} className={`material-symbols-outlined ${styles.togglePasswordIcon}`}>visibility_off</span>:<span onClick={togglePassword} className={`material-symbols-outlined ${styles.togglePasswordIcon}`}>visibility</span>}</div>
                <a className={styles.passRules} onClick={handleShowRules}>Password Rules</a>
                {touched && formData.conformPassword && (<p style={{margin:0,color:passwordMatched ? 'green':'red'}}>{passwordMatched ? 'Matched' :'Not Matched'}</p>)}
                <button disabled={!passwordMatched || !touched} type="submit">Sign Up</button>
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
                            <p className={styles.modalMessage}>{message}</p>
                            </>
                        )}
                        {isFailed && (
                            <>
                            <span className={`material-symbols-outlined ${styles.modalInvalid}`}>&#xe000; </span>
                            <p className={styles.modalMessage}>{message}</p>
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

export default SignUp;