import React from 'react';
import { Card, CardContent, Typography, Grid, Link, Avatar } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { blue, deepOrange } from '@mui/material/colors';
import './socials.css'; 

function SocialSource() {
  const socials = [
    { name: 'Facebook', followers: '6.4K', icon: <FacebookIcon sx={{ color: blue[500] }} />, link: 'https://www.instagram.com/str_adventures?igsh=OHo4M240eHhjNmEy' },
    { name: 'Instagram', followers: '3.5K', icon: <InstagramIcon sx={{ color: deepOrange[500] }} />, link: 'https://www.facebook.com/str013?mibextid=ZbWKwL' },
  ];

  return (
    <Card className="social-card">
      <CardContent style={{paddingBottom:'16px'}}>
        <Typography variant="h6" gutterBottom className="card-title">
          Social Source
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {socials.map(social => (
            <Grid item xs={6} sm={4} key={social.name} className="social-item" style={{paddingTop:'16px'}}>
              <Link href={social.link} target="_blank" rel="noopener noreferrer" className="social-link" style={{paddingTop:'0px'}}>
                <Avatar className="social-avatar">
                  {social.icon}
                </Avatar>
                <Typography variant="body2" className="social-name">
                  {social.name}
                </Typography>
                <Typography variant="body2" className="social-followers">
                  {social.followers} Followers
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default SocialSource;
