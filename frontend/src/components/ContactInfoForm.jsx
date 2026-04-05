import styles from '../css/ContactInfoForm.module.css';
import {useNavigate,useLocation} from 'react-router-dom';
import {useState} from 'react';
function ContactInfoForm(){
    const navigate=useNavigate();
    const location = useLocation();
    const sendState = location.state?.sendState;
    const receiverEmail=location.state?.email;
    const [formData,setFormData]=useState({name:"",hospitalname:"",contactnumber:"",address:"",receiveremail:receiverEmail});
    const handleChange = (e) => {
    setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
        }));
    };
    const sendMessage=async(e)=>
    {
        e.preventDefault();
        if(sendState==='mail')
        {
            console.log("send mail");
            try {
            const res = await fetch("http://localhost:5000/api/send-email-to-donor", {
                method: "POST",
                
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json" 
            },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (!res.ok) {
                // setError(true);
                // setLoading(false);
                return;
            } 
        }
        catch (error) {
            // setError(true);
        } finally {
        // setLoading(false);
        }
    }
    };
return(
    <>
        <div className={styles.overlay}></div>
        <div className={styles.emailInfo}>
            <span className={styles.closebtn} onClick={()=>{navigate(-1)}}>X</span>
            <h2>Fill Details To Contact</h2>
            <form onSubmit={sendMessage}>
                <label htmlFor="name">Name:</label><input type="text" id="name"  name="name" placeholder="Patient or GurdianName" value={formData.name} onChange={handleChange} required/><br/>
                <label htmlFor="hospitalname">Hospital Name:</label><input type="text" id="hospitalname" name="hospitalname" placeholder="Ex:Apollo Hospital." value={formData.hospitalname} onChange={handleChange} required/><br/>
                <label htmlFor="contactnumber">Contact No:</label><input type="number" size="10" id="contactnumber"  name="contactnumber"value={formData.contactnumber} onChange={handleChange} required/><br/>
                <label htmlFor="address">Address:</label><textarea rows="4" cols="10" name="address"  placeholder="Please Specify Clear Address" id="address" value={formData.address} onChange={handleChange} required></textarea><br/>
                <input type="hidden" id="receiveremail" name="receiveremail" value={formData.receiveremail} onChange={handleChange} required/>
                <button type="submit">Submit</button>
            </form>
        </div>       
    </>
);
}
export default ContactInfoForm;