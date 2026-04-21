import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import styles from '../css/ProfileDashboard.module.css';
import { UserPen,PencilOff } from 'lucide-react';   
function ProfileDashboard()
{
    const API_URL=import.meta.env.VITE_API_URL;
    const [isDisabled,setIsDisabled]=useState(true);
    const [data,setData]=useState({});
    const [userNotFound,setUserNotFound]=useState(false);
    const token=localStorage.getItem("token");
    const [error,setError]=useState(false);
    const [isLoading,setLoading]=useState(false);
    const navigate=useNavigate();
    useEffect(()=>{
        fetchData();
    },[]);
    async function fetchData(){
        try{
            axios.get(`${API_URL}/api/User`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            .then((response) => {
                setData(response.data);
                setUserNotFound(false);
            })
            .catch((err) => {
                setUserNotFound(true);
            });
        }
        catch(error){
            alert("error");
        }
    }   
    const handleEdit = ()=>{
        if(isDisabled)
        {
            setIsDisabled(false);
        }
        else{
            setIsDisabled(true);
        }
    };
    const handleChange = (e) => {
    setData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
        }));
    };
    const handleSubmit=async()=>{
        setLoading(true);
        try {
        const res = await fetch(`${API_URL}/api/UpdateProfile`, {
            method: "POST",
            headers: { "Content-Type": "application/json",
                "Authorization":`Bearer ${token}`,
             },
            body: JSON.stringify(data)
        });
        if(res.ok)
        {
            fetchData();
            handleEdit();
        }
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }
    var formattedName = "Hello";
    if(!userNotFound){
        formattedName=data.Name?.split(' ').join('+');   
    }
    const size=200;
    const avatarUrl = `https://ui-avatars.com/api/?name=${formattedName}&background=random&color=fff&size=${size}&bold=true`;
    return(
        <>
            <div className={styles.mainContainer}>
                {userNotFound &&  (
                    <div className={styles.noDataFound}>
                        <h1>You have not registered as donor, Please register first.<br></br><span onClick={()=>{navigate("/Form")}}>Click Here</span></h1>
                    </div>
                )}
                {!userNotFound && (
                    <>
                        <div className={styles.topNotch}>
                            <div className={styles.imageDiv}>
                                <img src={avatarUrl} alt={`${data.Name}'s profile`}/>
                            </div>
                            <div className={styles.donatedDiv}>
                                <h4>Blood Donated</h4>
                                <p className={styles.number}>{data.BloodDonated}</p>
                                <p className={styles.times}>times</p>
                            </div>
                            <div className={styles.receivedDiv}>
                                <h4>Blood Received</h4>
                                <p className={styles.number}>{data.BloodReceived}</p>
                                <p className={styles.times}>times</p>
                            </div>
                        </div>
                        <div className={styles.bottomMain}>
                            <div className={styles.editButtonDiv} ><button className={styles.editButton} onClick={handleEdit}>{isDisabled ? <UserPen color="#ffffff" /> :<PencilOff color="#ffffff" />} Edit</button></div>
                            <div className={styles.datalabeldiv}>
                                <label>Name</label>
                                <input type="text" name="Name" className={`${styles.inputElement} ${!isDisabled ? styles.active : ""}`} value={data.Name} onChange={handleChange} disabled={isDisabled}></input>
                                <hr></hr>
                            </div>
                            <div className={styles.datalabeldiv}>
                                <label>Email</label>
                                <input className={styles.inputElement} value={data.Email} disabled></input>
                                <hr></hr>
                            </div>
                            <div className={styles.datalabeldiv}>
                                <label>Blood Group</label>
                                <input type="text" className={styles.inputElement} value={data.BloodGroup} disabled></input>
                                <hr></hr>
                            </div>
                            <div className={styles.datalabeldiv}>
                                <label>Phone Number</label>
                                <input type="tel" name="PhoneNumber" className={`${styles.inputElement} ${!isDisabled ? styles.active : ""}`} value={data.PhoneNumber} onChange={handleChange} disabled={isDisabled}></input>
                                <hr></hr>
                            </div>
                            <div className={styles.datalabeldiv} >
                                <label>Gender</label>
                                <input type="text"  className={styles.inputElement} value={data.Gender} disabled></input>
                                <hr></hr>
                            </div>
                            <div className={styles.datalabeldiv}>
                                <label>Age</label>
                                <input type="tel" name="Age" className={`${styles.inputElement} ${!isDisabled ? styles.active : ""}`} value={data.Age} onChange={handleChange} disabled={isDisabled}></input>
                                <hr></hr>
                            </div>
                            <div className={styles.datalabeldiv}>
                                <label>District</label>
                                <input type="text" className={styles.inputElement} value={data.District} ></input>
                                <hr></hr>
                            </div>
                            <div className={styles.datalabeldiv}>
                                <label>City</label>
                                <input type="text" className={styles.inputElement} value={data.City} ></input>
                                <hr></hr>
                            </div>
                            <div className={styles.datalabeldiv}>
                                <label>House No</label>
                                <input type="text" name="HouseNo" className={`${styles.inputElement} ${!isDisabled ? styles.active : ""}`} value={data.HouseNo} onChange={handleChange} disabled={isDisabled}></input>
                                <hr></hr>
                            </div>
                            <div className={styles.datalabeldiv}>
                                <label>Landmark</label>
                                <input type="text" name="Landmark" className={`${styles.inputElement} ${!isDisabled ? styles.active : ""}`} value={data.Landmark} onChange={handleChange} disabled={isDisabled}></input>
                            </div>
                            {error && <p style={{color:"red",marginLeft:"80px",fontSize:"20px"}}>Failed To Update Profile ,Please Try Again After 24Hours.</p>}
                            { !isDisabled && <div className={styles.submitDiv}>
                                <button className={styles.submitButton} onClick={handleSubmit}>{isLoading ? "Submitting.." : "Submit" }</button>
                            </div>
                            }
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
export default ProfileDashboard;