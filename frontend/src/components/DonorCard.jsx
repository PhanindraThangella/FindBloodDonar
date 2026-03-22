import styles from '../css/DonorCard.module.css';
import {useState,useMemo,useEffect} from 'react';
import { motion } from 'framer-motion';
import FullDetailCard from './FullDetailCard';
import axios from 'axios';
function DonorCard(props){
     const [users,setUsers] = useState([]); 
  //   { StudentName: "THANGELLA RAGHAVENDRA", Age: 19, BloodGroup: "O+", City: "Narsapuram", Gender: "Male" },
  //   { StudentName: "THANGELLA NARSIMHA", Age: 18, BloodGroup: "O+", City: "Narsapuram", Gender: "Male" },
  //   { StudentName: "THANGELLA NARAYANA", Age: 29, BloodGroup: "O+", City: "Narsapuram", Gender: "Male" },
  //   { StudentName: "THANGELLA RAGHAVENDRA", Age: 19, BloodGroup: "O+", City: "Narsapuram", Gender: "Female" },
  //   { StudentName: "THANGELLA RAGHAVENDRA", Age: 19, BloodGroup: "O+", City: "Narsapuram", Gender: "Male" },
  //   { StudentName: "THANGELLA RAGHAVENDRA", Age: 19, BloodGroup: "O+", City: "Narsapuram", Gender: "Male" },
  //   { StudentName: "THANGELLA RAGHAVENDRA", Age: 19, BloodGroup: "O+", City: "Narsapuram", Gender: "Male" },
  //   { StudentName: "THANGELLA RAGHAVENDRA", Age: 19, BloodGroup: "O+", City: "Narsapuram", Gender: "Male" },
  // ];
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState('');
// Simulate loading
useEffect(() => {
  const timeout = setTimeout(() => setLoading(false), 1000); // 1 sec
  return () => clearTimeout(timeout);
}, []);
  // console.log(props.selectedOption);
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
  if(error) return <p>{error}</p>
    return(
          loading ? (
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
      </div>
    ) : (
      <div className={styles.cardsContainer}>
        {sortedUsers.length > 0 ? (
          sortedUsers.map((user, index) => (
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
                View Details &gt;&gt;
              </button>

              {selectedUserIndex === index && (
                <FullDetailCard
                  user={user}
                  onClose={() => setSelectedUserIndex(null)}
                />
              )}
            </motion.div>
          ))
        ) : (
          <p>No Users Found!</p>
        )}
      </div>
    )
  );
}
export default DonorCard;