"use client"; // Ensures this file is treated as a client component

import "/src/app/static-pages/main/styles/Faq.css";
import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="Faq" id="faq">
      <div className="faq-whole-container">
        <div className="faq-title">Frequently Asked Questions</div>
        <div className="actual-faq-container">
          <button
            className={`accordion ${activeIndex === 0 ? "active" : ""}`}
            onClick={() => handleAccordionClick(0)}
          >
            Section 1
          </button>
          <div
            className="panel"
            style={{ display: activeIndex === 0 ? "block" : "none" }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <button
            className={`accordion ${activeIndex === 1 ? "active" : ""}`}
            onClick={() => handleAccordionClick(1)}
          >
            Section 2
          </button>
          <div
            className="panel"
            style={{ display: activeIndex === 1 ? "block" : "none" }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default Faq;
