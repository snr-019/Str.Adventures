import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import {  useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
export default function BookCard({url, name, image, data,price }) {
  const navigate = useNavigate()
  const bookNowHandle = () => {
      navigate(url, { state: { booking_dest_name: name, basePrice: price } });
  };
  return (
    <Card sx={{
        maxWidth: 345, 
        border: '2px solid #f9ede7', 
        borderRadius: '8px', 
        '&:hover': {
          border: '2px solid #0f7c6c'
        }
       }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt={name}          
        />
        <CardContent sx={{ paddingBottom: 0 }}>
          <Typography gutterBottom variant="h5" component="div">
           <h5 className='subheading_card'> {name}</h5>
          </Typography>
          <Typography variant="body2" color="text.secondary">
           <p className='heading_d'> {data}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'center',padding:'0px' }}>
        <Button onClick={bookNowHandle} 
           sx={{ 
            marginBottom: '0px', 
            color: '#f9ede7', 
            fontWeight: '600', 
            border: '2px solid #f9ede7', 
            backgroundColor: '#0f7c6c',
             '&:hover': {
             backgroundColor: '#0d6a5b'
             }
           }}
         >
           Explore more...
        </Button>
        </CardActions>
      <CardActions sx={{ display: 'flex', justifyContent: 'center',fontWeight:'600',color:'#0f7c6c' }}>
        <p>Price:{price.toLocaleString()}</p>
        </CardActions>
    </Card>
  );
}

