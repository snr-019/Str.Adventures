import React from "react";
import "./Nav.css";
import img from "./logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";
import { useAuth } from '../../context/authContext.jsx';
import  "./Nav.js";
function Nav() {
  const { isAuth, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/'); 
  };

  const redirect = () => {
    if (!isAuth) {
      navigate('/SignIn');
    } else {
      navigate('/BookProp');
    }
  };

  return (
    <div>
      <div className="container-fluid" id="one">
        <nav className="navbar navbar-expand-lg navbar-light ten">
          <div className="container-fluid">
            <div className="d-flex align-items-center">
              <a href="#"><img className="logo" src={img} alt="Logo" /></a>
              <div className="inner">
                <a className="navbar-brand naam" id="brand" href="#">
                  Str Adventures
                </a>
                <h6 className="sky">Sky | Terrene | Rapids</h6>
              </div>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation"
             style={{
              backgroundColor: '#0f7c6c', 
              borderColor: '#dadce3',      // Button border color
              padding: '3px',             // Button padding
              borderRadius: '5px', 
              marginRight:'7px'        // Rounded corners
            }}
            >
              <span className="navbar-toggler-icon"
               style={{
                backgroundColor: '#dadce3', 
               padding: '10px',
               borderRadius:'5px',
               width: '40px'
                }}
              ></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {/*********************ADVENTURE TOURISM *****************/}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="adventureTourismDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <li><Button className="booking" id="bookid">Adventure Tourism</Button></li>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="adventureTourismDropdown">
                  <li className="dropdown-submenu">
                       <a className="dropdown-item dropdown-toggle"  href="#" id="treksDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                             Treks</a>
                       <ul className="dropdown-menu" id="cc" aria-labelledby="treksDropdown">
                         <li><a className="dropdown-item" id="drop" href="#/destination/kashmir">Kashmir Great Lakes</a></li>
                         <li><a className="dropdown-item" id="drop" href="#/destination/tarsar">Tarsar Marsar</a></li>
                         <li><a className="dropdown-item" id="drop" href="#/destination/khemsar">Sonmes Yamhar</a></li>
                         <li><a className="dropdown-item" id="drop" href="#/destination/tosa">Tosa Maidan</a></li>
                         <li><a className="dropdown-item" id="drop" href="#/destination/kounsarnag">Kounsarnag</a></li>
                         <li><a className="dropdown-item" id="drop" href="#/destination/barfsar">Barf Sar</a></li>
                         <li><a className="dropdown-item" id="drop" href="#/destination/tulian">Tulian Trek</a></li>
                         <li><a className="dropdown-item" id="drop" href="#/destination/harnag">Harnag Trek</a></li>
                         <li><a className="dropdown-item" id="drop" href="#/destination/harmukh">Harmukh Valley/Gangbal Trek</a></li>
                      </ul>
                     </li>
                        <li className="dropdown-submenu">
                       <a className="dropdown-item dropdown-toggle" href="#" id="treksDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Summits</a>
                       <ul className="dropdown-menu " id="cc" aria-labelledby="treksDropdown">
                          <li><a className="dropdown-item" id="drop" href="#/destination/mahadev">Mount Mahadev</a></li>
                          <li><Link className="dropdown-item" id="drop" to="/soon">Sunset Peak</Link></li>
                          <li><Link className="dropdown-item" id="drop" to="/soon">Sheeneh Mane Peak</Link></li>
                          <li><Link className="dropdown-item" id="drop" to="/soon">Loharkut</Link></li>
                          <li><Link className="dropdown-item" id="drop" to="/soon">Tattakuti</Link></li>
                       </ul>
                       </li>
                        <li className="dropdown-submenu">
                           <a className="dropdown-item dropdown-toggle" href="#" id="treksDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Day Treks</a>
                        <ul className="dropdown-menu " id="cc" aria-labelledby="treksDropdown">
                          <li><Link className="dropdown-item" id="drop" to="/soon">Dachigam</Link></li>
                          <li><Link className="dropdown-item" id="drop" to="/soon">Chiranbal</Link></li>
                          <li><Link className="dropdown-item" id="drop" to="/soon">Kongwatan</Link></li>
                          <li><Link className="dropdown-item" id="drop" to="/soon">Marchoii</Link></li>
                          <li><Link className="dropdown-item" id="drop" to="/soon">Chouharnag Lakes</Link></li>
                          <li><Link className="dropdown-item" id="drop" to="/soon">Girsar</Link></li>
                          <li><Link className="dropdown-item" id="drop" to="/soon">Thajwas Glacier</Link></li>
                          <li><Link className="dropdown-item" id="drop" to="/soon">Sheesnag Lake Trek</Link></li>
                          <li><Link className="dropdown-item" id="drop" to="/soon">Raineera Meadow Trek</Link></li>
                       </ul>   
                       </li> 
                 </ul>
                 </li>


                {/*********************LEISURE *********************/}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="leisureDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <li><Button className="booking" id="bookid">Leisure Tourism</Button></li>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="leisureDropdown">
                  <li className="dropdown-submenu">
                         <a className="dropdown-item dropdown-toggle" href="#" id="treksDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Kashmir Tour Packages</a>
                         <ul className="dropdown-menu" id="bb" aria-labelledby="treksDropdown">
                            <li><a className="dropdown-item drop" href="#/destination/srinagar_1" style={{color:'#0f7c6c'}}>Srinagar</a></li>
                            <li><a className="dropdown-item drop" href="#/destination/pahalgam_1" style={{color:'#0f7c6c'}}>Pahalgam</a></li>
                            <li><a className="dropdown-item drop" href="#/destination/gulmarg_1" style={{color:'#0f7c6c'}}>Gulmarg</a></li>
                            <li><a className="dropdown-item drop" href="#/destination/sonamarg_1" style={{color:'#0f7c6c'}}>Sonamarg</a></li>
                         </ul>
                      </li>
                       {/* ***************** */}
                       <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#" id="treksDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Kashmir OffBeat Packages</a>
                          <ul className="dropdown-menu " id="cc" aria-labelledby="treksDropdown">
                            <li><a className="dropdown-item" id="drop" href="#/Warwan/warwan-valley">Warwan Valley</a></li>
                            {/* <li><a className="dropdown-item" id="drop" href="#">Daksum Valley</a></li> */}
                            <li><Link className="dropdown-item" id="drop" to="/soon">Daksum Valley</Link></li>
                            <li><Link className="dropdown-item" id="drop" to="/soon">Simpthan Top</Link></li>
                            {/* <li><a className="dropdown-item" id="drop" href="#">Simpthan Top</a></li> */}
                            <li><a className="dropdown-item" id="drop" href="#/destination/gurez-valley">Gurez Valley</a></li>
                            <li><a className="dropdown-item" id="drop" href="#/destination/bungus-valley">Bangus Valley</a></li>
                          </ul>
                      </li>
               </ul>
                 </li>
          

                {/****************************ACTIVITIES ************************/}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="activitiesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <li><Button className="booking" id="bookid">Adventure Activities</Button></li>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="activitiesDropdown">
                       <li><a className="dropdown-item" id="drop" href="#/destination/skiing">Skiing</a></li>
                       <li><a className="dropdown-item" id="drop" href="#/desstination/rafting">Rafting</a></li>
                       <li><a className="dropdown-item" id="drop" href="#/destination/paragliding">Paragliding</a></li>
                       <li><a className="dropdown-item" id="drop" href="#/destination/jetski">Water Jet Skiing</a></li>
                       <li><a className="dropdown-item" id="drop" href="#/destination/snow">ATV/Snow Mobiling</a></li>
                       <li><a className="dropdown-item" id="drop" href="#/destination/angling">Angling</a></li>
                       <li><a className="dropdown-item" id="drop" href="#/destination/bird1">Bird Watching</a></li>
                  </ul>
                </li>

                {/****************************REGISTER ************************************/}
                <div className="mid">
                 
                <li><Button id="booking" onClick={() => redirect()}>Book Now</Button></li>

                </div>
                {!isAuth &&
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="registerDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <li><Button className="booking" id="bookid">Register</Button></li>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="registerDropdown">
                      <Link to="/SignIn"><li><span className="dropdown-item">Sign In</span></li></Link>
                      <Link to="/SignUp"><li><span className="dropdown-item">Sign Up</span></li></Link>
                    </ul>
                  </li>
                }
                 {isAuth &&
                  <li className="mid"><Button id="booking" onClick={() => navigate('/home')}>Dashboard</Button></li>
                }
                {isAuth &&
                  <li className="mid"><Button id="booking" onClick={handleLogout}>Log Out</Button></li>
                }
               
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
