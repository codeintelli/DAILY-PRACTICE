import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgSrc} className="card-img-top" alt="card" />
          <div className="card-body">
            <h5 className="card-title">{props.card_title}</h5>
            <p className="card-text">{props.card_subtext}</p>
            <NavLink to={props.btnLink} className="btn btn-primary">
              {props.btnTitle}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
