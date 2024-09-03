import { useEffect, useState, useRef } from "react";
import Nav from "../components/Nav/Nav.jsx";
import Footer from "../components/Footer/Footer.js"; 
import { useParams } from 'react-router-dom';
import PageContent from "../components/PageComponent/PageContent.js";
import KashmirCards from "../components/Destination/Kashmir_Cards.jsx";
import "./Destiny.css";
import videoFile from "./Destination.mp4";
// import Typed from "typed.js";
/*************************** Plan array **************/
function createPlan(planItem) {
  return (
    <div key={planItem.title} style={{padding:'0px 40px'}}>
      <h3 style={{color:'#0F7C6C',fontFamily:'inter, sans-serif',fontWeight:'600',fontSize:'1.5rem',borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',background: 'linear-gradient(to bottom, #e0e0e0, #f5f5f5)' }}>{planItem.title}</h3>
      <p style={{fontFamily:'inter, sans-serif',fontSize:'1rem',lineHeight:'1.5',borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>{planItem.description}</p>
    </div>
  );
}

const Destination = () => {
  const mainSection = useRef()
  const { url } = useParams();
  const [ currentPageContent, setCurrentPageContent ] = useState(undefined)

  useEffect( () => {
    const data = PageContent.find( f => f.url == url)
    setCurrentPageContent(data)
    mainSection.current?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    mainSection.current?.scrollTo(0,0)
  }, [ url ])

  if (!currentPageContent) return <h1>Page not found</h1>

  return currentPageContent && (
    <div ref={mainSection}>
      <Nav />
      <div className="first_div">
        <div className="second_div">
        <div className="ang">
            {/* <img src={currentPageContent.heroImg} alt={currentPageContent.title} className="ang_try" /> */}
            <video autoPlay loop muted className="hero-video">
        <source src={videoFile} type="video/mp4" /> 
          </video>
            <div className="hero-content">
            <h1 className="hero_1"  style={{color:'white'}}>{currentPageContent.middleText}</h1>
          </div>
           </div>
           <h1 style={{color:'#0F7C6C',fontFamily:'cursive',fontWeight:'700',fontSize:'3rem',textAlign:'center',paddingBottom:'20px',paddingTop:'90px'}}>{ currentPageContent.title }</h1> 
           <p style={{fontFamily:'inter, sans-serif',fontSize:'1rem',lineHeight:'1.5',borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',paddingLeft: '40px',paddingRight:'40px'}}>{ currentPageContent.description }</p> 
           {currentPageContent.plan.map(createPlan)}
        </div>
      </div>
     {currentPageContent?.showCard && <KashmirCards />}
      <Footer />
    </div>
  )
}

export default Destination;



// import { useEffect, useState, useRef } from "react";
// import Nav from "../components/Nav/Nav.jsx";
// import Footer from "../components/Footer/Footer.js"; 
// import { useParams } from 'react-router-dom';
// import PageContent from "../components/PageComponent/PageContent.js";
// import KashmirCards from "../components/Destination/Kashmir_Cards.jsx";
// import "./Destiny.css";
// import Typed from "typed.js";

// function createPlan(planItem) {
//   return (
//     <div key={planItem.title} style={{padding:'0px 40px'}}>
//       <h3 style={{color:'#0F7C6C',fontFamily:'inter, sans-serif',fontWeight:'600',fontSize:'1.5rem',borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',background: 'linear-gradient(to bottom, #e0e0e0, #f5f5f5)' }}>{planItem.title}</h3>
//       <p style={{fontFamily:'inter, sans-serif',fontSize:'1rem',lineHeight:'1.5',borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>{planItem.description}</p>
//     </div>
//   );
// }

// const Destination = () => {
//   const mainSection = useRef();
//   const textElementRef = useRef(null);  // Use a ref for the .new-text element
//   const { url } = useParams();
//   const [ currentPageContent, setCurrentPageContent ] = useState(undefined);

//   useEffect(() => {
//     const data = PageContent.find(f => f.url === url);
//     setCurrentPageContent(data);
//     mainSection.current?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
//     mainSection.current?.scrollTo(0,0);

//     // Initialize Typed.js only if the ref is defined
//     if (textElementRef.current) {
//       const typed = new Typed(textElementRef.current, {
//         strings: ['Gurez'],
//         typeSpeed: 200,
//         backSpeed: 200,
//         loop: true
//       });

//       // Clean up Typed.js instance when the component unmounts
//       return () => {
//         typed.destroy();
//       };
//     }
//   }, [url]);

//   if (!currentPageContent) return <h1>Page not found</h1>;

//   return currentPageContent && (
//     <div ref={mainSection}>
//       <Nav />
//       <div className="first_div">
//         <div className="second_div">
//           <div className="ang">
//             <img src={currentPageContent.heroImg} alt={currentPageContent.title} className="ang_try" />
//             <div className="hero-content">
//               <h1 className="hero_1">{}Explore the Rhythm of <span ref={textElementRef} className="new-text"></span>  Valley</h1>
//             </div>
//           </div>
//           <h1 style={{color:'#0F7C6C',fontFamily:'cursive',fontWeight:'700',fontSize:'3rem',textAlign:'center',paddingBottom:'20px',paddingTop:'90px'}}>{currentPageContent.title}</h1> 
//           <p style={{fontFamily:'inter, sans-serif',fontSize:'1rem',lineHeight:'1.5',borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',paddingLeft: '40px',paddingRight:'40px'}}>{currentPageContent.description}</p> 
//           {currentPageContent.plan.map(createPlan)}
//         </div>
//       </div>
//       {currentPageContent?.showCard && <KashmirCards />}
//       <Footer />
//     </div>
//   );
// }

// export default Destination;
