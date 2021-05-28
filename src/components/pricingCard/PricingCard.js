import React from "react";
import "./PricingCard.scss";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function PricingCard({cardInfo, isDark}) {
  return (
    <div className={isDark ? "dark-mode pricing-card" : "pricing-card"}>
      <div className="pricing-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <hr></hr>
        <p className={isDark ? "dark-mode card-price" : "card-price"}>
          $ {cardInfo.price}
        </p>
        <div className={isDark ? "dark-mode card-features" : "card-features"}>
          {cardInfo.features.map((feature, i) => {
            return (
              <p className={isDark ? "dark-mode card-feature" : "card-feature"}>
                {feature}
              </p>
            );
          })}
        </div>
      </div>
      <div className="pricing-card-footer">
        <Popup
          trigger={
            <span className={isDark ? "dark-mode pricing-tag" : "pricing-tag"}>
              Buy now
            </span>
          }
          position="right center"
        >
          Email us we'll be in contact soon!
        </Popup>
      </div>
    </div>
  );
}
