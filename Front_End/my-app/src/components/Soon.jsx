import Nav from "./Nav/Nav.jsx";
import Footer from "./Footer/Footer.js"; 
import img from './Soon.jpg';
function Soon(){
  return (
    <div>
      <Nav />   
      <div style={{border:'2px solid #dadce3',height:'420px',textAlign:'center', background: 'linear-gradient(to left,  #e8e9ec,#DADCE3)',boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.05)',backgroundImage:`url(${img})`, backgroundSize:'cover'}}>
        <h1 style={{fontSize:'80px',fontWeight:'500',color:'white',paddingTop:'180px',fontFamily:'cursive'}}>Data To Be Uploaded Soon...</h1>
      </div>
      <Footer />
    </div>
  )
}
export default Soon;



