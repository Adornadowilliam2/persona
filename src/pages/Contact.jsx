import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import contactus from '../assets/contactus.png';
import { ContactMail } from '@mui/icons-material'; // Import Material UI icon

export default function Contact() {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <div>
      <Navbar setShowDetails={setShowDetails} showDetails={showDetails} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px',
          backgroundColor: '#111111',
          color: 'white',
        }}
      >
        <span id='contact-span'>
          <h1>Get in Touch</h1>
          <p>If you have any questions or feedback, please don't hesitate to contact us.</p>
        </span>
        <img src={contactus} alt="Contact Us" />
      </div>
      <div>
        <div
          className="contact-us-card"
          style={{
            padding: '5px',
            backgroundColor: '#f1f1f1',
     
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            flexDirection: 'column',
          
          }}
        >
          <ContactMail style={{ fontSize: '40px', marginRight: '10px' }} />
          <h1>Contact Information</h1>   <p>
            <strong>Phone:</strong> +81 90 1234 5678 
          </p>
          <p style={{marginBottom: '10px'}}>
            <strong>Email:</strong> support@persona.jp
          </p>

         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3240.0770297793506!2d139.771111!3d35.699722!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sph!4v1742689539884!5m2!1sen!2sph" id='map'  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        
        </div>

      </div>
    </div>
  );
}
