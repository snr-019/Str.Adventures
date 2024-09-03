import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import "./Destination.css";
export default function DestinationCard({url, name, image, data })  {
  return (
    <div> 
    <Card sx={{ 
       maxWidth: 345, 
       borderRadius: 8,
       border: '2px solid transparent', // Initial border to maintain the layout
       transition: 'border-color 0.3s ease-in-out', // Smooth transition for hover effect
       '&:hover': {
         border: '2px solid #0f7c6c', // Border color on hover
       }
    }}>
    <Link to={url} style={{ textDecoration: 'none', color: 'inherit' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
          <h5 className='subheading_card'>  {name} </h5>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p className='heading_d'>{data}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
    </div>
  );
}

