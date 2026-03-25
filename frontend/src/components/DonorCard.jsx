import styles from '../css/DonorCard.module.css';
import {useState,useMemo,useEffect} from 'react';
import { motion } from 'framer-motion';
import FullDetailCard from './FullDetailCard';
import axios from 'axios';
function DonorCard(props){
  const [users,setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState('');
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000); // 1 sec
    return () => clearTimeout(timeout);
  }, []);
  const [selectedUserIndex, setSelectedUserIndex] = useState(null);
  const sortedUsers = useMemo(() => {
    if(!users || users === 0) return [];
    if (props.selectedOption === 'SortByAge') {
      return [...users].sort((a, b) => a.Age - b.Age);
    } else if (props.selectedOption === 'OnlyMale') {
      return [...users].filter(user=>user.Gender==="Male");
    }
     else if (props.selectedOption === 'OnlyFemale') {
      return [...users].filter(user=>user.Gender==="Female");
    }
    return users;
  }, [props.selectedOption,users]);
  useEffect(()=>{
    console.log(props.group);
    axios.get("http://localhost:5000/api/users", {
      params:{
        group:props.group
      },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
  })
  .then((response) => {
    setUsers(response.data);
    setLoading(false);
  })
  .catch((err) => {
    setError("Failed to fetch data!");
    setLoading(false);
  });
  },[]);
  return (
    <div>
      
    </div>
  );
}
export default DonorCard;