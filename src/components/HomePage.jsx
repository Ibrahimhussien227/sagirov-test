import React from "react";
import { Link } from "react-router-dom";

import DetailCard from "./DetailCard";

const HomePage = () => {
  const data = [
    { heading: "мы", content: "1", footer: "на рынке" },
    { heading: "гарантируем", content: "50%", footer: "безопасность" },
    { heading: "календарик за", content: "2001г.", footer: "в подарок" },
    { heading: "путешествие", content: "597", footer: "дней" },
  ];

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>ПУТЕШЕСТВИЕ</h1>
        <h3>на красную планету</h3>{" "}
        <button type="button" className="home-button">
          <Link to="/">Начать путешествие</Link>
        </button>
        <i />
      </div>

      <div className="home-card-detail">
        {data.map(({ heading, content, footer }) => (
          <DetailCard heading={heading} content={content} footer={footer} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
