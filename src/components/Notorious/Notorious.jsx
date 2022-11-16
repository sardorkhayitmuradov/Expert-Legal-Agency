import React from "react";
import "./Notorious.css";
import { useNavigate } from "react-router-dom";

const Notorious = ({ label, image, desc, buttonName }) => {
  const navigate = useNavigate();
  return (
    <div className="search_card_1_left">
      <div className="search_card_1_img">
        <img src={image} alt="Error" />
        <h3>{label}</h3>
      </div>
      <div className="search_card_1_left_desc">
        <p>{desc}</p>
      </div>
      <div className="search_card_1_left_btn">
        <button onClick={() => navigate("/form1")}>{buttonName}</button>
      </div>
    </div>
  );
};

export default Notorious;
