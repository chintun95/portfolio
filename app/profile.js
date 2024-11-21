"use client";
import { poppins } from "./fonts/fonts";
import Image from "next/image";

export default function Profile(){
  return(
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
  );
}