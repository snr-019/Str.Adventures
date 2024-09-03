import React, {useEffect} from "react";
import "./Content.js";
import "./Card.css";
import { Link } from "react-router-dom";
import { WOW } from 'wowjs';
import 'animate.css';
import { useMantineTheme } from '@mantine/core';
// Called every time when each card is created
function Card(props){
    const theme = useMantineTheme();
    useEffect(() => {
      new WOW().init();
    }, []);
    return(
        <div>
          <Link to={props.url}>
              <div id="card_div"className="wow fadeInUp">
                 <h1 className="card_text">{props.name}</h1>
                 <img id="pic" src={props.img}/> 
              </div>
          </Link>
        </div>
    );
}
export default Card;
