import styles from '../css/FullDetailCard.module.css';
import usermenimg from "../assets/profile-men.png";
import userwomenimg from "../assets/profile-women.png";
import { useNavigate } from 'react-router-dom';
import {useEffect} from'react';
function FullDetailCard({user, onClose}){
    console.log(user);
    useEffect(() => {
    // Disable scroll
    document.body.style.overflow = 'hidden';

    // Re-enable scroll on cleanup
    return () => {
        document.body.style.overflow = 'auto';
    };
    }, []);
    const navigate=useNavigate();
return(
    <div>
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <span className={styles.closebtn} onClick={onClose}>X</span>
                    <div className={styles.userdata}>
                        <div className={styles.userImg}>
                            <img src={user.Gender === "Male"?usermenimg:userwomenimg}/>
                        </div>
                        <div className={styles.userdetails}>
                            <h4 className={styles.h4tags}>{user.StudentName}</h4>
                            <h4 className={styles.h4tags}>Age: {user.Age}</h4>
                            <h4 className={styles.h4tags}>Gender: {user.Gender}</h4>
                            <h4 className={styles.h4tags}>BloodGroup: {user.BloodGroup}</h4>
                            <h4 className={styles.h4tags}>City: {user.City}</h4>
                        </div>
                    </div>
                    <div className={styles.popupbtn}>
                        <button className={styles.whatsappbtn} onClick={()=>navigate("/ContactInfoForm",{state: {sendState:'whatsapp'}})}>Whatsapp</button>
                        <button className={styles.mailbtn} onClick={()=>navigate("/ContactInfoForm",{state: {sendState:'mail'}})}>Mail</button>
                    </div>
            </div>
        </div>
    </div>
)
}
export default FullDetailCard;