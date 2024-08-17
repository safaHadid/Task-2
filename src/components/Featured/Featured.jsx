import React from "react";
import "./Featured.css";
import featuredImg from "../assets/featured.jpg"; // Replace with your actual path
import featuredIcon from "../assets/featured-icon.png";
import infoicon01 from "../assets/info-icon-01.png";
import infoicon02 from "../assets/info-icon-02.png";
import infoicon03 from "../assets/info-icon-03.png";
import infoicon04 from "../assets/info-icon-04.png";

const Featured = () => {
  return (
    <div className="featured-container">
      <div className="featured-left">
        <div className="featured-img-wrapper">
          <img src={featuredImg} alt="Featured" className="featured-img" />
          <img src={featuredIcon} alt="Icon" className="featured-icon" />
        </div>
      </div>

      <div className="featured-center">
        <p className="featured-tag">| FEATURED</p>
        <h1 className="featured-title">
          Best <br /> Appartment & <br /> Sea View
        </h1>
        <div className="useful-links">
          <h3 className="useful-title">Best useful links ?</h3>
          <hr />
          <p className="useful-description">
            Get <span>the best villa</span> website template in HTML CSS and
            Bootstrap for your business. TemplateMo provides you the{" "}
            <a href="#">best free CSS templates</a> in the world. Please tell
            your friends about it.
          </p>
          <ul className="useful-list">
            <li>How does this work ?</li>
            <hr />
            <li>Why is Villa Agency the best ?</li>
          </ul>
        </div>
      </div>

      <div className="featured-right">
        <FeatureItem
          icon={infoicon01}
          title="250 m2"
          description="Total Flat Space"
        />
        <hr />
        <FeatureItem
          icon={infoicon02}
          title="Contract"
          description="Contract Ready"
        />
        <hr />
        <FeatureItem
          icon={infoicon03}
          title="Payment"
          description="Payment Process"
        />
        <hr />
        <FeatureItem
          icon={infoicon04}
          title="Safety"
          description="24/7 Under Control"
        />
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt={title} className="feature-icon" />
      <div className="feature-info">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </div>
    </div>
  );
};

export default Featured;
