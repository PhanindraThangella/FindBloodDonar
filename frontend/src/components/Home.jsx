import styles from  "../css/Home.module.css";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
function Home()
{
    const [selectedGroup,setSelectedGroup]=useState('');
    const navigate=useNavigate();
    const handleChange = (e) =>
    {
        setSelectedGroup(e.target.value);
    }
    const handleClick = () =>{
       {selectedGroup!=="" ? navigate(`/Dashboard/${selectedGroup}`): alert("Please Select a Bloodgroup to Proceed.")}
    }
    return(
        <>
            <div className={styles.bodyMain}>
                <div>
                    <span className={styles.mainName}>BLOOD DONORS</span>
                    <div className={styles.alinksContainer}>
                        <a href="/Form" className={styles.alinks}>Register Donor</a>
                        <a href="/" className={styles.alinks}>About Us</a>
                        <a href="/Auth" className={styles.alinks}>Login</a>
                    </div>
                </div>
                {/* <span className={styles.slogan}>Needed Blood To Save A Life.</span> */}
                <button className={styles.buttonLogin}  onClick={()=>navigate('/Login')}>Login &#127778;</button>
                
                <div className={styles.searchBar}>
                    <select value={selectedGroup} className={styles.blood} required onChange={handleChange}>
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                    <button className={styles.buttonSearch} type="button" onClick={handleClick}>Search</button>
                </div>
                <h3 className={styles.homeh3}>Don't Wait!.Search For Required Group, If Its Found Then We Will Connect With Nearest People.</h3>
            </div>
        </>
    );
}
export default Home;