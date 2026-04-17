import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from '../css/FullDetailsForm.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck,faCircleXmark } from '@fortawesome/free-regular-svg-icons';
function FullDetailsForm(){

    const data = {
  "Alluri Sitharama Raju": [
    "Addateegala","Ananthagiri","Araku Valley","Chinthapalli","Chinturu","Devipatnam",
    "Dumbriguda","G. Madugula","Gangavaram","Gudem Kotha Veedhi","Hukumpeta","Koyyuru",
    "Kunavaram","Maredumilli","Munchingi Puttu","Paderu","Peda Bayalu","Rajavommangi",
    "Rampachodavaram","Vararamachandrapuram","Y. Ramavaram","Yetapaka"
  ],
  "Anakapalli": [
    "Anakapalli","Atchuthapuram","Butchayyapeta","Cheedikada","Chodavaram","Devarapalli",
    "Golugonda","K. Kotapadu","Kasimkota","Kotauratla","Madugula","Makavarapalem",
    "Munagapaka","Nakkapalli","Narsipatnam","Nathavaram","Paravada","Payakaraopeta",
    "Rambilli","Ravikamatham","Rolugunta","S. Rayavaram","Sabbavaram","Yelamanchili"
  ],
  "Ananthapuramu": [
    "Anantapur Rural","Anantapur Urban","Atmakur","Beluguppa","Bommanahal","Brahmasamudram",
    "Bukkaraya Samudram","D. Hirehal","Garladinne","Gooty","Gummagatta","Guntakal",
    "Kalyanadurg","Kambadur","Kanekal","Kudair","Kundurpi","Narpala","Pamidi","Peddapappur",
    "Peddavaduguru","Putlur","Rapthadu","Rayadurg","Settur","Singanamala","Tadipatri",
    "Uravakonda","Vajrakarur","Vidapanakal","Yadiki","Yellanur"
  ],
  "Annamayya": [
    "Beerongi Kothakota","Chinnamandem","Chitvel","Galiveedu","Gurramkonda","Kalakada",
    "Kalikiri","Kambhamvaripalle","Kodur","Kurabalakota","Lakkireddipalli","Madanapalle",
    "Mulakalacheruvu","Nandalur","Nimmanapalle","Obulavaripalle","Pedda Thippasamudram",
    "Peddamandyam","Penagalur","Pileru","Pullampeta","Rajampet","Ramapuram","Ramasamudram",
    "Rayachoti","Sambepalle","T. Sundupalle","Thamballapalle","Valmikipuram","Veeraballe"
  ],
  "Bapatla": [
    "Addanki","Amarthalur","Ballikurava","Bapatla","Bhattiprolu","Cherukupalli",
    "Chinaganjam","Chirala","Inkollu","J. Pangulur","Karamchedu","Karlapalem","Kolluru",
    "Korisapadu","Martur","Nagaram","Nizampatnam","Parchur","Pittalavanipalem","Repalle",
    "Santhamaguluru","Tsunduru","Vemuru","Vetapalem","Yeddana Pudi"
  ],
  "Chittoor": [
    "Baireddipalle","Bangarupalem","Chittoor Rural","Chittoor Urban","Chowdepalle",
    "Gangadhara Nellore","Gangavaram","Gudipala","Gudupalle","Irala","Karvetinagar",
    "Kuppam","Nagari","Nindra","Palamaner","Palasamudram","Peddapanjani","Penumur",
    "Pulicherla","Punganuru","Puthalapattu","Ramakuppam","Rompicherla","Santhipuram",
    "Sodam","Somala","Srirangarajapuram","Thavanampalle","Vedurukuppam","Venkatagirikota",
    "Vijayapuram","Yadamarri"
  ],
  "Dr. B.R. Ambedkar Konaseema": [
    "Ainavilli","Alamuru","Allavaram","Amalapuram","Ambajipeta","Atreyapuram","I. Polavaram",
    "K. Gangavaram","Kapileswarapuram","Katrenikona","Kothapeta","Malikipuram","Mamidikuduru",
    "Mandapeta","Mummidivaram","P. Gannavaram","Ramachandrapuram","Ravulapalem","Rayavaram",
    "Razole","Sakhinetipalli","Uppalaguptam"
  ],
  "East Godavari": [
    "Anaparthi","Biccavolu","Chagallu","Devarapalle","Gokavaram","Gopalapuram","Kadiam",
    "Korukonda","Kovvur","Nallajerla","Nidadavole","Peravali","Rajamahendravaram Rural",
    "Rajamahendravaram Urban","Rajanagaram","Rangampeta","Seethanagaram","Tallapudi",
    "Undrajavaram"
  ],
  "Eluru": [
    "Agiripalli","Bheemadole","Buttayagudem","Chatrai","Chintalapudi","Denduluru",
    "Dwarakatirumala","Eluru Rural","Eluru Urban","Jangareddigudem","Jeelugu Milli",
    "Kaikaluru","Kalidindi","Kamavarapukota","Koyyalagudem","Kukunoor","Lingapalem",
    "Mandavalli","Mudinepalle","Musunuru","Nidamarru","Nuzividu","Pedapadu","Pedavegi",
    "Polavaram","T. Narasapuram","Unguturu","Velairpadu"
  ],
  "Guntur": [
    "Chebrolu","Duggirala","Guntur East","Guntur West","Kakumanu","Kollipara","Mangalagiri",
    "Medikonduru","Pedakakani","Pedanandipadu","Phirangipuram","Ponnur","Prathipadu",
    "Tadepalli","Tadikonda","Tenali","Thulluru","Vatticherukuru"
  ],
  "Kakinada": [
    "Gandepalli","Gollaprolu","Jaggampeta","Kajuluru","Kakinada (Rural)","Kakinada (Urban)",
    "Karapa","Kirlampudi","Kotananduru","Pedapudi","Peddapuram","Pithapuram","Prathipadu",
    "Rowthulapudi","Samalkota","Sankhavaram","Tallarevu","Thondangi","Tuni","U. Kothapalli",
    "Yeleswaram"
  ],
  "Krishna": [
    "Avanigadda","Bantumilli","Bapulapadu","Challapalli","Gannavaram","Ghantasala","Gudivada",
    "Gudlavalleru","Guduru","Kankipadu","Koduru","Kruthivennu","Machilipatnam North",
    "Machilipatnam South","Mopidevi","Movva","Nagayalanka","Nandivada","Pamarru",
    "Pamidimukkala","Pedana","Pedaparupudi","Penamaluru","Thotlavalluru","Unguturu"
  ],
  "Kurnool": [
    "Adoni","Alur","Aspari","C. Belagal","Chippagiri","Devanakonda","Gonegandla","Gudur",
    "Halaharvi","Holagunda","Kallur","Kodumur","Kosigi","Kowthalam","Krishnagiri","Kurnool Rural",
    "Kurnool Urban","Maddikera (East)","Mantralayam","Nandavaram","Orvakal","Pattikonda",
    "Pedda Kadubur","Tuggali","Veldurthy","Vuyyalawada"
  ],
  "Nandyal": [
    "Allagadda","Atmakur","Bandi Atmakur","Banaganapalli","Bethamcherla","Chagalamarri","Dhone",
    "Dornipadu","Gadivemula","Gospadu","Jupadu Bunglow","Koilkuntla","Kolimigundla","Kothapalli",
    "Mahanandi","Miduthuru","Nandikotkur","Nandyal Rural","Nandyal Urban","Owk","Pagidyala",
    "Pamulapadu","Panyam","Peapully","Rudravaram","Sanjamala","Sirvel","Srisailam","Velugodu"
  ],
  "NTR": [
    "A Konduru","Atlapragada Konduru","Chandarlapadu","Gaddamanugu Konduru","Gampalagudem",
    "Ibrahimpatnam","Jaggayyapeta","Kanchikacherla","Mylavaram","Nandigama","Penuganchiprolu",
    "Reddigudem","Tiruvuru","Vatsavai","Veerullapadu","Vijayawada (Rural)","Vijayawada Central",
    "Vijayawada East","Vijayawada North","Vijayawada West","Vissannapeta"
  ],
  "Palnadu": [
    "Amaravathi","Atchampet","Bellamkonda","Bollapalle","Chilakaluripet","Dachepalle","Durgi",
    "Edlapadu","Gurajala","Ipuru","Karempudi","Krosuru","Machavaram","Macherla","Muppalla",
    "Nadendla","Narasaraopet","Nekarikallu","Nuzendla","Pedakurapadu","Piduguralla","Rajupalem",
    "Rentachintala","Rompicherla","Sattenapalli","Savalyapuram","Vinukonda"
  ],
  "Parvathipuram Manyam": [
    "Balijipeta","Bhamini","Garugubilli","Gummalakshmipuram","Jiyyammavalasa","Komarada",
    "Kurupam","Makkuva","Pachipenta","Palakonda","Parvathipuram","Salur","Seethampeta",
    "Seethanagaram","Veeraghattam"
  ],
  "Prakasam": [
    "Addanki","Ardhaveedu","Ballikurava","Cumbum","Dornala","Giddalur","Gogulapally","Inkollu",
    "J. Pangulur","Kanigiri","Karamchedu","Korisapadu","Kotha Patnam","Markapuram","Martur",
    "Mundi","Naguluppalapadu","Parchur","Podili","Ponnalur","Pullalacheruvu","Santhamaguluru",
    "Santharavuru","Singarayakonda","Tanguturu","Tripurantakam","Tarlupadu","Vetapalem",
    "Yeddana Pudi","Yerragondapalem"
  ],
  "Sri Potti Sriramulu Nellore": [
    "Allur","Ananthasagaram","Anumasamudrampeta","Atmakur","Bogole","Buchireddipalem",
    "Chejerla","Dagadarthi","Duttalur","Gudluru","Indukurpet","Jaladanki","Kaligiri",
    "Kaluvoya","Kandukuru","Kavali","Kodavalur","Kondapuram","Kovur","Lingasamudram",
    "Manubolu","Marripadu","Muthukur","Nellore Rural","Nellore Urban","Podalakur","Sangam",
    "Sullurpeta","Tada","Thotapalligudur","Udayagiri","Vakadu","Venkatachalam","Venkatagiri",
    "Vidavalur","Vinjamur"
  ],
  "Sri Sathya Sai": [
    "Agali","Amadagur","Amarapuram","Bathalapalli","Bukkapatnam","Chennekothapalli","Chilamathur",
    "Dharmavaram","Gandlapenta","Gorantla","Gudibanda","Hindupur","Kadiri","Kanaganipalli",
    "Kothacheruvu","Lepakshi","Madakasira","Mudigubba","Nallachervu","Nallamada",
    "Nambulapulakunta","Obuladevaracheruvu","Parigi","Penukonda","Puttaparthy"
  ],
  "Srikakulam": [
    "Amadalavalasa","Burja","Etcherla","Ganguvarisigadam","Gara","Hiramandalam","Ichchapuram",
    "Jalumuru","Kanchili","Kaviti","Kotabommali","Kothuru","Laveru","Laxminarasupeta",
    "Mandasa","Meliaputti","Nandigam","Narasannapeta","Palasa","Pathapatnam","Polaki",
    "Ponduru","Ranastalam","Santhabommali","Saravakota"
  ],
  "Tirupati": [
    "Balayapalli","Buchinaidu Kandriga","Chandragiri","Chillakur","Chinnagottigallu","Chittamur",
    "Dakkili","Doravarisatram","Gudur","Kota","K.V.B. Puram","Nagalapuram","Naidupeta",
    "Narayanavanam","Ozili","Pakala","Pellakur","Pichatur","Puttur","Ramachandrapuram",
    "Renigunta","Satyavedu","Srikalahasti","Sullurpeta","Tada","Thottambedu",
    "Tirupati Rural","Tirupati Urban","Vadamalapeta","Vakadu","Varadaiahpalem",
    "Venkatagiri","Yerpedu","Yerravaripalem"
  ],
  "Visakhapatnam": [
    "Anandapuram","Bheemunipatnam","Gajuwaka","Gopalapatnam","Maharanipeta","Mulagada",
    "Padmanabham","Pedagantyada","Pendurthi","Seethammadhara"
  ],
  "Vizianagaram": [
    "Badangi","Bhogapuram","Bobbili","Bondapalli","Cheepurupalli","Dattirajeru","Denkada",
    "Gajapathinagaram","Gantyada","Garividi","Gurla","Jami","Kothavalasa","Lakkavarapukota",
    "Merakamudidam","Mentada","Nellimarla","Pusapatirega","Rajam","Ramabhadrapuram",
    "Regidlamandalavalasa","Santhakaviti","Srungavarapukota","Therlam","Vangara","Vepada",
    "Vizianagaram"
  ],
  "West Godavari": [
    "Achanta","Akividu","Attili","Bhimavaram","Ganapavaram","Iragavaram","Kalla","Mogalthur",
    "Narasapuram","Palacoderu","Palacole","Pentapadu","Penugonda","Penumantra","Poduru",
    "Tadepalligudem","Tanuku","Undi","Veeravasaram","Yelamanchili"
  ],
  "Y.S.R. Kadapa": [
    "Badvel","B. Kodur","Brahmamgarimattam","Chapad","Chennur","Chintakomma Dinne",
    "Duvvur","Jammalamadugu","Kadapa","Kalasa Padu","Kamalapuram","Khajipeta","Kondapuram",
    "Lingala","Muddanur","Mydukur","Mylavaram","Pendlimarry","Porumamilla","Proddatur",
    "Pulivendula","Rajupalem","Sidhout","Simhadripuram","Sri Avakashinayala","Thondur","Vallur",
    "Vemula","Veerapunayunipally","Vontimitta","Yerraguntla"
  ]
};
const API_URL=import.meta.env.VITE_API_URL
const districts = Object.keys(data);
  const navigate=useNavigate();
  const [error,setError]=useState(false);
  const [grantLocation,setGrantLocation]=useState(false);
  const [denyLocation,setDenyLocation]=useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [message,setMessage]=useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber:"",
    dob:"",
    age:"",
    bloodgroup:"",
    gender:"",
    district: "",
    city: "",
    houseno:"",
    landmark:"",
    weight:"",
    bloodpressure:"",
    bloodsugar:"",
    badhabits:"",
    generalthings:"",
    contest:false
  });
  const [cities, setCities] = useState([]);
  const token=localStorage.getItem("token");
 const sendNavigatorLocation = () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      const resultState= await sendToBackend(latitude,longitude);
      setGrantLocation(resultState.success);
    });
  };
  const sendToBackend=async(latitude,longitude)=>{
    const res=await fetch(`${API_URL}/api/user/storegeoLocation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // 👈 IMPORTANT
        },
        body: JSON.stringify({
          location: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
        }),
      });
      const data=await res.json();
      return data;
  }
  const sendFallBackLocation=()=>{
    let flag=false;
    const address1 = `${formData.houseno}, ${formData.city}, ${formData.district},${"Andhra Pradesh"}`;
    const address2 = `${formData.city}, ${formData.district},${"Andhra Pradesh"}`;
    getCoordsFromAddress(address1)
    .then(async(result)=>{
      flag=true;
      const resultState= await sendToBackend(result.latitude,result.longitude);
      setDenyLocation(resultState.success);
    }).catch((err)=>{
        console.error(err.message);
      });
    if(!flag){
      getCoordsFromAddress(address2)
      .then(async(result)=>{
        const resultState= await sendToBackend(result.latitude,result.longitude);
        setDenyLocation(resultState.success);
      }).catch((err)=>{
        console.error(err.message);
      });
    }
  }
  const getCoordsFromAddress = async (address) => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
    );

    const data = await res.json();

    if (!data || data.length === 0) {
      throw new Error("Address not found");
    }

    return {
      latitude: parseFloat(data[0].lat),
      longitude: parseFloat(data[0].lon),
    };
  };
 const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  setFormData((prev) => {
    const updatedData = {
      ...prev,
      [name]: type === "checkbox" ? checked : value
    };

    if (name === "district") {
      setCities(data[value] || []);
      updatedData.city = "";
    }

    return updatedData;
  });
};

  const handleSubmit =async(e) => {
    const token=localStorage.getItem('token');
    e.preventDefault();
    var res;
    try {
      res = await fetch(`${API_URL}/api/addDetailsOfUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization":`Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      if(res.status==200)
        {
            setMessage("Success");
            setIsVisible(true);
            setIsSuccess(true);
            setIsFailed(false);
            setTimeout(()=>{
                setMessage("Redirecting.");
            },800);
            setTimeout(()=>{
                setMessage("Redirecting..");
            },1200);
            setTimeout(()=>{
                setMessage("Redirecting...");
            },1600);
            setTimeout(() => {
                navigate("/dashboard");
            }, 2000);
        }
        else{
            setMessage("Failed");
            setIsVisible(true);
            setIsFailed(true);
            setIsSuccess(false);
        }
    }
    catch(error){
            setMessage("Failed");
            setIsVisible(true);
            setIsFailed(true);
            setIsSuccess(false);
    }
  };
  const closeModal=()=>{
    setIsVisible(!isVisible);
  };

    return(
      <>
            <div className={styles.formDiv}>
                <form onSubmit={handleSubmit}>
                    <h1 className={styles.formh1}>DONOR DETAILS FORM</h1>
                    <p className={styles.formp}>* Please fill this form so that we can reach out to you when needed.</p>
                   <fieldset className={styles.formSection}>
                      <legend className={styles.sectionTitle}>Personal Information</legend>
                      <div className={styles.gridRow2}>
                        <div className={styles.fieldGroup}>
                          <label className={styles.regLabel} htmlFor="Name">Name:</label>
                          <input className={styles.regInput} name="name" value={formData.name} onChange={handleChange} type="text" id="Name" placeholder='Please Enter Your Full Name...' required></input>
                        </div>
                        <div className={styles.fieldGroup}>
                          <label className={styles.regLabel} htmlFor="Email">Email:</label>
                          <input className={`${styles.regInput} ${error ? styles.errorBorder : styles.normalBorder}`} name="email" value={formData.email} onChange={handleChange} type="email" id="Email" placeholder="Ex:123@gmail.com" required></input>
                        </div>
                        <div className={styles.fieldGroup}>
                          <label className={styles.regLabel} htmlFor="PhoneNumber">Mobile No:</label>
                          <input className={styles.regInput} name="phonenumber" value={formData.phonenumber} onChange={handleChange} type="tel" id="PhoneNumber" placeholder="please provide personal number that stays with u all time" maxLength="10" required></input>
                        </div>
                        <div className={styles.fieldGroup}>
                          <label className={styles.regLabel} htmlFor="DOB">Date Of Birth:</label>
                          <input className={styles.regInput} name="dob" value={formData.dob} onChange={handleChange} type="date" id="DOB" required></input>
                        </div>
                        <div className={styles.fieldGroup}>
                          <label className={styles.regLabel} htmlFor="Age">Age:</label>
                          <input className={styles.regInput} name="age" value={formData.age} onChange={handleChange} type="tel" maxLength='2' id="Age" placeholder='Ex:18(18 years old) ' required></input>
                        </div>
                        <div className={styles.fieldGroup}>
                          <label className={styles.regLabel} htmlFor="Gender">Gender</label>
                          <div className={styles.genderrb}>
                            <input className={styles.radioInput} value="Male" checked={formData.gender === "Male"} onChange={handleChange} name="gender" type="radio" id="Male"></input>
                            <label className={styles.radioLabel} htmlFor="Male" >Male</label>
                            <input className={styles.radioInput} value="Female" checked={formData.gender === "Female"} onChange={handleChange} name="gender" type="radio" id="Female"></input>
                            <label htmlFor="Female" className={styles.radioLabel}>Female</label>
                            <input className={styles.radioInput} value="Others" checked={formData.gender === "Others"} onChange={handleChange} name="gender" type="radio" id="Others"></input>
                            <label htmlFor="Others" className={styles.radioLabel}>others</label>
                          </div>
                        </div>
                      </div>
                   </fieldset>
                   <fieldset className={styles.formSection}>
                      <legend className={styles.sectionTitle}>Personal Information</legend>
                      <div className={styles.gridRow2}>
                        <div className={styles.fieldGroup}>
                          <label className={styles.regLabel} htmlFor="Bloodgroup">Blood Group:</label>
                          <select name="bloodgroup" value={formData.bloodgroup} onChange={handleChange}  id="Bloodgroup" required>
                              <option value="">Select Blood Group</option>
                              <option value="A+">A+</option>
                              <option value="A-">A-</option>
                              <option value="B+">B+</option>
                              <option value="B-">B-</option>
                              <option value="AB+">AB+</option>
                              <option value="AB-">AB-</option>
                              <option value="O+">O+</option>
                              <option value="O-">O-</option>
                          </select>
                        </div>
                        <div className={styles.fieldGroup}>
                          <label className={styles.regLabel} htmlFor="weight">Weight:</label>
                          <input className={styles.regInput} name="weight" value={formData.weight} onChange={handleChange} type="tel" maxLength='3' id="weight" placeholder='Ex:55(in kgs,above 45 only)' required></input>
                        </div>
                        <div className={styles.fieldGroup}>
                          <label className={styles.regLabel} htmlFor="bloodpressure">Blood Pressure(BP):</label>
                          <div className={styles.genderrb}>
                            <input className={styles.radioInput} value="Yes" checked={formData.bloodpressure === "Yes"} onChange={handleChange} name="bloodpressure" type="radio" id="bp-Yes"></input>
                            <label className={styles.radioLabel} htmlFor="bp-Yes" >Yes</label>
                            <input className={styles.radioInput} value="No" checked={formData.bloodpressure === "No"} onChange={handleChange} name="bloodpressure" type="radio" id="bp-No"></input>
                            <label htmlFor="bp-No" className={styles.radioLabel}>No</label>
                          </div>
                        </div>
                        <div className={styles.fieldGroup}>
                          <label className={styles.regLabel} htmlFor="bloodsugar">Blood Sugar:</label>
                          <div className={styles.genderrb}>
                            <input className={styles.radioInput} value="Yes" checked={formData.bloodsugar === "Yes"} onChange={handleChange} name="bloodsugar" type="radio" id="bs-Yes"></input>
                            <label className={styles.radioLabel} htmlFor="bs-Yes" >Yes</label>
                            <input className={styles.radioInput} value="No" checked={formData.bloodsugar === "No"} onChange={handleChange} name="bloodsugar" type="radio" id="bs-No"></input>
                            <label htmlFor="bs-No" className={styles.radioLabel}>No</label>
                          </div>
                        </div>
                        <div className={styles.fieldGroup}>
                          <label className={styles.regLabel} htmlFor="badhabits">Smoking/Drinking:</label>
                          <div className={styles.genderrb}>
                            <input className={styles.radioInput} value="Yes" checked={formData.badhabits === "Yes"} onChange={handleChange} name="badhabits" type="radio" id="bh-Yes"></input>
                            <label className={styles.radioLabel} htmlFor="bh-Yes" >Yes</label>
                            <input className={styles.radioInput} value="No" checked={formData.badhabits === "No"} onChange={handleChange} name="badhabits" type="radio" id="bh-No"></input>
                            <label htmlFor="bh-No" className={styles.radioLabel}>No</label>
                          </div>
                        </div>
                        <div className={styles.fieldGroup}>
                          <label className={styles.regLabel} htmlFor="generalthings">Does you have Tattoos, ear/body piercings, or dental work <br></br>in the last 6–12 months?</label>
                          <div className={styles.genderrb}>
                            <input className={styles.radioInput} value="Yes" checked={formData.generalthings === "Yes"} onChange={handleChange} name="generalthings" type="radio" id="gt-Yes"></input>
                            <label className={styles.radioLabel} htmlFor="gt-Yes" >Yes</label>
                            <input className={styles.radioInput} value="No" checked={formData.generalthings === "No"} onChange={handleChange} name="generalthings" type="radio" id="gt-No"></input>
                            <label htmlFor="gt-No" className={styles.radioLabel}>No</label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset className={styles.formSection}>
                      <legend className={styles.sectionTitle}>Permanent Address</legend>
                      <div className={styles.gridRow2}> 
                        <div className={styles.fieldGroup}>
                          <label className={styles.regLabel} >District:</label>
                          <select name="district" value={formData.district} onChange={handleChange}>
                            <option value="">-- Select District --</option>
                            {districts.map((district, index) => (
                                <option key={index} value={district}>
                                {district}
                                </option>
                            ))}
                          </select>
                        </div>
                        <div className={styles.fieldGroup}>
                          <label className={styles.regLabel}>City/Mandal:</label>
                          <select name="city" value={formData.city} onChange={handleChange} disabled={!cities.length}>
                            <option value="">-- Select City --</option>
                            {cities.map((city, index) => (
                                <option key={index} value={city}>
                                {city}
                                </option>
                            ))}
                          </select>
                        </div>
                        <div className={styles.fieldGroup}>
                          <label className={styles.regLabel} htmlFor="houseNo">House No:/ PlotNo:</label>
                          <input className={styles.regInput} name="houseno" value={formData.houseno} onChange={handleChange} type="text" id="houseNo" required></input>
                        </div>
                        <div className={styles.fieldGroup}>
                          <label className={styles.regLabel} htmlFor="landmark">Nearest LandMark</label>
                          <input className={styles.regInput} name="landmark" value={formData.landmark} onChange={handleChange} type="text" id="landmark" placeholder='Near PostOffice,Near Shivalayam,etc.'required></input>
                        </div>
                        <div className={styles.fieldGroup}>
                          <label className={styles.regLabel} htmlFor="geolocation">Location Access</label>
                          <span><p className={styles.smallpara}>*Allow only if you are in permanent location(Home,Office,etc,.)</p></span>
                          {grantLocation &&(<p style={{color:"green",marginLeft:10,fontSize:22,fontWeight:500}}><span class="material-symbols-outlined">task_alt</span> Access Granted</p>)
                          }
                          {(!grantLocation && !denyLocation) &&(<div>
                            <span><button className={styles.buttonAllow} type="button" onClick={sendNavigatorLocation} > <FontAwesomeIcon icon={faCircleCheck} size="xs" style={{color: "rgb(255, 255, 255)",}} /> Allow</button></span>
                            <span><button className={styles.buttonDeny} type="button" onClick={sendFallBackLocation} > <FontAwesomeIcon icon={faCircleXmark} size="xs" style={{color: "rgb(255, 255, 255)",}} /> Deny</button></span></div>)
                          }
                          {denyLocation &&(<p style={{color:"orange"}}>Accurate location helps in connecting people nearby!.</p>)}
                        </div>
                      </div>
                      <div className={styles.contestGrid}>
                        <input className={styles.contestInput} name="contest" checked={formData.contest} onChange={handleChange} type="checkbox" id="contest" required></input>
                        <label className={styles.contestLabel} htmlFor="contest">I acknowledge above mentioned data is true, as of my knowledge.</label>
                      </div>
                    </fieldset>
                    <div>
                      {error && <p style={{color:"red",margin:0,textDecoration:'none'}}>Email Already Exsists</p>}
                      <button className={styles.buttonSubmit} type="submit" disabled={!formData.contest}>Submit</button>
                      
                      <button className={styles.buttonGoHome} type="button" onClick={()=>{navigate("/")}}>Go To Home</button>
                    </div>
                </form>
            </div>
            {isVisible && 
                <div className={styles.overlay}>
                  <div className={styles.modal}>
                      <span className={styles.modalCloseBtn} onClick={closeModal}>X</span>
                      <div className={styles.modalMain}>
                          {isSuccess && (
                              <>
                              <FontAwesomeIcon icon={faCircleCheck} className={styles.modalSuccess} />
                              <p className={styles.modalMessage}>{message}</p>
                              </>
                          )}
                          {isFailed && (
                              <>
                              <span className={`material-symbols-outlined ${styles.modalInvalid}`}>error </span>
                              <p className={styles.modalMessage}> Failed</p>
                              </>
                          )}

                      </div>
                  </div>
              </div>
            }
    </>
    )
}

export default FullDetailsForm;


