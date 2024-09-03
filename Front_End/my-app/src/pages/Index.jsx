import Nav from "../components/Nav/Nav.jsx";
import Hero from "../components/hero/hero.jsx";
import DestinationProp from "../components/Destination/DestinationProp.jsx";
import Adventure from "../components/Activities/Adventure.jsx";
import Trek from "../components/Treks/trek.jsx";
import Footer from "../components/Footer/Footer.js";
import AboutUs from "../components/About/AboutUs.jsx";
import ContactForm from "../components/Contact-form/contact.jsx";
import Test from "../components/Campers/Campers.jsx";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import WhatsAppButton from "../components/Whatsapp Icon/whatsapp.js";




const Index = () => {
  return (
    <div>
      <Nav />
      <Hero /> 
      <DestinationProp />
      <Trek />
      <AboutUs />
      <Adventure />
      <Test />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default Index;
