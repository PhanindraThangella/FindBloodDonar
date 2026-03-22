import {useState,useEffect} from 'react';
import styles from '../css/ProfileDashboard.module.css';
import { UserPen,PencilOff } from 'lucide-react';
function ProfileDashboard()
{
    const [isDisabled,setIsDisabled]=useState(true);
    const [data,setData]=useState({});
    const token=localStorage.getItem("token");
    const [error,setError]=useState(false);
    const [isLoading,setLoading]=useState(false);
    useEffect(()=>{
        fetchData();
    },[]);
    async function fetchData(){
        try{
            console.log("effect");
            const res=await fetch("http://localhost:5000/api/User",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`,
                },
            });
            const x=await res.json();
            setData(x);
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
        const res = await fetch("http://localhost:5000/api/UpdateProfile", {
            method: "POST",
            headers: { "Content-Type": "application/json",
                "Authorization":`Bearer ${token}`,
             },
            body: JSON.stringify(data)
        });
        console.log(res.status);
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
    return(
        <>
        <div className={styles.mainContainer}>
            <div className={styles.topNotch}>
                <div className={styles.imageDiv}></div>
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
        </div>
        </>
    )
}
export default ProfileDashboard;