import React, {useContext} from "react";
import StyleContext from '../../contexts/StyleContext';
import {pricingSection} from "../../portfolio";
import PricingCard from "../../components/pricingCard/PricingCard";
import {Fade} from "react-reveal";
import "./Pricing.scss";
export default function Pricing(){
    const{isDark} = useContext(StyleContext);
    if(!pricingSection.display){
        return null;
    }
    return(
    <Fade bottom duration={1000} distance="20px">
        <div className="main" id="pricing">
            <div className="pricing-main-div">
                <div className="pricing-header">
                    <h1
                    className={
                        isDark
                        ? "dark-mode heading pricing-heading"
                        : "heading pricing-heading" 
                    }>
                        {pricingSection.title}
                    </h1>
                    <p
                    className={
                        isDark
                        ? "dark-mode subtitle pricing-subtitle"
                        : "subTitle pricing-subtitle"
                    }
                    >
                        {pricingSection.subtitle}
                    </p>
                </div>
                <div className="pricing-cards-div">
                    {pricingSection.pricingCards.map((card, i) => {
                        return (
                            <PricingCard
                            key={i}
                            isDark={isDark}
                            cardInfo={{
                                title: card.title, 
                                price: card.price,
                                features: card.features
                            }}
                            />
                        );
                    })}
                </div>
            </div>
        </div>

    </Fade>);
}