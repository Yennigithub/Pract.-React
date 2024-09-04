import React from "react";

const ReservationSummary = ({ space, time, price}) => {
    return (
        <div>
            <h3>ReservationSummary</h3>
            <p>space: {space}</p>
            <p>time: {time} hours</p>
            <p>Total Price: $ {price.toFixed(2)}</p>

        </div>
    );
};

export default ReservationSummary;