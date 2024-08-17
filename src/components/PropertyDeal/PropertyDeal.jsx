import React from 'react';
import './PropertyDeal.css';
import deal01 from '../assets/deal-01.jpg'

const PropertyDeal = () => {
  return (
    <div className="property-deal">
        <div className="property-deal-container">
        <p className="deal-badge">| Best Deal</p>
      <div className="deal-header">
        <div className="deal-title">
            <h1>Find Your Best <br /> Deal Right Now!</h1>
        </div>
        <div className="property-types">
          <button className="property-type active">Apartment</button>
          <button className="property-type">Villa House</button>
          <button className="property-type">Penthouse</button>
        </div>
      </div>
      <div className="deal-content">
        <div className="property-details">
          <div className="detail-item">
            <span>Total Flat Space</span>
            <span style={{fontWeight:700 , fontSize:'1.3rem' , color:'black' , marginTop:'-5px'}}>185 m2</span>
          </div>
          <hr />
          <div className="detail-item">
            <span>Floor number</span>
            <span style={{fontWeight:700 , fontSize:'1.3rem' , color:'black' , marginTop:'-5px'}}>26th</span>
          </div>
          <hr />
          <div className="detail-item">
            <span>Number of rooms</span>
            <span style={{fontWeight:700 , fontSize:'1.3rem' , color:'black' , marginTop:'-5px'}}>4</span>
          </div>
          <hr />
          <div className="detail-item">
            <span>Parking Available</span>
            <span style={{fontWeight:700 , fontSize:'1.3rem' , color:'black' , marginTop:'-5px'}}>Yes</span>
          </div>
          <hr />
          <div className="detail-item">
            <span>Payment Process</span>
            <span style={{fontWeight:700 , fontSize:'1.3rem' , color:'black' , marginTop:'-5px'}}>Bank</span>
          </div>
        </div>

        <div className="property-image">
          <img src={deal01} alt="Property" />
        </div>

        <div className="extra-info">
          <h3>Extra Info About Property</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quis ed ipsum suspendisse.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quis ed ipsum suspendisse.
          </p>
          <span className="property-button">
            <span className="button-icon">
              <i className="fas fa-calendar-alt"></i> {/* You can replace this with your icon */}
            </span>
            Schedule a visit
          </span>
        </div>
      </div>
        </div>
    </div>
  );
};

export default PropertyDeal;
