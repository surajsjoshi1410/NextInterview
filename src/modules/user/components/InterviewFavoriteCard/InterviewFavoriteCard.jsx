import React from "react";
import { InterviewFavoriteCardWrapper } from "./InterviewFavoriteCard.styles";

import amazon from "../../../../assets/Avatar.svg";
import flipkart from "../../../../assets/PersonPhoto.svg";
import google from "../../../../assets/image.svg";
 
  const iconList = [
    { src: amazon, alt: "" },
    { src: flipkart, alt: "" },
    { src: google, alt: "" },
  ];

const InterviewFavoriteCard = ({ title, topics, imgSrc }) => {
  return (
    <InterviewFavoriteCardWrapper>
      <div className="card">
        <div className="card-overlay">
        <img className="card-image" src={imgSrc} alt="Topic Thumbnail" />
        </div>
        <div className="overlay">
          <span className="overlay-text">Machine Learning</span>
        </div>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-subtitle">
            <span className="topic">Topic </span>–{" "}
            <span className="info">{topics}</span>
          </p>
          <div className="card-footer">
            <button className="learn-btn">Learn</button>
            <div className="tags">
              <div className="icons-container">
              {iconList.map((icon, index) => (
              <img
                key={index}
                src={icon.src}
                alt={icon.alt}
                style={{ right: `${index * 10}px` }} // Adjust overlap dynamically
                className="icon"
              />
            ))}
              <span>In Interviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InterviewFavoriteCardWrapper>
  );
};

export default InterviewFavoriteCard;
