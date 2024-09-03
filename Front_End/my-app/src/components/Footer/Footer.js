import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import "./Footer.css";
import logo1 from "./logo.jpeg";
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext.jsx';

function Footer() {
    
    const { isAuth } = useAuth()
    return (
        <footer className="footer">
            <Container fluid>
                <Row className="bg-custom text-white py-2">
                    <Col xs={12} md={4} className="d-flex align-items-center justify-content-center mb-4 mb-md-0">
                        <div className="text-center">
                            <img
                                src={logo1}
                                alt="str logo"
                                className="img-fluid mb-3"
                                style={{ maxWidth: "80px" }}
                            />
                            <h2 className="midhat">Str Adventures</h2>
                            <p className="numariq">Sky | Terrene | Rapids</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4} className="d-flex align-items-center justify-content-center mb-4 mb-md-0">
                        <div className="text-start">
                            <h4 className="mb-3 baba">Useful Links</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#" className="footer-link" id="taqwa">Home</a>
                                </li>
                                <li>
                                    <Link to="/about" className="footer-link" id="taqwa">About Us</Link>                               
                                </li>
                                <li>
                                    <Link to="/SignIn" className="footer-link" id="taqwa"> Book Now </Link>
                                </li>
                                { !isAuth &&
                                <li>
                                    <Link to ="/SignUp" className="footer-link" id="taqwa">Register</Link>
                                </li>
                                }
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} md={4} className="d-flex align-items-center justify-content-center mb-4 mb-md-0">
                        <div className="text-center">
                            <h4 className="mb-3 baba">Contact Us</h4>
                            <p className="numariq" id="removemargin">Email: <a id="taqwa" href="mailto:stradventures@gmail.com">stradventures@gmail.com</a></p>
                            <p className="numariq" id="removemargin">Phone: <a id="taqwa"  href="tel:9596227447" >+91 9596227447</a></p>
                            <p className="numariq" id="removemargin">Address: Srinagar Jammu and Kashmir 190020</p>
                            <div className="social-icons mt-1">
                                <a href="https://www.instagram.com/str_adventures?igsh=OHo4M240eHhjNmEy" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="icon instagram-icon" />
                                </a>
                                <a href="https://www.facebook.com/str013?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="icon facebook-icon" />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col xs={12}>
                        <p className="tahir">Copyright &copy; Str Adventures 2024</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
export default Footer;
