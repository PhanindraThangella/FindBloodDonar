import logo from "../assets/BG.jpg";
import axios from 'axios';
import {useState,useMemo,useEffect} from 'react';
import { motion } from 'framer-motion';
import styles from "../css/DetailsDashboard.module.css";
import FullDetailCard from './FullDetailCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightFromBracket,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function DetailsDashboard(){
    const API_URL=import.meta.env.VITE_API_URL;
    const [selectedOption,setSelectedOption]=useState("");
    const [selectedUserIndex,setSelectedUserIndex]=useState(null);
    const [usersNotFound,setUsersNotFound]=useState(false);
    const [sort,setSort]=useState("");
    const [users,setUsers]=useState([]);
    const {setUser}=useAuth();
    const navigate=useNavigate();
    const bloodCompatibility = {
    "A+": ["A+", "A-", "O+", "O-"],
    "A-": ["A-", "O-"],
    "B+": ["B+", "B-", "O+", "O-"],
    "B-": ["B-", "O-"],
    "AB+": ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    "AB-": ["AB-", "A-", "B-", "O-"],
    "O+": ["O+", "O-"],
    "O-": ["O-"]
    };
    const getSubstituteGroupDetails=()=>{
        if(selectedOption === "search"|| selectedOption === ""){
            alert("Please select the blood group in dropdown!.");
        }
        else{
            const compatibleDonors = bloodCompatibility[selectedOption];
            axios.get(`${API_URL}/api/users`, {
                params: {
                    group: compatibleDonors.join(",")
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            })
            .then((response) => {
                setUsers(response.data);
                if(response.data.length==0){
                    setUsersNotFound(true);
                }
                localStorage.setItem("selectedOption", selectedOption);
                localStorage.setItem("data", JSON.stringify(response.data));
            })
            .catch((err) => {
                setUsersNotFound(true);
            });
        }
        
    }
    useEffect(() => {
        const savedOption = localStorage.getItem("selectedOption");
        const savedData = localStorage.getItem("data");

        if (savedOption) {
        setSelectedOption(savedOption);
        }

        if (savedData) {
        setUsers(JSON.parse(savedData));
        }
    }, []);
    const fetchUsersData=()=>{
        axios.get(`${API_URL}/api/users`, {
            params:{
                group:selectedOption
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
        .then((response) => {
            setUsers(response.data);
            if(response.data.length==0){
                setUsersNotFound(true);
            }
            localStorage.setItem("selectedOption", selectedOption);
            localStorage.setItem("data", JSON.stringify(response.data));
        })
        .catch((err) => {
            setUsersNotFound(true);
        });
    }
    const sortedUsers = useMemo(() => {
        if(!users || users === 0) return [];
        if (sort === 'SortByAge') {
            const sortdata=[...users].sort((a, b) => a.Age - b.Age)
            if(sortdata.length==0)
                setUsersNotFound(true);
          return sortdata;
        } else if (sort === 'OnlyMale') {
          const sortdata=[...users].filter(user=>user.Gender==="Male");
          if(sortdata.length==0)
                setUsersNotFound(true);
          return sortdata;
        }
         else if (sort === 'OnlyFemale') {
          const sortdata=[...users].filter(user=>user.Gender==="Female");
          if(sortdata.length==0)
                setUsersNotFound(true);
          return sortdata;
        }
        return users;
      }, [sort,users]);
    const handleLogout=()=>{
        setUser(null);
        localStorage.clear();
        navigate("/");
    }
    const UserString=localStorage.getItem("user");
    const user=JSON.parse(UserString);
    const formattedName = user?.name.split(' ').join('+');
    const size=50;
    const avatarUrl = `https://ui-avatars.com/api/?name=${formattedName}&background=random&color=fff&size=${size}&bold=true`;

    return(
        <div className={styles.wrapper}>
      
            {/* NAVBAR */}
            <div className={styles.navbar}>
                <div className={styles.leftNav} onClick={()=>{navigate("/dashboard")}}>
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
                    <button className={styles.logoutBtn} onClick={handleLogout}>Logout
                        <span><FontAwesomeIcon icon={faArrowRightFromBracket} className={styles.logoutIcon} /></span>
                    </button>
                    <div className={styles.profileMenu}>
                        <div className={styles.profileImage}><img src={avatarUrl} alt="profile image" /></div>
                        <a onClick={()=>{navigate("/Profile")}}>Profile</a>
                    </div>
                </div>
            </div>

            {/* LAYOUT */}
            <div className={styles.container}>

                {/* SIDEBAR */}
                <div className={styles.sidebar}>
                    <div className={styles.menu}>
                        <a href="#" onClick={()=>{navigate("/Profile")}}>Your Requests</a>
                        <a href="#" onClick={getSubstituteGroupDetails}>Substitute BloodGroup</a>
                        <a href="#" onClick={()=>{alert("Coming Soon!.")}}>Contact All</a>
                        <a href="#" onClick={()=>{setSort("SortByAge")}}>Sort By Age</a>
                        <a href="#" onClick={()=>{setSort("OnlyMale")}}>Only Male</a>
                        <a href="#" onClick={()=>{setSort("OnlyFemale")}}>Only Female</a>
                    </div>
                </div>
                {/* Sort By for Mobile View */}
                <div className={styles.sortdiv}>
                        <div className={styles.sortsubdiv}>
                            <select defaultValue="sortby" onChange={(e)=>{setSort(e.target.value)}} value={sort}>
                                <option value="sortby">Sort By</option>
                                <option value="SortByAge">Age</option>
                                <option value="OnlyMale">Only Male</option>
                                <option value="OnlyFemale">Only Female</option>
                            </select>
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
                    {sortedUsers.length > 0 && (
                        <div className={styles.cardsContainer}>
                            <div className={styles.userscards}>
                                {sortedUsers.map((user, index) => (
                                <motion.div
                                    className={styles.userscard}
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <table className={styles.userdetailstable}>
                                        <thead>
                                            <tr>
                                                <th colSpan={2}><h3>{user.Name}</h3></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           
                                            <tr>
                                                <td><p><strong>Age:</strong></p></td>
                                                <td><p> {user.Age}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p><strong>Blood Group:</strong></p></td>
                                                <td><p> {user.BloodGroup}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p><strong>City:</strong></p></td>
                                                <td><p> {user.City}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p><strong>Gender:</strong></p></td>
                                                <td><p> {user.Gender}</p></td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2} rowSpan={3}>
                                                    <div className={styles.userdetailsbtndiv}>
                                                        <button
                                                            className={styles.usersdetailsbtn}
                                                            onClick={() => {setSelectedUserIndex(index)}}
                                                            >
                                                            View Details
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {selectedUserIndex === index && (
                                    <FullDetailCard
                                        user={user}
                                        onClose={() => setSelectedUserIndex(null)}
                                    />
                                    )}
                                </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                    {sortedUsers.length==0 && selectedOption.length>0 && usersNotFound &&(
                        <div className={styles.nouserdiv}>
                            <h1> No Users Found,Sorry for the inconvenience.</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default DetailsDashboard;