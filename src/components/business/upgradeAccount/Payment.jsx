import React, { useState } from 'react';
// import './Payment.css';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpirationChange = (e) => {
    setExpiration(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation checks
    if (!isValidCardNumber(cardNumber)) {
      setErrorMessage('Invalid card number');
      return;
    }

    if (!isValidExpiration(expiration)) {
      setErrorMessage('Invalid expiration date');
      return;
    }

    if (!isValidCVV(cvv)) {
      setErrorMessage('Invalid CVV');
      return;
    }

    // If all checks pass, submit the form or perform further actions
    setErrorMessage('');
    console.log('Form submitted');
  };

  const isValidCardNumber = (cardNumber) => {
    // Validate card number based on your rules
    // For example, you can check for a specific length or use a regex pattern
    return /^[\d]{16}$/.test(cardNumber);
  };

  const isValidExpiration = (expiration) => {
    // Validate expiration date based on your rules
    // For example, you can check if it is in the future and has a valid format
    return /^\d{2}\/\d{2}$/.test(expiration);
  };

  const isValidCVV = (cvv) => {
    // Validate CVV based on your rules
    // For example, you can check for a specific length or use a regex pattern
    return /^\d{3}$/.test(cvv);
  };

  return (
    <div className="payment-container">
      <h2 className="payment-title">Payment Details</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            className="form-input"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiration">Expiration Date</label>
          <input
            type="text"
            id="expiration"
            className="form-input"
            value={expiration}
            onChange={handleExpirationChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            className="form-input"
            value={cvv}
            onChange={handleCvvChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
