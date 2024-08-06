import React, { useRef } from 'react';
import './contact.css';
import walmart from '../../assets/walmart.png';
import adobe from '../../assets/adobe.png';
import microsoft from '../../assets/microsoft.png';
import facebook from '../../assets/facebook.png';
import facebookIcon from '../../assets/facebook-icon.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_4dq80pd', 'template_1vzy5gp', form.current,  'Np061lgObWOYHetmW4mmx')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email send !');
            },(error) => {
              console.log(error.text);
            });
      };

  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                I have had the opportunity to work with a diverse group of companies,
                Some of the notable companies I have worked with includes
            </p>
            <div className='clientImgs'>
                <img src={walmart} alt='Client' className='clientImg' />
                <img src={adobe} alt='Client' className='clientImg' />
                <img src={microsoft} alt='Client' className='clientImg' />
                <img src={facebook} alt='Client' className='clientImg' />
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name' />
                <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value="Send" className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={facebookIcon} alt='facebookIcon' className='link' />
                    <img src={twitter} alt='twitter' className='link' />
                    <img src={youtube} alt='youtube' className='link' />
                    <img src={instagram} alt='Instagram' className='link' />
                </div>
            </form>
        </div>
    </section>
  );
}

export default Contact;
