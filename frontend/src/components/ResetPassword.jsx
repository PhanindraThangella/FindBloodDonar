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
    const [message,setMessage]=useState("");
    const passwordMatched=formData.newPassword === formData.conformPassword;
    useEffect(() => {
    }, [isVisible,isSuccess,isInvalid,isFailed]);
    const handleSubmit=async(event)=>{
        event.preventDefault();
        var res;
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
        }
        if(res.status==200)
        {
            setMessage("Success");
            setIsVisible(true);
            setIsSuccess(true);
            setIsInvalid(false);
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
            setIsFailed(false);
        }
        else{
            setMessage("Failed");
            setIsVisible(true);
            setIsFailed(true);
            setIsSuccess(false);
            setIsInvalid(false);
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
    return(
        <>
            <div className={styles.resetPassDiv}>
                <p className={styles.backButton} onClick={()=>{navigate('/Auth/login')}}>&lt;&lt; Back to Login</p>
                <h2>Reset Password</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Email">Email:</label>
                    <input type="email"  id="Email" name='email' value={formData.email} onChange={handleChange} required></input>
                    <label htmlFor="newPassword">New Password:</label>
                    <input type="password"  id="newPassword" name='newPassword' value={formData.newPassword} onChange={handleChange} required></input>
                    <label htmlFor="conformPassword">Conform Password:</label>
                    <input type="password"  id="conformPassword" name='conformPassword' value={formData.conformPassword} onChange={handleChange} onBlur={() => setTouched(true)}required></input>
                    {touched && formData.conformPassword &&(<p style={{margin:0,color:passwordMatched ?'green':'red'}}>{passwordMatched ? 'Matched ' : 'Not Matched '}</p>)}
                    <button disabled={!passwordMatched} className={styles.submitButton} type="submit">Update</button>
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
                                <span className={`material-symbols-outlined ${styles.modalInvalid}`}>error </span>
                                <p className={styles.modalMessage}> Invalid Email</p>
                                </>
                            )}
                            {isFailed && (
                                <>
                                <span className={`material-symbols-outlined ${styles.modalInvalid}`}>error </span>
                                <p className={styles.modalMessage}> Failed</p>
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