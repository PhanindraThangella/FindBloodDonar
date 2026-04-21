import {useState} from "react";
import styles from '../css/Login.module.css';
import {useNavigate} from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-regular-svg-icons';

function Login(){
    const API_URL=import.meta.env.VITE_API_URL;
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [isVisible, setIsVisible] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailed, setIsFailed] = useState(false);
    const [showPassword,setShowPassword]=useState(false);
    const [disablebtn,setDisablebtn]=useState(true);
    const [message,setMessage]=useState("");
    const navigate = useNavigate();
    const { setUser } = useAuth();
    const handleChange = (e) => {
    setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
        }));
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        var res;
        try{
            res=await fetch(`${API_URL}/api/Login`, {
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
        }
        if(res.status==200)
        {
            setMessage("Success");
            setIsVisible(true);
            setIsSuccess(true);
            setIsInvalid(false);
            setIsFailed(false);
            const data=await res.json();
            localStorage.setItem("token", data.token);
            localStorage.setItem("user",data.user);
            setUser(data.user);
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
                navigate("/dashboard");
            }, 2000);
        }
        else if(res.status==401){
            setMessage("Invalid Credentials!.");
            setIsVisible(true);
            setIsSuccess(false);
            setIsInvalid(true);
            setIsFailed(false);
        }
        else{
            setMessage("Failed");
            setIsVisible(true);
            setIsFailed(true);
            setIsSuccess(false);
            setIsInvalid(false);
        }
    };
    const closeModal=()=>{
        setIsVisible(!isVisible);
    };
    const togglePassword = () => {
        setShowPassword(prev => !prev);
    };
    return(
        <>
            <div className={styles.logindiv}>   
                <h2>Donor Login</h2>
                <form onSubmit={handleLogin} >
                    <label htmlFor="Email">Email:</label>
                    <input type="email" id="Email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required></input>
                    <label htmlFor="Password">Password:</label>
                    <div className={styles.passdiv}><input type={showPassword ? "text" : "password"}  id="Password" name='password' placeholder="Password" value={formData.password} onChange={handleChange} onBlur={()=>{setDisablebtn(false)}} required></input>{showPassword ?<span onClick={togglePassword} className={`material-symbols-outlined ${styles.togglePasswordIcon}`}>visibility_off</span>:<span onClick={togglePassword} className={`material-symbols-outlined ${styles.togglePasswordIcon}`}>visibility</span>}</div>
                    <button type="submit" disabled={disablebtn}>Login</button>
                </form>
                <p onClick={()=>{navigate('/ResetPassword')}}>Forgot Password</p>
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
                                    <span className={`material-symbols-outlined ${styles.modalInvalid}`}>error</span>
                                    <p className={styles.modalMessage}> Invalid Credentials</p>
                                </>
                            )}
                            {isFailed && (
                                <>
                                    <span className={`material-symbols-outlined ${styles.modalInvalid}`}>error</span>
                                    <p className={styles.modalMessage}> Failed</p>
                                </>
                            )}

                        </div>
                    </div>
                </div>
            }
    </>
    );

};
export default Login;
