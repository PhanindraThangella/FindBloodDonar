import DonorCard from './DonorCard';
import SideBar from './SideBar';
import {useParams} from 'react-router-dom';
import {useState} from 'react';
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
        < div className={detailsCss}>
        <SideBar group={group} setSelectedOption={setSelectedOption}/>
        <DonorCard selectedOption={selectedOption} group={group}/>
        </div>
          
    )
}
export default DetailsDashboard;