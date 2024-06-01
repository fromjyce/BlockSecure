import React from "react";
import "/src/app/static-pages/main/styles/Info.css";
import Image from "next/image";

const Info = () => {
    return (
      <div className="Info" id="info">
        <div className="info-container">
          <div className="main-information-container">
            <h1 className="main-about-title">About BlockSecure</h1>
            <div className="about-information-container">
              <div className="about-bc">
                <p className="about-bc-paragraph">
                  <b>BlockSecure</b> emerges as a cutting-edge solution
                  revolutionizing the landscape of secure voting systems,
                  drawing inspiration from the meticulous stages outlined in the
                  electoral process. Mirroring the approach of Metamask wallet
                  creation, poll initialization, and token distribution,
                  BlockSecure ensures the establishment of a robust foundation
                  for democratic participation. With a steadfast commitment to
                  security, BlockSecure employs advanced encryption techniques
                  such as <b>homomorphic encryption</b> and <b>EL-GAMMAL</b>,
                  fostering trust and integrity in every vote cast. By
                  prioritizing real-time monitoring and decryption, BlockSecure
                  sets a new standard for transparent electoral systems,
                  safeguarding against manipulation and fraud. BlockSecure
                  enhances electoral systems by using a blockchain-like secure
                  voting mechanism to prevent manipulation and ensure election
                  integrity. It balances voter anonymity with verification,
                  protects against fraud like double voting, and upholds the
                  voting process's integrity through robust protocols. With its
                  unwavering focus on security and transparency, BlockSecure
                  stands at the forefront of ensuring fair and accountable
                  elections.
                </p>
              </div>
              <div className="about-image">
                <Image
                  src="/mainlogo.png"
                  width={335}
                  height={400}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Info