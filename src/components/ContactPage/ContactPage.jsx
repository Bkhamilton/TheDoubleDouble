import * as React from 'react';
import ContactNode from './ContactNode/ContactNode';

export default function ContactPage() {
  return (
    <div>
        <div className='main-padding'>
          <h1>Contact Us</h1>
        </div>
        <div className='blog-list-container'>
          <ContactNode/>
        </div>
    </div>
  );
};
