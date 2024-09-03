import React, {useEffect} from "react";
import Typed from "typed.js";
import videoFile from "./hero(vid.mp4";
import "./hero.css";
function Hero(){
    useEffect(() => {
        // Initialize Typed.js when the component mounts
        var typed = new Typed(".new-text", {
            strings: [ "Sky", "Terrene", "Rapids"],
            typeSpeed: 200,
            backSpeed: 200,
            loop: true
        });

        // Clean up Typed.js instance when the component unmounts
        return () => {
            typed.destroy();
        };
    }, []); // Empty dependency 
    return(
        <div className="hero">
         <video autoPlay loop muted className="hero-video">
        <source src={videoFile} type="video/mp4" />
          </video>
          <div className="hero-content">
             <h1 className="hero_1">Explore the Rythm of <span class="new-text"> </span> Adventures</h1>
          </div>
        </div>
    );
}
export default Hero;