import styles from "../css/Home.module.css";
import logo from "../assets/BG.jpg";
import { Link, useNavigate } from "react-router-dom";
import heroSectonImage from "../assets/heroImage.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket,faUserPlus,faArrowRightLong,faEnvelope,faPhone,faLocationDot,faUserShield,faListCheck,faComments } from '@fortawesome/free-solid-svg-icons';
import { faInstagram,faLinkedin,faSquareFacebook,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";
function Home() {
  const navigate=useNavigate();
  const [email,setEmail]=useState("");
  const [btnText,setBtnText]=useState("Subscribe");
  const subscribeNewsLetter=async()=>{
    if(email===""){
      alert("Please Mention valid Email");
    }
    else
    {
      try 
      {
        const res = await fetch("http://localhost:5000/api/subscribe/newsletter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify({receiverEmail:email})
        });
        if (res.ok) {
          setBtnText("Subscribed");
        }
        else{
          setBtnText("Failed");
        }
      } catch (error) 
      {
        alert("Failed to subscribe try again later!.");
      }
    }
  }
  return (
    <div>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logoDiv}>
            <img className={styles.logoImg} src={logo} alt="logo"></img>
            <h2 className={styles.logo} onClick={()=>{navigate("/")}}>Blood Donars</h2>
        </div>
        <div className={styles.navLinks}>
          <a onClick={()=>{navigate('/Form')}}>Register Yourself</a>
          <a href="#aboutus">About Us</a>
          <Link to="/Auth/login">
            <FontAwesomeIcon icon={faArrowRightToBracket} style={{color: "#c92f3b",marginRight:4}} />
            Login
          </Link>
          <Link to="/Auth/signup">
            <FontAwesomeIcon icon={faUserPlus} style={{color: "#c92f3b",marginRight:4}} />
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.ddhero}>
            <div className={styles.heroContent}>
                <p className={styles.subHeading}>
                FIND DONORS AROUND YOU
                </p>

                <h1 className={styles.heroTitle}>
                Save Lives <br />
                Faster with Instant <br />
                Blood Donor Access
                </h1>

                <p className={styles.heroDesc}>
                Find nearby blood donors in seconds. Real-time availability.
                Location-based matching.
                </p>

                <button className={styles.ctaBtn} onClick={() => navigate("/dashboard")}>
                Find Donors
                <FontAwesomeIcon icon={faArrowRightLong} style={{color: "rgb(255, 255, 255)",marginLeft:6}} />
                </button>

            </div>
            {/* RIGHT SIDE IMAGE */}
            <div className={styles.heroImage}>
                <img src={heroSectonImage} alt="Blood Donation" />
            </div>
        </div>
        <div className={styles.heroStats}>
            <div>
                <h3>10K+</h3>
                <p>Registered Donors</p>
            </div>
            <div>
                <h3>500+</h3>
                <p>Lives Saved</p>
            </div>
            <div>
                <h3>24/7</h3>
                <p>Availability</p>
            </div>
        </div>
      </section>
      <section>
        
      </section>

      {/* Features */}
      <section className={styles.features}>
        <h2 style={{color:"#c92f3b"}}>Why Choose Blood Donars?</h2>

        <div className={styles.featureGrid}>
          <div className={styles.card+" "+styles.card1}>
            <h3>Instant Matching</h3>
            <p>Find available donors instantly during emergencies.</p>
          </div>

          <div className={styles.card+ " "+styles.card2}>
            <h3>Smart Location</h3>
            <p>Connect with donors closest to your location.</p>
          </div>

          <div className={styles.card+ " "+styles.card3}>
            <h3>Emergency Alerts</h3>
            <p>Send urgent requests and notify nearby donors.</p>
          </div>

          <div className={styles.card+ " "+styles.card4}>
            <h3>Verified Donors</h3>
            <p>All donors are verified for safety and trust.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howItWorks}>
        <h2 style={{color:"#c92f3b"}}>How It Works</h2>

        <div className={styles.steps}>
            <div>
                <h3><span class="material-symbols-outlined" style={{color:"#c92f3b"}}>counter_1</span> <span style={{position:"relative",top:-4}}>Create Account</span></h3>
                <p>Register with us, so that you can connect with our large pool of donors.</p>
            </div>
            <div>
                <h3><span class="material-symbols-outlined" style={{color:"#c92f3b"}}>counter_2</span> <span style={{position:"relative",top:-4}}>Search</span></h3>
                <p>Enter the required blood group and search we will find the near by donors.</p>
            </div>

            <div>
                <h3><span class="material-symbols-outlined" style={{color:"#c92f3b"}}>counter_3</span> <span style={{position:"relative",top:-4}}>Connect</span></h3>
                <p>View nearby donors and contact instantly through whatsapp or email.</p>
            </div>

            <div>
                <h3><span class="material-symbols-outlined" style={{color:"#c92f3b"}}>counter_4</span> <span style={{position:"relative",top:-4}}>Save life</span></h3>
                <p>Get help quickly and save precious lives. Right help at right time makes you GOD.</p>
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="aboutus" className={styles.testimonials}>
        <h2>What People Say</h2>

        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <p>
              "I found a donor within minutes during an emergency. This platform saved my brother's life."
            </p>
            <h4>- Rahul</h4>
          </div>

          <div className={styles.testimonialCard}>
            <p>
              "Amazing initiative. Easy to use and very helpful."
            </p>
            <h4>- Priya</h4>
          </div>

          <div className={styles.testimonialCard}>
            <p>
              "I found a donor with a rare blood group within minutes during an emergency. A must try platform in emergency."
            </p>
            <h4>- Raju</h4>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaRegisterDonor}>
          <h2>Be a Hero Today ❤️</h2>
          <p>Your one donation can save multiple lives.</p>
          <button onClick={()=>{navigate("/Form")}}>Register as Donor</button>
        </div>
        <div className={styles.subscribeNewsLetter}>
          <h2>Want to know our Stories,<br></br>Subscribe Now!.<br></br><span>Get weekly newsletter of our acheivements.</span></h2>
          <input type="email" placeholder="Example@gmail.com" value={email} onChange={(e)=>{setEmail(e.target.value)}} required></input>
          <button onClick={subscribeNewsLetter}>{btnText}</button>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>

          {/* Brand */}
          <div className={styles.footerSection}>
            <h2 className={styles.logo}>Blood Donars</h2>
            <p>
              Connecting donors<br></br> And <br></br>saving lives through <br></br>"<span style={{color:"#c92f3b",display:"inline"}}> Technology </span>"
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h3>Social Media</h3>
            <span><FontAwesomeIcon icon={faInstagram} style={{color: "rgb(255, 16, 90)",}} /><a href="#">Instagram</a></span>
            <span><FontAwesomeIcon icon={faLinkedin} style={{color: "rgb(30, 14, 254)",}} /><a href="#">Linked In</a></span>
            <span><FontAwesomeIcon icon={faSquareFacebook} style={{color: "rgb(30, 14, 254)",}} /><a href="#">Facebook</a></span>
            <span><FontAwesomeIcon icon={faYoutube} style={{color: "rgb(254, 14, 14)",}} /><a href="#">Youtube</a></span>
          </div>

          {/* Contact */}
          <div className={styles.footerSection}>
            <h3>Contact</h3>
            <p><FontAwesomeIcon icon={faEnvelope} style={{color: "rgb(173, 5, 7)",}} />    Email: support@bloodconnect.com</p>
            <p><FontAwesomeIcon icon={faPhone} style={{color: "rgb(48, 98, 234)",}} />    Phone: +91 98765 43210</p>
            <p><FontAwesomeIcon icon={faLocationDot} style={{color: "rgb(254, 14, 14)",}} />  Location: India</p>
          </div>

          {/* Legal */}
          <div className={styles.footerSection}>
            <h3>Legal</h3>
            <span><FontAwesomeIcon icon={faUserShield} style={{color: "rgb(133, 211, 255)",}} /><a href="#">Privacy Policy</a></span>
            <span><FontAwesomeIcon icon={faListCheck} style={{color: "rgb(7, 234, 15)",}} /><a href="#">Terms & Conditions</a></span>
            <span><FontAwesomeIcon icon={faComments} style={{color: "rgb(254, 14, 14)",}} /><a href="#">FAQ</a></span>
          </div>

        </div>

        {/* Bottom */}
        <div className={styles.footerBottom}>
          <p>© 2026 Blood Donars | All Rights Reserved ❤️</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;