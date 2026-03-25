import DonorCard from './DonorCard';
import SideBar from './SideBar';
import logo from "../assets/BG.jpg";
import {useParams} from 'react-router-dom';
import {useState} from 'react';
import styles from "../css/DetailsDashboard.module.css";
function DetailsDashboard(){
    const [selectedOption,setSelectedOption]=useState("Only");
    const {group}=useParams();
    const detailsCss={
    width:"100%",
    height:"100%",
    display:"flex",
    flexDirection:"row",
    overflow:"hidden"
};
    return(
        <div className={styles.wrapper}>
      
            {/* NAVBAR */}
            <div className={styles.navbar}>
                <div className={styles.leftNav}>
                <div className={styles.logo}>
                    <img className={styles.logoImg} src={logo} alt="logo"></img>
                </div>
                <div className={styles.brand}>Blood Donars</div>
                </div>

                <div className={styles.searchBar}>
                <input type="text" placeholder="Search..." />
                <button className={styles.searchBtn}>Search</button>
                </div>

                <button className={styles.logoutBtn}>Logout</button>
            </div>

            {/* LAYOUT */}
            <div className={styles.container}>

                {/* SIDEBAR */}
                <div className={styles.sidebar}>
                <div className={styles.menu}>
                    <a href="#">Only Specified</a>
                    <a href="#">Substitute BloodGroup</a>
                    <a href="#">Contact All</a>
                    <a href="#">Sort By Age</a>
                    <a href="#">Only Male</a>
                    <a href="#">Only Female</a>
                </div>
                <div className={styles.profileMenu}>
                    <div className={styles.profileImage}></div>
                    <a href="#">Profile</a>
                </div>
                </div>

                {/* MAIN CONTENT */}
                <div className={styles.main}>
                <h2 className={styles.heading}>Dashboard Overview</h2>

                <div className={styles.cards}>
                    <div className={styles.card}>
                    <h4>Available Donors</h4>
                    <p>120 donors near your location</p>
                    </div>

                    <div className={styles.card}>
                    <h4>Requests Today</h4>
                    <p>35 active requests</p>
                    </div>

                    <div className={styles.card}>
                    <h4>Successful Matches</h4>
                    <p>80 lives saved</p>
                    </div>

                    <div className={styles.card}>
                    <h4>Emergency Alerts</h4>
                    <p>5 urgent requests</p>
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}
export default DetailsDashboard;