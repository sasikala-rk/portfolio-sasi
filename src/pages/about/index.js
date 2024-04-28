import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'

const About = () => {
  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center", fontSize:"30px",marginTop:"3rem" }}>✒️  About Me..</h1>
      <main className='about-container'>
        <ul>
          <li>Myself Sasikala Rangasamy.</li>
          <li>I'm Software Engineer / Frontend Developer.</li>
          <li>I've learned frontend development by myself using pure documentation.</li>
          <li>I can develop, UX design into pixel perfect web application.</li>
          <li>Interested in problem solving and managing the project.</li>
          <li>Self enthusiastic mindset to learn/adopt for new technologies</li>
        </ul>
      </main>
      <Footer />
    </>
  )
}

export default About