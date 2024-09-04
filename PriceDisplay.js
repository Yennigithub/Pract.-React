import React from "react";

const PriceDisplay = ({ time, ratePerHour}) => {
    const price = time * ratePerHour;

    return (
        <div>
            <h3>Price: ${price.toFixed(2)}</h3>
        </div>
    );
};

export default PriceDisplay;