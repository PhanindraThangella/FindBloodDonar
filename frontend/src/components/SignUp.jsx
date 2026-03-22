import {useState} from'react';
import {useNavigate} from 'react-router-dom';
import styles from '../css/SignUp.module.css';
function SignUp({handleLoginClick}){
    const navigate=useNavigate();
    const [formData,setFormData]=useState({name:"",email:"",newPassword:"",conformPassword:""});
    const [touched,setTouched]=useState(false);
    const [loading,setLoading]=useState(false);
    const passwordMatched =formData.newPassword === formData.conformPassword;
    const handleChange = (e) => {
    setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
        }));
    };
    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
        const res = await fetch("http://localhost:5000/api/add-user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        if (!res.ok) {
            alert("Registration Failure!.");
            setLoading(false);
            return;
        }
        if(res.ok)
        {
            handleLoginClick();
        }
        
        } catch (error) {
            alert(res.message);
        } finally {
        setLoading(false);
        }
    };
    return(
     <div className={styles.signupdiv}>
                <h2>Donor Signup</h2>
                <form onSubmit={handleSignUp}>
                    <label htmlFor="Name">Name:</label>
                    <input type="text"  id="Name" name="name" placeholder='Enter Your Full Name' onChange={handleChange} value={formData.name} required></input>
                    <label htmlFor="Email">Email:</label>
                    <input type="email"  id="Email" name="email" placeholder='Enter Your Email' onChange={handleChange} value={formData.email} required></input>
                    <label htmlFor="newPassword">New Password:</label>
                    <input type="password"  id="newPassword" name="newPassword" placeholder='Enter Your Password' value={formData.newPassword} onChange={handleChange} required></input>
                    <label htmlFor="conformPassword">Conform Password:</label>
                    <input type="password"  id="conformPassword" name="conformPassword" placeholder='ReEnter Your Password' value={formData.conformPassword} onChange={handleChange} onBlur={()=>setTouched(true)} required></input>
                    {touched && formData.conformPassword && (<p style={{margin:0,color:passwordMatched ? 'green':'red'}}>{passwordMatched ? 'Matched' :'Not Matched'}</p>)}
                    <button disabled={!passwordMatched} type="submit">{loading?"Signing Up...":"Sign Up"}</button>
                </form>
    </div>
);
}

export default SignUp;