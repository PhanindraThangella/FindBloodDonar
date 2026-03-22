import styles from'../css/SideBar.module.css';
import {useNavigate} from 'react-router-dom';
function SideBar(props){
    const navigate =useNavigate();
    return(
        <div className={styles.sideMenu}>
                <ol>
                    <li onClick={()=>props.setSelectedOption("")}>&gt; {`Only ${props.group}`}</li>
                    <li >&gt; Substitute Blood Groups</li>
                    <li onClick={()=>navigate('/ContactInfoForm')}>&gt; Contact All</li>
                    <li onClick={()=>props.setSelectedOption("SortByAge")}>&gt; Sort By Age</li>
                    <li onClick={()=>props.setSelectedOption("OnlyMale")}>&gt; Male Only</li>
                    <li onClick={()=>props.setSelectedOption("OnlyFemale")}>&gt; Female Only</li>
                </ol>
            </div>
    );
}
export default SideBar;