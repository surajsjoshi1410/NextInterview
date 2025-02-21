import React from "react";
import { InterviewFavoriteCardWrapper } from "./InterviewFavoriteCard.styles";

const imgS = [
  "https://th.bing.com/th/id/OIP.hfNK8S7ywtaPVr8WGTV4-wHaE7?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.hfNK8S7ywtaPVr8WGTV4-wHaE7?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.hfNK8S7ywtaPVr8WGTV4-wHaE7?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.hfNK8S7ywtaPVr8WGTV4-wHaE7?rs=1&pid=ImgDetMain",
];

const InterviewFavoriteCard = ({ title, topics, imgSrc }) => {
  return (
    <InterviewFavoriteCardWrapper>
      <div className="card">
        <img className="card-image" src={imgSrc} alt="Topic Thumbnail" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-subtitle">
            <span className="topic">Topic </span>–{" "}
            <span className="info">{topics}</span>
          </p>
          <div className="card-footer">
            <button className="learn-btn">Learn</button>
            <div className="tags">
              {imgS.map((imgSrc, index) => {
                if (index < 3) {
                  return (
                    <img
                      className="card-companylogo"
                      src={imgSrc}
                      alt="Topic Thumbnail"
                    />
                  );
                }
              })}

              {imgS.length > 3 && (
                <span className="tag">+{imgS.length - 3}</span>
              )}

              <span className="tag-interview">In Interviews</span>
            </div>
          </div>
        </div>
      </div>
    </InterviewFavoriteCardWrapper>
  );
};

export default InterviewFavoriteCard;
