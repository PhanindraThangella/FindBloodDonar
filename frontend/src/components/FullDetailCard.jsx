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
                            <table>
                                <thead>
                                    <tr>
                                        <th colSpan={2}><h3>{user.Name}</h3></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><p><strong>Age:</strong></p></td>
                                        <td><p>{user.Age}</p></td>
                                    </tr>
                                    <tr>
                                        <td><p><strong>Gender:</strong></p></td>
                                        <td><p>{user.Gender}</p></td>
                                    </tr>
                                    <tr>
                                        <td><p><strong>Blood Group:</strong></p></td>
                                        <td><p>{user.BloodGroup}</p></td>
                                    </tr>
                                    <tr>
                                        <td><p><strong>Date Of Birth:</strong></p></td>
                                        <td><p>{user.DateOfBirth}</p></td>
                                    </tr>
                                    <tr>
                                        <td><p><strong>City:</strong></p></td>
                                        <td><p>{user.City}</p></td>
                                    </tr>
                                    <tr>
                                        <td><p><strong>Landmark:</strong></p></td>
                                        <td><p>{user.Landmark}</p></td>
                                    </tr>
                                </tbody>
                            </table>
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