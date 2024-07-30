import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>The Book Searching App using ReactJS is to simplify the process of finding and exploring books by providing users with a seamless and intuitive platform. The app aims to alleviate the burden of navigating through a vast sea of literature by offering comprehensive search functionality, detailed book information. The ultimate goal is to enhance the overall user experience and cater to the needs of book enthusiasts worldwide.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About