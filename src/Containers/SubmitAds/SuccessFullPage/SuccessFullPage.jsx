import React from "react";
import { NavLink } from "react-router-dom";
import "./SuccessFullPage.css";
const Successfullpage = () => {
  return (
    <div className="successDiv">
      <div className="successAd">
        Your ad has been successfully added! View your ad on the
        <NavLink className="linkSuccess" to="/"> homepage</NavLink> , Add more
        <NavLink className="linkSuccess" to="/submitads"> ads</NavLink>
      </div>
    </div>
  );
};

export default Successfullpage;
