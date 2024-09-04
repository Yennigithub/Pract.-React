import { useState } from "react";
import React { useState} from "react";

const PaymentForm = ({ onsubmit}) => {
    const [carNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const hadleSubmit = (e) => {
        Event.preventDefault();
        onsubmit({ carNumber, expiryDate, cvv});
    };
    return (
        <form onSubmit={hadleSubmit}>
            <h3>Payment Information</h3>
            <input>
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) =>
                setCardNumber(e.target.value)}
            </input>
            
       
        <input
        type="text"
        placeholder="Expiry Date (MM/YY)"
        value={expiryDate}
        onChange={(e) =>
            setExpiryDate(e.target.value)}
            />

        <input
        type="text"
        placeholder="CVV"
        value={cvv}
        onChange={(e)=>
            setCvv(e.target.value)}
            />
            <button type="submit">Payment</button>
            </form>

        
    );
};
export default PaymentForm;
