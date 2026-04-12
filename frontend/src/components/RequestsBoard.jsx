import styles from '../css/RequestsBoard.module.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
function RequestsBoard(){
    const [requests,setRequests]=useState([]);
    useEffect(()=>{
        fetchNotifications()
    },[]);
    const fetchNotifications=async()=>{
        axios.get("http://localhost:5000/api/user/getNotifications", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
        .then((response) => {
            console.log(response.data);
            setRequests(response.data);
        })
        .catch((err) => {
            alert("unable to fetch notifications!.");
        });
    };
    return(
        <>
        {requests.length===0 &&
        (
            <div className={styles.mainDiv}>
                <div className={styles.noReqdiv}>
                    <h1 className={styles.noReqh}>No Recent Requests</h1>
                    <p className={styles.noReqp}>We Will Intimate You If Any.</p>
                </div>
            </div>
        )}
        {requests.length>0 && (
            <div className={styles.mainDiv}>
                <div className={styles.requestCards}>
                    {requests.map((request, index) => (
                        <motion.div
                            className={styles.requestcard}
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <p><strong>Name:</strong> {request.Name}</p>
                            <p><strong>Hospital Name:</strong> {request.HospitalName}</p>
                            <p><strong>Contact Number:</strong> {request.ContactNumber}</p>
                            <p><strong>Address:</strong> {request.Address}</p>
                        </motion.div>
                    ))}    
                </div>
            </div>
        )}
        
        </>
    );
}

export default RequestsBoard;