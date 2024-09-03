import React from 'react';
import { Container, Grid } from '@mui/material';
import DestinationCard from "./Destinations.jsx";  
import Content from '../CardsComponent/Content.js';  
const DestinationProp = () => {
  
  const slicedContent = Content.slice(0, 4);  

  return (
    <div className='main_div'>
    <h1 className='heading_card'>TOP DESTINATIONS</h1> 
    <div className='inner_div'> 
    <Container>
      <Grid container spacing={4}>
        {slicedContent.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={3}>
            <DestinationCard 
              url={item?.url}
              name={item.name} 
              image={item.image} 
              data={item.data} 
            />
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
    </div>
  );
}
export default DestinationProp;








