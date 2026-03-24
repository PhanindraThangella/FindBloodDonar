import styles from "../css/Home.module.css";
import logo from "../assets/BG.jpg";
import heroSectonImage from "../assets/heroImage.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket,faUserPlus,faArrowRightLong,fa1 } from '@fortawesome/free-solid-svg-icons';
function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logoDiv}>
            <img className={styles.logoImg} src={logo} alt="logo"></img>
            <h2 className={styles.logo}>Blood Donars</h2>
        </div>
        <div className={styles.navLinks}>
          <a href="#">Register Yourself</a>
          <a href="#">About Us</a>
          <a href="#">
            <FontAwesomeIcon icon={faArrowRightToBracket} style={{color: "#c92f3b",marginRight:4}} />
            Login
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faUserPlus} style={{color: "#c92f3b",marginRight:4}} />
            Sign Up
          </a>
          {/* <button className={styles.emergencyBtn}>Emergency</button> */}
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

                <button className={styles.ctaBtn}>
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
                <h3><FontAwesomeIcon icon={fa1} style={{color: "#c92f3b",}} />Create Account</h3>
                <p>Register with us, so that you can connect with our large pool of donors.</p>
            </div>
            <div>
                <h3>Search</h3>
                <p>Enter the required blood group and search we will find the near by donors.</p>
            </div>

            <div>
                <h3>Connect</h3>
                <p>View nearby donors and contact instantly through whatsapp or email.</p>
            </div>

            <div>
                <h3>Save Life</h3>
                <p>Get help quickly and save precious lives. Right help at right time makes you GOD.</p>
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
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
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Be a Hero Today ❤️</h2>
        <p>Your one donation can save multiple lives.</p>
        <button>Register as Donor</button>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2026 BloodConnect | Saving Lives Together ❤️</p>
      </footer>
    </div>
  );
}

export default Home;