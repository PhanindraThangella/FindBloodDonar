
import styles from "../css/ProfilePage.module.css";
import {Power,LayoutDashboard,Settings,HandHelping,MessageSquareMore,ArrowLeft} from 'lucide-react';
import ProfileDashboard from "./ProfileDashboard";
import ContributionsBoard from "./ContributionsBoard";
import RequestsBoard from "./RequestsBoard";
import SettingsBoard from "./SettingsBoard";
import {useNavigate} from 'react-router-dom';
import {useAuth} from "../context/AuthContext";
import {useState} from 'react';
function ProfilePage(){
    const navigate=useNavigate();
    const {user,setUser}=useAuth();
    console.log(user);
    const [IsDashboard,setDashboard]=useState(true);
    const [IsContributions,setContributions]=useState(false);
    const [IsRequests,setRequests]=useState(false);
    const [IsSettings,setSettings]=useState(false);
    const handleDashboard=(e)=>{
        e.preventDefault();
        setDashboard(true);
        setContributions(false);
        setRequests(false);
        setSettings(false);
    }
    const handleContributions=(e)=>{
        e.preventDefault();
        setDashboard(false);
        setContributions(true);
        setRequests(false);
        setSettings(false);
    }
    const handleRequests=(e)=>{
        e.preventDefault();
        setDashboard(false);
        setContributions(false);
        setRequests(true);
        setSettings(false);
    }
    const handleSettings=(e)=>{
        e.preventDefault();
        setDashboard(false);
        setContributions(false);
        setRequests(false);
        setSettings(true);
    }

    const handleLogout =(e)=>{
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        navigate('/');
    }
    return(
        <div className={styles.profileContainer}>
            <div className={styles.sidenavbar}>
                {/* <p className={styles.username}>{user.name}</p> */}
                <ul className={styles.listContainer}>
                    <li><ArrowLeft size={16} color="#ffffff" strokeWidth={2.5} /><a onClick={()=>{navigate("/dashboard")}} >Back To Home</a></li>
                    <li><LayoutDashboard size={16} color="#ffffff" strokeWidth={2.5} /><a onClick={handleDashboard} >DashBoard</a></li>
                    <li><HandHelping size={16} color="#ffffff" strokeWidth={2.5} /> <a onClick={handleContributions}>Contributions</a></li>
                    <li><MessageSquareMore size={16} color="#ffffff" strokeWidth={2.5} /> <a onClick={handleRequests}>Recent Requests</a></li>
                    <li><Settings size={16} color="#ffffff" strokeWidth={2.5} /><a onClick={handleSettings}> Settings</a></li>
                </ul>
                <ul className={styles.logoutbutton}>
                <li className={styles.logoutli} ><Power size={16} color="#ffffff" strokeWidth={2.5} /><a onClick={handleLogout}>Logout</a></li>
                </ul>
            </div>
            <div className={styles.mainContent}>
            {IsDashboard && <ProfileDashboard/>}
            {IsContributions && <ContributionsBoard/>}
            {IsRequests && <RequestsBoard/>}
            {IsSettings && <SettingsBoard/>}
            </div>
        </div>
    )
}
export default ProfilePage;