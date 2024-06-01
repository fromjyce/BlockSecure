import React from 'react'
import "/src/app/static-pages/main/styles/About.css";
import Image from "next/image";

const About = () => {
  return (
    <div className="About" id="about">
      <div className="about-whole-container">
        <div className="whole-logo-container">
          &emsp; <br />
          &ensp; <br />
          &ensp; <br />
          <Image
            src="/mainlogo.png"
            width={435}
            height={500}
            alt="Picture of the author"
          />
          <h1 className="middle-title">BlockSecure</h1>
          &ensp; <br />
          <h2 className="middle-tagline">Secure Your Vote Now!</h2>
          &emsp; <br />
          <br/>
        </div>
      </div>
    </div>
  );
}

export default About