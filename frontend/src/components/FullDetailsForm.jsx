import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from '../css/FullDetailsForm.module.css'; 
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

const districts = Object.keys(data);
  const navigate=useNavigate();
  const [error,setError]=useState(false);
  const [grantLocation,setGrantLocation]=useState(false);
  const [denyLocation,setDenyLocation]=useState(false);
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
    landmark:""
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
    const res=await fetch("http://localhost:5000/api/user/storegeoLocation", {
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
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    if (name === "district") {
      setCities(data[value] || []);
      setFormData((prev) => ({ ...prev, city: "" }));
    }
  };

  const handleSubmit =async(e) => {
    const token=localStorage.getItem('token');
    console.log(token);
    e.preventDefault();
    // console.log("Form Values:", formData);
    try {
      const response = await fetch("http://localhost:5000/api/addDetailsOfUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization":`Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      // if (!response.ok) {
      //   alert("Internal Failure,Sorry For Inconvenience.");
      // }
      if(response.status===400)
      {
        setError(true);

      }
      if(response.status===401 || response.status===403)
      {
        navigate("/Auth");
      }
      if(response.ok)
      {
        navigate('/');
      }
    } catch (error) {
      alert("Error Submiting Form Try Again.");
    }
  };

    return(
        <div className={styles.overlay}>
            <div className={styles.formDiv}>
                <form onSubmit={handleSubmit} >
                    <h1 className={styles.formh1}>Donor Details Form</h1>
                    <p className={styles.formp}>* Please fill this form so that we can reach out to you when needed.</p>
                    <label className={styles.regLabel} htmlFor="Name">Name:</label>
                    <input className={styles.regInput} name="name" value={formData.name} onChange={handleChange} type="text" id="Name" placeholder='Please Enter Your Full Name...' required></input>
                    <label className={styles.regLabel} htmlFor="Email">Email:</label>
                    <input className={`${styles.regInput} ${error ? styles.errorBorder : styles.normalBorder}`} name="email" value={formData.email} onChange={handleChange} type="email" id="Email" placeholder="Ex:123@gmail.com" required></input>
                    <label className={styles.regLabel} htmlFor="PhoneNumber">Mobile No:</label>
                    <input className={styles.regInput} name="phonenumber" value={formData.phonenumber} onChange={handleChange} type="tel" id="PhoneNumber" placeholder="please provide personal number that stays with u all time" maxLength="10" required></input>
                    <label className={styles.regLabel} htmlFor="DOB">Date Of Birth:</label>
                    <input className={styles.regInput} name="dob" value={formData.dob} onChange={handleChange} type="date" id="DOB" required></input>
                    <label className={styles.regLabel} htmlFor="Age">Age:</label>
                    <input className={styles.regInput} name="age" value={formData.age} onChange={handleChange} type="tel" maxLength='2' id="Age" placeholder='Ex:18(18 years old) ' required></input>
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
                    <label className={styles.regLabel} htmlFor="Gender">Gender</label>
                    <input className={styles.radioInput} value="Male" checked={formData.gender === "Male"} onChange={handleChange} name="gender" type="radio" id="Male"></input>
                    <label className={styles.radioLabel} htmlFor="Male" >Male</label>
                    <input className={styles.radioInput} value="Female" checked={formData.gender === "Female"} onChange={handleChange} name="gender" type="radio" id="Female"></input>
                    <label htmlFor="Female" className={styles.radioLabel}>Female</label>
                    <input className={styles.radioInput} value="Others" checked={formData.gender === "Others"} onChange={handleChange} name="gender" type="radio" id="Others"></input>
                    <label htmlFor="Others" className={styles.radioLabel}>others</label>
                    <label className={styles.regLabel} >District:</label>
                        <select name="district" value={formData.district} onChange={handleChange}>
                        <option value="">-- Select District --</option>
                        {districts.map((district, index) => (
                            <option key={index} value={district}>
                            {district}
                            </option>
                        ))}
                        </select>
                    <label className={styles.regLabel}>City/Mandal:</label>
                        <select name="city" value={formData.city} onChange={handleChange} disabled={!cities.length}>
                        <option value="">-- Select City --</option>
                        {cities.map((city, index) => (
                            <option key={index} value={city}>
                            {city}
                            </option>
                        ))}
                        </select>
                    <label className={styles.regLabel} htmlFor="houseNo">House No:/ PlotNo:</label>
                    <input className={styles.regInput} name="houseno" value={formData.houseno} onChange={handleChange} type="text" id="houseNo" required></input>
                    <label className={styles.regLabel} htmlFor="landmark">Nearest LandMark</label>
                    <input className={styles.regInput} name="landmark" value={formData.landmark} onChange={handleChange} type="text" id="landmark" placeholder='Near PostOffice,Near Shivalayam,etc.'required></input>
                    <label className={styles.regLabel} htmlFor="geolocation">Location Access</label>
                    <span><p className={styles.smallpara}>*Allow only if you are in permanent location(Home,Office,etc,.)</p></span>
                    {grantLocation &&(<p style={{color:"green",marginLeft:10,fontSize:22,fontWeight:500}}><span class="material-symbols-outlined">task_alt</span> Access Granted</p>)
                    }
                    {(!grantLocation && !denyLocation) &&(<div>
                      <span><button className={styles.buttonAllow} type="button" onClick={sendNavigatorLocation} >Allow</button></span>
                      <span><button className={styles.buttonDeny} type="button" onClick={sendFallBackLocation} >Deny</button></span></div>)
                    }
                    {denyLocation &&(<p style={{color:"orange"}}>Accurate location helps in connecting people nearby!.</p>)}
                    {error && <p style={{color:"red",margin:0,textDecoration:'none'}}>Email Already Exsists</p>}
                    <button className={styles.buttonSubmit} type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default FullDetailsForm;


