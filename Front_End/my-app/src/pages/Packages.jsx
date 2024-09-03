import { useEffect, useState, useRef } from "react";
import Nav from "../components/Nav/Nav.jsx";
import Footer from "../components/Footer/Footer.js"; 
import { useParams } from 'react-router-dom';
import PageContent from "../components/PageComponent/PageContent.js";
import "./Packages.css";
import videoFile from "./Book_Video.mp4";
import Booking_Tour from "./Book_Tour.jsx";

/*************************** Plan array **************/
function createPlan(planItem) { 
  return (
    <div key={planItem.title}>
      <h3 style={{color:'#0F7C6C',fontFamily:'inter, sans-serif',fontWeight:'600',fontSize:'1.5rem',borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',background: 'linear-gradient(to bottom, #e0e0e0, #f5f5f5)' }}>{planItem.title}</h3>
      <p style={{fontFamily:'inter, sans-serif',fontSize:'1rem',lineHeight:'1.5',borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>{planItem.description}</p>
    </div>
  );
}

const Packages = () => {
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
          
            <video autoPlay loop muted className="hero-video">
        <source src={videoFile} type="video/mp4" /> 
          </video>
          <div className="hero-content" style={{left:'5%',right:'5%'}}>
          <h1 className="hero_1" style={{color:'white',fontSize:'40px'}}>{currentPageContent.middleText}</h1>
          </div>
           </div>
           <div className="hang">
                <h1 style={{color:'#0F7C6C',fontFamily:'inter, sans-serif',fontWeight:'600',fontSize:'3rem',textAlign:'center',paddingBottom:'20px'}}>{ currentPageContent.title }</h1> 
                <p style={{fontFamily:'inter, sans-serif',fontSize:'1rem',lineHeight:'1.5',borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',paddingLeft: '40px'}}>{ currentPageContent.description }</p>
              <div className="WHOLE">
                 <div className="DIV">
                   {currentPageContent.plan.map(createPlan)}
                 </div> 
                 <div className="dont">
                   <Booking_Tour />    
                 </div>
               </div>
           </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Packages;

// import { useEffect, useState, useRef } from "react";
// import Nav from "../components/Nav/Nav.jsx";
// import Footer from "../components/Footer/Footer.js"; 
// import { useParams } from 'react-router-dom';
// import PageContent from "../components/PageComponent/PageContent.js";
// import "./Packages.css";
// import Typed from "typed.js";
// import videoFile from "./Book_Video.mp4" // Correct file path
// import Booking_Tour from "./Book_Tour.jsx";

// /*************************** Plan array **************/
// function createPlan(planItem) {
//   return (
//     <div key={planItem.title}>
//       <h3 style={{
//         color: '#0F7C6C',
//         fontFamily: 'inter, sans-serif',
//         fontWeight: '600',
//         fontSize: '1.5rem',
//         borderRadius: '8px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         background: 'linear-gradient(to bottom, #e0e0e0, #f5f5f5)'
//       }}>
//         {planItem.title}
//       </h3>
//       <p style={{
//         fontFamily: 'inter, sans-serif',
//         fontSize: '1rem',
//         lineHeight: '1.5',
//         borderRadius: '8px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
//       }}>
//         {planItem.description}
//       </p>
//     </div>
//   );
// }

// const Packages = () => {
//   const mainSection = useRef();
//   const { url } = useParams();
//   const [currentPageContent, setCurrentPageContent] = useState(undefined);

//   useEffect(() => {
//     const data = PageContent.find(f => f.url === url);
//     setCurrentPageContent(data);
//     mainSection.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
//     mainSection.current?.scrollTo(0, 0);

//     // Initialize Typed.js
//     const typedElement = document.querySelector(".new-text");
//     if (typedElement) {
//       const typed = new Typed(typedElement, {
//         strings: [" Exploring"],
//         typeSpeed: 200,
//         backSpeed: 200,
//         loop: true,
//       });

//       // Clean up Typed.js instance when the component unmounts
//       return () => {
//         typed.destroy();
//       };
//     }
//   }, [url]);

//   if (!currentPageContent) return <h1>Page not found</h1>;

//   return (
//     <div ref={mainSection}>
//       <Nav />
//       <div className="first_div">
//         <div className="second_div">
//           <div className="ang">
//             <video autoPlay loop muted className="hero-video">
//               <source src={videoFile} type="video/mp4" />
//             </video>
//             <div className="hero-content">
//               <h1 className="hero_1">
//                   Kashmir Mystique:<span className="new-text"></span> Heaven
//               </h1>
//             </div>
//           </div>
//           <div className="hang">
//             <h1 style={{
//               color: '#0F7C6C',
//               fontFamily: 'inter, sans-serif',
//               fontWeight: '600',
//               fontSize: '3rem',
//               textAlign: 'center',
//               paddingBottom: '20px'
//             }}>
//               {currentPageContent.title}
//             </h1>
//             <p style={{
//               fontFamily: 'inter, sans-serif',
//               fontSize: '1rem',
//               lineHeight: '1.5',
//               borderRadius: '8px',
//               boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//               paddingLeft: '40px'
//             }}>
//               {currentPageContent.description}
//             </p>
//             <div className="WHOLE">
//               <div className="DIV">
//                 {currentPageContent.plan.map(createPlan)}
//               </div>
//               <div className="dont">
//                 <Booking_Tour />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Packages;

