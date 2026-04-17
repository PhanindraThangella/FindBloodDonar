
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
                    <li onClick={()=>{navigate("/dashboard")}}><ArrowLeft size={16} color="#ffffff" strokeWidth={2.5} /><a>Back To Home</a></li>
                    <li onClick={handleDashboard}><LayoutDashboard size={16} color="#ffffff" strokeWidth={2.5} /> <a>DashBoard</a></li>
                    <li onClick={handleContributions}><HandHelping size={16} color="#ffffff" strokeWidth={2.5} /><a>Contributions</a></li>
                    <li onClick={handleRequests}><MessageSquareMore size={16} color="#ffffff" strokeWidth={2.5} /> <a>Recent Requests</a></li>
                    <li onClick={handleSettings}><Settings size={16} color="#ffffff" strokeWidth={2.5} /><a> Settings</a></li>
                </ul>
                <ul className={styles.logoutbutton}>
                    <li className={styles.logoutli} onClick={handleLogout}><Power size={16} color="#ffffff" strokeWidth={2.5} /><a>Logout</a></li>
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