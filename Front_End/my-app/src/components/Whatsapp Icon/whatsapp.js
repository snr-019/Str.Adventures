import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './whatsapp.css'; 

const WhatsAppButton = ({ phoneNumber = process.env.REACT_APP_NUMBER, message = "Hello I would like to inquire about your services." }) => {
  const formattedMessage = encodeURIComponent(message);

  //  console.log(`WhatsApp URL: https://api.whatsapp.com/send?phone=${phoneNumber}&text=${formattedMessage}`);

  return (
    <a
      href={`https://wa.me/send?phone=${phoneNumber}&text=${formattedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <WhatsAppIcon className="whatsapp-icon" style={{ fontSize: 50, color: 'green',background:'#dadce3',borderRadius:'30px' }} />
    </a>
  );
};

export default WhatsAppButton;
