import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { links } from '../../cofigs';

const Contact = () => {

  const ContactItem = ({ label, image, isTargetBlank, link }) => {
    return (
      <a href={link} target={isTargetBlank ? '_blank' : '_self'}>
        <div className='contact-item'>
          <div className='icon'>
            <img src={process.env.PUBLIC_URL + image} alt={label} />
          </div>
          {label}
        </div>
      </a>
    );
  };

  return (
    <>
      <Header />
      <main className='contact-container'>
        <h1>
          Contact Me
        </h1>
        <p>Get in touch and let me know how can i help.</p>
        <section className='contact-section'>
          {links.map((link, index) => (
            <ContactItem key={index} {...link} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Contact
