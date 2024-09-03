import React from "react";
import Card from "../CardsComponent/Card";
import Content from "../CardsComponent/Content";
import "./Destination.css";
function KashmirCards(){
    const selectCards= Content.slice(21,25);
    function createCard(cont){
        return <Card
        url={cont?.url}
        key={cont.id}
        img={cont.image}
        name={cont.name}>
        </Card>    
          
    } 
    return(
        <div style={{backgroundColor:'#DADCE3'}}>
            <div className="main_div">
            <h1 style={{color:'#0F7C6C',fontFamily:'cursive',fontWeight:'600',fontSize:'3rem',textAlign:'center',paddingBottom:'20px'}}> TOP PICKS</h1>
                <div className="inner_div">
                   {selectCards.map(createCard)}
               </div>
            </div>
            <hr style={{ 
            color: '#0f7c6c', 
            backgroundColor: '#0f7c6c', 
            height: '1.5px', 
            border: 'none',
            margin:'0px auto',
            width:'80%',
            }}  
            />
        </div>
    );
}
export default KashmirCards;
