import styles from '../css/RequestsBoard.module.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
function RequestsBoard(){
    const API_URL=import.meta.env.VITE_API_URL;
    const [requests,setRequests]=useState([]);
    useEffect(()=>{
        fetchNotifications()
    },[]);
    const fetchNotifications=async()=>{
        axios.get(`${API_URL}/api/user/getNotifications`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
        .then((response) => {
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
                            <table>
                                <tbody>
                                    <tr>
                                        <th><p><strong>Name:</strong></p></th>
                                        <th><p><strong>Hospital Name:</strong> </p></th>
                                        <th><p><strong>Contact Number:</strong> </p></th> 
                                        <th><p><strong>Address:</strong> </p></th>    
                                        <th rowSpan={2} colSpan={2}><button className={styles.acceptbutton} type='button'>Accept</button><button className={styles.rejectbutton} type='button'>Reject</button></th>                           
                                    </tr>
                                    <tr>
                                        <td><p>{request.Name}</p></td>
                                        <td><p>{request.HospitalName}</p></td>
                                        <td><p>{request.ContactNumber}</p></td>
                                        <td><p>{request.Address}</p></td>
                                    </tr>
                                </tbody>
                            </table>
                        </motion.div>
                    ))}    
                </div>
            </div>
        )}
        
        </>
    );
}

export default RequestsBoard;