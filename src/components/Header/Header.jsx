import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>The Book Searching App is a revolutionary tool that aims to simplify the process of finding and exploring books. In today's digital age, where information is readily available at our fingertips, it can be overwhelming to navigate through the vast sea of literature. This app seeks to alleviate that burden by providing users with a seamless and intuitive platform to search for books based on their preferences.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header