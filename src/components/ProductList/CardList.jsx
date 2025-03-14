import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { CardListItem } from "./CardListItem";
import cardInfo from "./CardInfo";
import { Container } from "react-bootstrap";

const CardList = () => {
  return (
    <div className="container">
      <div className="row">
        <ul style={{ listStyleType: "none" }}>
          {cardInfo.map((cardInfo, i) => {
            return (
              <div
                className="col-md-4 col-sm-6 col-xs-12 my-4 d-inline-flex"
                key={i}
              >
                <CardListItem cardInfo={cardInfo} key={cardInfo.id} />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CardList;
