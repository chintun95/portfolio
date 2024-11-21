'use client';
import { useState } from "react";
import './globals.css'
import Image from "next/image";
import { poppins } from "./fonts/fonts";

export default function NavBar(){
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  }

  return (
    <body className={poppins.className}>
      <nav id ="deskstop-nav" >
        <div className="logo">Chin Lun Wong</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Chin Lun Wong</div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>
      <section id='profile'>
        <div className="section__pic-container">
          <Image src="/images/UNT-student-ID-photo.jpg" alt="Chin Lun Wong profile picture"
          width={300} height={300}/>
        </div>
        <div className="section__text">
          <p className="section__text_p1">Hello, I'm</p>
          <h1 className="title">Chin Lun Wong</h1>
          <p className="section__text_p2">Frontend Developer</p>
          <div className="btn-container">
            <button className="btn btn-color-2"
             onClick={() => window.open("/Latest-Resume.pdf")}
              >Download CV</button>
            <button className="btn btn-color-1"
             onClick={() => location.href="./#contact"}
              >Contact Info</button>
          </div>
          <div id="socials-container">
            <img src="/images/linkedin.png" alt="My linkedin profile" className="icon"
            onClick={() => location.href="https://www.linkedin.com/in/chin-lun-wong-b57a591b2/" }/>
            <img src="/images/Github.png" alt="My Github profile" className="icon"
            onClick={() => location.href="https://github.com/chintun95" }/>
          </div>
        </div>
      </section>  
      <section id= "about">
        <p className="section__text_p1">Get to know more</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <Image src="/images/UNT-student-ID-photo.jpg" width={300} height={300} alt="Chin Lun Wong profile picture"/>
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <Image src="/images/experience.png" alt="Experience icon"
                width={50} height={50}/>
                <h3>Experience</h3>
                <p2>2+ years <br/> Frontend Development</p2>
              </div>
              <div className="details-container">
                <Image src="/images/experience.png" alt="Experience icon"
                width={50} height={50}/>
                <h3>Education</h3>
                <p2>Bachelor of Science in <br/> Computer Science</p2>
              </div>
            </div>
            <div className="">

            </div>
          </div>
        </div>
      </section>
    </body>
  )
}

