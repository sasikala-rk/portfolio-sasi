import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Carousel from '../../components/carousel'

const Projects = () => {

  const images = [
    '/image/project/1.png',
    '/image/project/2.png',
    '/image/project/3.png',
    '/image/project/4.png',
    // '/image/project/6.png',
    // '/image/project/7.png',
  ];

  const project2Images = [
    '/image/project/5.png',
  ]

  return (
    <>
      <Header />
      <main className='project-container'>
        <h1><a href='https://e-commerce-sasikala.netlify.app/' target='_blank'>E-Commerce</a></h1>
        <Carousel images={images} />
        <h1>Mountain</h1>
        <Carousel images={project2Images} />
      </main>
      <Footer />
    </>
  )
}

export default Projects