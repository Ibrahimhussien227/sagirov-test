import React from "react";

const DetailCard = ({ heading, content, footer }) => {
  return (
    <div className="detail-card-container">
      <div className="detail-card-content">
        <h4>{heading}</h4>
        <h1>{content}</h1>
      </div>
      <h2>{footer}</h2>
    </div>
  );
};

export default DetailCard;
