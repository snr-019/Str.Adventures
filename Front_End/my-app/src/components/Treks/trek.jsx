import React, {useRef} from "react";
import Content from "../CardsComponent/Content";
import { Carousel } from '@mantine/carousel';
import { Card, Image, Text, useMantineTheme } from '@mantine/core';
// import '@mantine/carousel/styles.css';
import "../Activities/Adventure.css";
import { rem } from '@mantine/core';
import { WOW } from 'wowjs';
import 'animate.css';
import { Link } from "react-router-dom";
function Trek(){
    const theme = useMantineTheme();
    const carouselStyles = {
      control: {
        backgroundColor: theme.colors.green[6],
        color: theme.white,
        '&:hover': {
          backgroundColor: theme.colors.blue[7],
        },
      }
      // controlNext: {
      //   right: rem(10),
      //    // Positioning for the next arrow
      // },
      // controlPrev: {
      //   left: rem(10), // Positioning for the previous arrow
      // },
    };
    return (
       <div>
          <div className="ad_div">
            <h1 className="heading_card">BROWSE OUR TREKS</h1>
         <div id="ad_inner_div">
          {/********************** Carousel without buttons ***********************/ }
         <Carousel  className="mantine-Carousel-root"
          loop
           slideSize="24%"
           slideGap= 'xs'
           align="start"
           slidesToScroll={2}
           controlSize={0} 
          //  styles={carouselStyles}
           breakpoints={[
           { maxWidth: 'md', slideSize: '50%' },
           { maxWidth: 'sm', slideSize: '100%' },
         ]}
       >
      {Content.slice(11, 21).map((item) => (
           <Carousel.Slide key={item.id}>
             <Link to={item.url || '#'} style={{ textDecoration: 'none' }}>
              <Card shadow="sm"  id="card_d" className="wow fadeInUp">
               <Card.Section>
                 <Image className="pict" src={item.image} alt={item.name} height={300} />
               </Card.Section>
               <Text className="card_txt" weight={500} style={{ marginTop: theme.spacing.sm }}>
                 {item.name}
               </Text>
               <div className="card-hover-content">
                      <Text> {item.name}.</Text>
                    </div>
             </Card>
             </Link>
           </Carousel.Slide>
         ))}
        </Carousel>
       </div>
       </div>
     </div>
   );
 }           
export default Trek;