import React from 'react';
import { Container, Grid } from '@mui/material';
import BookCard from "./Book.jsx";  
import content from '../CardsComponent/Content.js';  
import Nav from '../Nav/Nav.jsx';
import Footer from '../Footer/Footer.js';
const BookProp = () => {
  const slicedContent = content.slice(25, 32);  
  return (
    <div>
    <Nav />
    <div className='main_div'> 
    <h1 className="heading_card">AVAILABLE BOOKINGS</h1>
    <Container>
      <Grid container spacing={4}>
        {slicedContent.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <BookCard 
              url={item?.url}
              name={item.name} 
              image={item.image} 
              data={item.data} 
              price={item.price}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
     <hr style={{ 
      color: '#0f7c6c', 
      backgroundColor: '#0f7c6c', 
      height: '1px', 
      border: 'none', 
      margin: '16px 0',
      marginTop:'50px' 
     }} 
     />
    </div>
    <Footer />
    </div>
  );
};

export default BookProp;
