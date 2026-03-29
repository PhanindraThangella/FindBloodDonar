import logo from "../assets/BG.jpg";
import axios from 'axios';
import {useState} from 'react';
import { motion } from 'framer-motion';
import styles from "../css/DetailsDashboard.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightFromBracket,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
function DetailsDashboard(){
    const [selectedOption,setSelectedOption]=useState("");
    const [selectedUserIndex,setSelectedUserIndex]=useState(null);
    const [users,setUsers]=useState([]);
    const [error,setError] = useState('');
    const fetchUsersData=()=>{
        axios.get("http://localhost:5000/api/users", {
            params:{
                group:selectedOption
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
        .then((response) => {
            setUsers(response.data);
        })
        .catch((err) => {
            setError("Failed to fetch data!");
        });
        console.log(users);
    }

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
                <select defaultValue="search" onChange={(e)=>{setSelectedOption(e.target.value)}} value={selectedOption}>
                    <option value="search">Search..</option>
                    <option value="A+">A+(Positive)</option>
                    <option value="A-">A-(Negative)</option>
                    <option value="B+">B+(Positive)</option>
                    <option value="B-">B-(Negative)</option>
                    <option value="AB+">AB+(Positive)</option>
                    <option value="AB-">AB-(Negative)</option>
                    <option value="O+">O+(Positive)</option>
                    <option value="O-">O-(Negative)</option>
                </select>
                <button className={styles.searchBtn} onClick={fetchUsersData}>Search
                    <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' style={{color: "rgb(255, 255, 255)",marginLeft:5}} />
                </button>
                </div>

                <div className={styles.rightNav}>
                    <button className={styles.logoutBtn}>Logout
                        <span><FontAwesomeIcon icon={faArrowRightFromBracket} className={styles.logoutIcon} /></span>
                    </button>
                    <div className={styles.profileMenu}>
                        <div className={styles.profileImage}></div>
                        <a href="#">Profile</a>
                    </div>
                </div>
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
                </div>

                {/* MAIN CONTENT */}
                <div className={styles.main}>
                    {!selectedOption &&
                    <div>
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
                    }
                    {users.length > 0 && (
                    <div className={styles.cards}>
                        {users.map((user, index) => (
                        <motion.div
                            className={styles.card}
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <h2>{user.StudentName}</h2>
                            <p><strong>Age:</strong> {user.Age}</p>
                            <p><strong>Blood Group:</strong> {user.BloodGroup}</p>
                            <p><strong>City:</strong> {user.City}</p>
                            <p><strong>Gender:</strong> {user.Gender}</p>

                            <button
                            className={styles.detailsbtn}
                            onClick={() => setSelectedUserIndex(index)}
                            >
                            View Details
                            </button>

                            {selectedUserIndex === index && (
                            <FullDetailCard
                                user={user}
                                onClose={() => setSelectedUserIndex(null)}
                            />
                            )}
                        </motion.div>
                        ))}
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default DetailsDashboard;