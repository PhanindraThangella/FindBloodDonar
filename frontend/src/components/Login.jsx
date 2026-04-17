import {useState} from "react";
import styles from '../css/Login.module.css';
import {useLocation, useNavigate} from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

function Login(){
    const API_URL=import.meta.env.VITE_API_URL;
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error,setError]=useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { setUser } = useAuth();
    const from = location.state?.from?.pathname || "/";
    const handleChange = (e) => {
    setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
        }));
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
        const res = await fetch(`${API_URL}/api/Login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const data = await res.json();

        if (!res.ok) {
            setError(true);
            setLoading(false);
            return;
        } 
        localStorage.setItem("token", data.token);
        localStorage.setItem("user",data.token);
        setUser(data.user);
        navigate(from, { replace: true });
        } catch (error) {
            console.log(error);
            setError(true);
        } finally {
        setLoading(false);
        }
    };
    return(
        <div className={styles.logindiv}>   
                    <h2>Donor Login</h2>
                    <form onSubmit={handleLogin} >
                        <label htmlFor="Email">Email:</label>
                        <input type="email" id="Email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required></input>
                        <label htmlFor="Password">Password:</label>
                        <input type="password" id="Password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required></input>
                        {error && <p style={{margin:0,textDecoration:'none',color:'red'}}>Invalid Email Or Password!</p>}
                        <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
                    </form>
                    <p onClick={()=>{navigate('/ResetPassword')}}>Forgot Password</p>
        </div>
    );

};
export default Login;
