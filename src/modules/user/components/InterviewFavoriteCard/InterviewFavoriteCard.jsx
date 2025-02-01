import React from 'react';
import { InterviewFavoriteCardWrapper } from './InterviewFavoriteCard.styles';

const imgSrc = ["https://th.bing.com/th/id/OIP.hfNK8S7ywtaPVr8WGTV4-wHaE7?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/OIP.hfNK8S7ywtaPVr8WGTV4-wHaE7?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/OIP.hfNK8S7ywtaPVr8WGTV4-wHaE7?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/OIP.hfNK8S7ywtaPVr8WGTV4-wHaE7?rs=1&pid=ImgDetMain"]
const InterviewFavoriteCard = () => {
    return (
        <InterviewFavoriteCardWrapper>
            <div className="card">
                <img
                    className="card-image"
                    src="https://th.bing.com/th/id/OIP.hfNK8S7ywtaPVr8WGTV4-wHaE7?rs=1&pid=ImgDetMain"
                    alt="Topic Thumbnail"
                />
                <div className="card-content">
                    <h3 className="card-title">Diagnosing and Investigating Metrics</h3>
                    <p className="card-subtitle"><span className="topic">Topic </span>– <span className="info">Diagnosing and Investigating Metrics</span></p>
                    <div className="card-footer">
                        <button className="learn-btn">Learn</button>
                        <div className="tags">
                            {imgSrc.map((imgSrc, index) => {
                                if (index < 3) {
                                    return (
                                        <img className="card-companylogo"
                                            src={imgSrc}
                                            alt="Topic Thumbnail"
                                        />
                                    )
                                }

                            })}

                            {
                                imgSrc.length > 3 && (
                                    <span className="tag">+{imgSrc.length - 3}</span>
                                )
                            }

                            <span className="tag-interview">In Interviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </InterviewFavoriteCardWrapper>
    );
};

export default InterviewFavoriteCard;
