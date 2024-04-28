import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { links } from '../../cofigs';

const Home = () => {


  const ContactItem = ({ label, image, isTargetBlank, link }) => {
    return (
      <li>
        <a href={link} target={isTargetBlank ? '_blank' : '_self'}>
          <img src={process.env.PUBLIC_URL + image} alt={label} />
          {label}
        </a>
      </li>
    );
  };

  return (
    <>
      <Header />
      <main>
        <div class="home-container">
          <div class="row">
            <div class="column-1">
              <h1>I'm Sasikala Rangasamy</h1>
              <p>
                {/* I develop products with purpose and meticulous<br />
                attention to detail. Available for work. */}
                Self-taught frontend developer with a passion for crafting pixel-perfect web applications.
              </p>
            </div>
            <div class="column-2">
              <p>Links</p>
              <ul>
                {/* <a>
                  <li>Students</li>
                </a>
                <a>
                  <li>Products</li>
                </a>
                <a>
                  <li>E-commerce</li>
                </a>
                <a>
                  <li>Calculator</li>
                </a> */}
                {links.map((link, index) => (
                  <ContactItem key={index} {...link} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home