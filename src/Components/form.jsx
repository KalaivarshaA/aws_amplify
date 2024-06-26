    import { useState } from "react";
    import { Link as Defpath } from 'react-router-dom';
    import axios from 'axios';



    function Form() {
        
        const [formData, setFormData] = useState({
            userEmail: "",
            userPassword: "",
            userFirst: "",
            userLast: "",
            userPhone: "",
            street: "",
            city: "",
            country: "",
            userGender: "", 
            date: "",
            month: "",
            year: "",
            
        });
        
            const [active, setActive] = useState("nav__menu");
            const [icon, setIcon] = useState("nav__toggler");
        
            const navToggle = () => {
                if (active === "nav__menu") {
                    setActive("nav__menu nav__active");
                } else setActive("nav__menu");
        
                // Icon Toggler
                if (icon === "nav__toggler") {
                    setIcon("nav__toggler toggle");
                } else setIcon("nav__toggler");
            };
            const handleInputChange = (event) => {
                const { name, value } = event.target;
                setFormData({ ...formData, [name]: value });
            };
        
            const handleSubmit = async (event) => {
                event.preventDefault();
                try {
                    console.log('Form data:', formData); // Log form data before submission
                    const response = await axios.post('http://localhost:8082/postBooking', formData);
                    console.log('Booking created successfully:', response.data);
                    alert('Booking created successfully!');
                    // Reset form or navigate to another page
                } catch (error) {
                    console.error('Error creating booking:', error);
                    alert('Error creating booking. Please try again.');
                }
            };
        
    return (
        <div>
        <div>
        {/* Add the navigation bar here */}
        <nav className="nav">
            <Defpath to="/" className="nav__brand">
            ZenNest
            </Defpath>
            <ul className={active}>
            <li className="nav__item">
                <Defpath to="/" className="nav__link">
                Home
                </Defpath>
            </li>
            <li className="nav__item">
                <Defpath to="/services" className="nav__link">
                Services
                </Defpath>
            </li>
            <li className="nav__item">
                <Defpath to="/aboutus" className="nav__link">
                AboutUs
                </Defpath>
            </li>
            <li className="nav__item">
                <Defpath to="/contactus" className="nav__link">
                ContactUs
                </Defpath>
            </li>
            <li className="nav__item">
                <Defpath to="/myprofile" className="nav__link">
                MyProfile
                </Defpath>
            </li>
            <li className="nav__item">
            <Defpath to="/signup">
                <button className="nav__button">Logout</button></Defpath>
            </li>
            </ul>
            <div onClick={navToggle} className={icon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
            </div>
        </nav>
        </div><br></br><br></br>
        <div>

        <div className="container">
            <div id="newUser" className="col-sm-6 col-sm-offset-3">
            {/* New User Profile */}
            <form name="newUser" className="register" noValidate onSubmit={handleSubmit} >
            <div className="regform">
                <h1>Register Form</h1></div>
                <fieldset className="row1">
                <legend>Account Details</legend>
                {/* EMAIL */}
                <div className="form-group">
                    <label>Email *</label>
                    <input type="email" name="email" className="form-control" onChange={handleInputChange} />
                    
                </div>
                {/* PASSWORD */}
                <div className="form-group">
                    <label>Password *</label>
                    <input type="pass" name="pass" className="form-control" onChange={handleInputChange} />
                
                </div>
                </fieldset>
                <fieldset className="row2">
                <legend>Personal Details</legend>
                {/* NAME */}
                <div className="form-group">
                    <label>First Name *</label>
                    <input type="fname" name="fname" className="form-control" onChange={handleInputChange}/>
                    <label>Last Name *</label>
                    <input type="lname" name="lname" className="form-control" onChange={handleInputChange}/>
                </div>
                {/* PHONE NUMBER */}
                <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="ph" name="ph" className="form-control" onChange={handleInputChange}/>
                </div>
                {/* ADDRESS */}
                <div className="form-group">
                    <label>Address *</label>
                    <input type="add" name="add" className="form-control" onChange={handleInputChange}/>
                    <label>City *</label>
                    <input type="city" name="city" className="form-control"  onChange={handleInputChange}/>
                    <label>Country *</label>
                    <input type="country" name="country" className="form-control"  onChange={handleInputChange}/>

                    
                    
                </div>
                </fieldset>
                <fieldset className="row3">
                <legend>Further Information</legend>
                {/* GENDER */}
                <div className="form-group">
                    <label>Gender :
                    <input type="radio" name="gender" defaultValue="male" onChange={handleInputChange}/> Male
                    <input type="radio" name="gender" defaultValue="female" onChange={handleInputChange} /> Female
                    </label>
                </div>
                {/* BIRTHDAY */}
                <div className="form-group">
                    <label>Birthdate :</label>
                    <select name="date">
                    <option value={1}>01
                    </option>
                    <option value={2}>02
                    </option>
                    <option value={3}>03
                    </option>
                    <option value={4}>04
                    </option>
                    <option value={5}>05
                    </option>
                    <option value={6}>06
                    </option>
                    <option value={7}>07
                    </option>
                    <option value={8}>08
                    </option>
                    <option value={9}>09
                    </option>
                    <option value={10}>10
                    </option>
                    <option value={11}>11
                    </option>
                    <option value={12}>12
                    </option>
                    <option value={13}>13
                    </option>
                    <option value={14}>14
                    </option>
                    <option value={15}>15
                    </option>
                    <option value={16}>16
                    </option>
                    <option value={17}>17
                    </option>
                    <option value={18}>18
                    </option>
                    <option value={19}>19
                    </option>
                    <option value={20}>20
                    </option>
                    <option value={21}>21
                    </option>
                    <option value={22}>22
                    </option>
                    <option value={23}>23
                    </option>
                    <option value={24}>24
                    </option>
                    <option value={25}>25
                    </option>
                    <option value={26}>26
                    </option>
                    <option value={27}>27
                    </option>
                    <option value={28}>28
                    </option>
                    <option value={29}>29
                    </option>
                    <option value={30}>30
                    </option>
                    <option value={31}>31
                    </option>
                    </select>
                    <select name="month">
                    <option value={1}>January
                    </option>
                    <option value={2}>February
                    </option>
                    <option value={3}>March
                    </option>
                    <option value={4}>April
                    </option>
                    <option value={5}>May
                    </option>
                    <option value={6}>June
                    </option>
                    <option value={7}>July
                    </option>
                    <option value={8}>August
                    </option>
                    <option value={9}>September
                    </option>
                    <option value={10}>October
                    </option>
                    <option value={11}>November
                    </option>
                    <option value={12}>December
                    </option>
                    </select>
                    <input name="year" type="year" size={4} maxLength={4} />e.g 1986
                </div>
                </fieldset>
                <fieldset className="row2">
    <legend>Personal Details</legend>
    {/* NAME */}
    <div className="form-group">
        <label>First Name *</label>
        <input type="fname" name="fname" className="form-control" onChange={handleInputChange}/>
        <label>Last Name *</label>
        <input type="lname" name="lname" className="form-control" onChange={handleInputChange}/>
    </div>
    {/* PHONE NUMBER */}
    <div className="form-group">
        <label>Phone Number *</label>
        <input type="ph" name="ph" className="form-control" onChange={handleInputChange}/>
    </div>
    {/* ADDRESS */}
    <div className="form-group">
        <label>Address *</label>
        <input type="add" name="add" className="form-control" onChange={handleInputChange}/>
        <label>City *</label>
        <input type="city" name="city" className="form-control"  onChange={handleInputChange}/>
        <label>Country *</label>
        <input type="country" name="country" className="form-control"  onChange={handleInputChange}/>
    </div>
    {/* Service */}
    <div className="form-group">
        <label>Service *</label>
        <select name="service" className="form-control" onChange={handleInputChange}>
            <option value="">Select a service</option>
            <option value="home_services">Home Services</option>
            <option value="facility_care">Facility Care</option>
            <option value="relative_care">Relative Care</option>
            <option value="respite_care">Respite Care</option>
            <option value="pre_and_post_operative">Pre and Post Operative</option>
            <option value="dementia_care">Dementia Care</option>
        </select>
    </div>
</fieldset>

                <fieldset className="row4">
                <legend>Terms and Mailing</legend>
                <div className="agreement">
                    <input type="checkbox" name="agreement" />
                    <label>*  I accept the <a href="#">Terms and Conditions</a></label>
                </div>
                <div className="agreement">
                    <input type="checkbox" />
                    <label>I want to receive personalized offers by your site</label>
                </div>
                <div className="agreement">
                    <input type="checkbox" />
                    <label>Allow partners to send me personalized offers and related services</label>
                </div>
                </fieldset>
                <div>
                <button type="submit" id="registerButton">Register »</button>
                </div>
            </form>
            </div> {/* New User */}
            <div id="updatedProfile" className="col-sm-6 col-sm-offset-3">
            <h1>THANK YOU FOR REGISTRATING</h1>
            <div>
                <h2 id="userEmail" />
                <h3 id="userName" />
                <h3 id="userPhone" />
                <h3 id="userAddress" />
                <h3 id="userGender" />
                <h3 id="userBirthday" />
            </div>
            </div>
        </div> {/* Container */}
        </div>
        <footer className="content-footer">
            <p> Say hi to us on these social networks: </p>
            <ul className="social">
                <li> <a href="https://www.instagram.com/kalai.varshaa/"> Instagram </a> </li>
                <li> <a href="_INSERT_TWITTER_URL_HERE_"> Twitter </a> </li>
                <li> <a href="_INSERT_GOOGLE+_URL_HERE_"> Google+</a> </li>
            </ul>
            </footer>
        </div>
        );
    }

    export default Form;
