import React from "react";

const HeroSection = () => {
  return (
    <div className="container heroSection">
      <div className="contentBox">
        <h1>YOUR FEET</h1>
        <h1>DESERVE</h1>
        <h1>THE BEST</h1>

        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="heroBtnGroup">
          <button className="btn-primary">Shop Now</button>
          <button className="btn-secondary">Category</button>
        </div>

        <div className="contentBottom">
            <span>Also Available On</span>
            <div className="imgGroupBox">
                <img src="/img/flipkart.png" alt="flipkart.png" />
                <img src="/img/amazon.png" alt="amazon.png" />
            </div>
        </div>
      </div>

      <div className="heroImgBox">
        <img src="/img/hero-image.png" alt="hero-image.png" />
      </div>
    </div>
  );
};

export default HeroSection;
