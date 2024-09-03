

import React, { useEffect } from "react";
import Content from "../CardsComponent/Content";
import { Carousel } from '@mantine/carousel';
import { Card, Image, Text, useMantineTheme } from '@mantine/core';
import '@mantine/carousel/styles.css';
import { Link } from "react-router-dom";
import { WOW } from 'wowjs';
import 'animate.css';
import "./Adventure.css";

function Adventure() {
  const theme = useMantineTheme();

  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <div>
      <div className="ad_div">
        {/*     css in destination.css */}
        <h1 className="heading_card">ADVENTURE ACTIVITIES</h1>
        <div id="ad_inner_div">
          <Carousel
            className="mantine-Carousel-root"
            loop
            slideSize="24%"
            slideGap="md"
            align="center"
            slidesToScroll={2}
            breakpoints={[
              { maxWidth: 'md', slideSize: '50%' },
              { maxWidth: 'sm', slideSize: '100%' },
            ]}
          >
            {Content.slice(4, 11).map((item) => (
              <Carousel.Slide key={item.id}>
                <Link to={item.url || '#'} style={{ textDecoration: 'none' }}>
                  <Card shadow="sm" padding="lg" id="card_d" className="wow fadeInUp">
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

export default Adventure;
