import styles from '../css/ContactInfoForm.module.css';
import {useNavigate,useLocation} from 'react-router-dom';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck,faCircleXmark,faPaperPlane } from '@fortawesome/free-regular-svg-icons';
function ContactInfoForm(){
    const API_URL=import.meta.env.VITE_API_URL;
    const navigate=useNavigate();
    const location = useLocation();
    const sendState = location.state?.sendState;
    const receiverEmail=location.state?.email;
    const senderuserId=location.state?.receiverUserId;
    const [formData,setFormData]=useState({name:"",hospitalname:"",contactnumber:"",address:"",receiveremail:receiverEmail,receiverUserId:senderuserId});
    const [isVisible, setIsVisible] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailed, setIsFailed] = useState(false);
    const [message,setMessage]=useState("");
    const handleChange = (e) => {
    setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
        }));
    };
    const sendMessage=async(e)=>
    {
        setIsVisible(true);
        setMessage("Sending...");
        e.preventDefault();
        if(sendState==='mail')
        {
            var res;
            try 
            {
                res = await fetch(`${API_URL}/api/send-email-to-donor`, {
                    method: "POST",
                    
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json" 
                    },
                    body: JSON.stringify(formData)
                });
                if(res.status==200)
                {
                    setMessage("Success");
                    setIsSuccess(true);
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
                        navigate("/dashboard");
                    }, 2000);
                }
                else{
                    setMessage("Failed");
                    setIsFailed(true);
                    setIsSuccess(false);
                }
            }
            catch(error)
            {
                setMessage("Failed");
                setIsFailed(true);
                setIsSuccess(false);
            }
        }
        else if(sendState==='notification')
        {
            var res;
            try 
            {
                res = await fetch("http://localhost:5000/api/user/sendNotification", {
                    method: "POST",
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json" 
                    },
                    body: JSON.stringify(formData)
                });
                if(res.status==200)
                {
                    setMessage("Success");
                    setIsSuccess(true);
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
                        navigate("/dashboard");
                    }, 2000);
                }
                else{
                    setMessage("Failed");
                    setIsFailed(true);
                    setIsSuccess(false);
                }
            }
            catch(error)
            {
                setMessage("Failed");
                setIsFailed(true);
                setIsSuccess(false);
            }
        }
    };
     const closeModal=()=>{
        setIsVisible(!isVisible);
        setIsSuccess(false);
        setIsFailed(false);
    };
return(
    <>
        <div className={styles.overlay}></div>
        <div className={styles.emailInfo}>
            <span className={styles.closebtn} onClick={()=>{navigate(-1)}}>X</span>
            <h2>Fill Details To Contact</h2>
            <form onSubmit={sendMessage}>
                <label htmlFor="name">Name:</label><input type="text" id="name"  name="name" placeholder="Patient or GurdianName" value={formData.name} onChange={handleChange} required/><br/>
                <label htmlFor="hospitalname">Hospital Name:</label><input type="text" id="hospitalname" name="hospitalname" placeholder="Ex:Apollo Hospital." value={formData.hospitalname} onChange={handleChange} required/><br/>
                <label htmlFor="contactnumber">Contact No:</label><input type="number" size="10" id="contactnumber"  name="contactnumber"value={formData.contactnumber} onChange={handleChange} required/><br/>
                <label htmlFor="address">Address:</label><textarea rows="4" cols="10" name="address"  placeholder="Please Specify Clear Address" id="address" value={formData.address} onChange={handleChange} required></textarea><br/>
                <input type="hidden" id="receiveremail" name="receiveremail" value={formData.receiveremail} onChange={handleChange} required/>
                <button type="submit">Submit</button>
            </form>
        </div>
        {isVisible && 
            <div className={styles.modaloverlay}>
                <div className={styles.modal}>
                    <span className={styles.modalCloseBtn} onClick={closeModal}>X</span>
                    <div className={styles.modalMain}>
                        {!isSuccess && !isFailed &&(
                            <>
                                <FontAwesomeIcon icon={faPaperPlane} className={styles.modalSending} />
                                <p className={styles.modalMessage}>{message}</p>
                            </>
                        )}
                        {isSuccess && (
                            <>
                                <FontAwesomeIcon icon={faCircleCheck} className={styles.modalSuccess} />
                                <p className={styles.modalMessage}>{message}</p>
                            </>
                        )}
                        {isFailed && (
                            <>
                                <span className={`material-symbols-outlined ${styles.modalInvalid}`}>error </span>
                                <p className={styles.modalMessage}> {message}</p>
                            </>
                        )}

                    </div>
                </div>
            </div>
        }   
    </>
);
}
export default ContactInfoForm;