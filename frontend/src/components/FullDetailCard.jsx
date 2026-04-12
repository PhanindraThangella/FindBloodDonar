import styles from '../css/FullDetailCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import {useEffect} from'react';
function FullDetailCard({user, onClose}){
    useEffect(() => {
    // Disable scroll
    document.body.style.overflow = 'hidden';

    // Re-enable scroll on cleanup
    return () => {
        document.body.style.overflow = 'auto';
    };
    }, []);
    const navigate=useNavigate();
    const formattedName = user.Name.split(' ').join('+');
    const size=200;
    const avatarUrl = `https://ui-avatars.com/api/?name=${formattedName}&background=random&color=fff&size=${size}&bold=true`;
return(
    <div>
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <span className={styles.closebtn} onClick={onClose}>X</span>
                    <div className={styles.userdata}>
                        <div className={styles.userImg}>
                            {/* <img src={user.Gender === "Male"?usermenimg:userwomenimg}/> */}
                            <img src={avatarUrl} alt={`${user.Name}'s profile`}/>
                        </div>
                        <div className={styles.userdetails}>
                            <h3>{user.Name}</h3>
                            <p><strong>Age:</strong> {user.Age}</p>
                            <p><strong>Gender:</strong> {user.Gender}</p>
                            <p><strong>Blood Group:</strong> {user.BloodGroup}</p>
                            <p><strong>Date Of Birth:</strong> {user.DateOfBirth}</p>
                            <p><strong>City:</strong> {user.City}</p>
                            <p><strong>Landmark:</strong> {user.Landmark}</p>
                        </div>
                    </div>
                    <div className={styles.popupbtn}>
                        <button className={styles.notification} onClick={()=>navigate("/ContactInfoForm",{state: {sendState:'notification',email:user.Email,receiverUserId:user.UserId}})}><FontAwesomeIcon icon={faBell} style={{color: "rgb(255, 255, 255)",marginRight:8}} />Notify</button>
                        <button className={styles.mailbtn} onClick={()=>navigate("/ContactInfoForm",{state: {sendState:'mail',email:user.Email}})}><FontAwesomeIcon icon={faEnvelope} style={{color: "rgb(255, 255, 255)",marginRight:8}} />Mail</button>
                    </div>
            </div>
        </div>
    </div>
)
}
export default FullDetailCard;