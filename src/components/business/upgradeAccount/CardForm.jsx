import React, { useState, useRef } from 'react';
import { render } from 'react-dom';
import Card from 'react-credit-cards';
// import './styles.css';

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from './utils';

import 'react-credit-cards/es/styles-compiled.css';


function CardForm() {

    const formRef = useRef(null);

  const [state, setState] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
  });

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setState((prevState) => ({ ...prevState, issuer }));
    }
  };

  const handleInputFocus = ({ target }) => {
    setState((prevState) => ({ ...prevState, focused: target.name }));
  };

  const handleInputChange = ({ target }) => {
    let { name, value } = target;
    
    if (name === 'number') {
      value = formatCreditCardNumber(value);
    } else if (name === 'expiry') {
      value = formatExpirationDate(value);
    } else if (name === 'cvc') {
      value = formatCVC(value);
    }

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('You have finished payment!');
    formRef.current.reset();
  };

  const { name, number, expiry, cvc, focused, issuer } = state;

  return (
    <div key='Payment'>
    <div className='App-payment'>
      <h1>Enter your payment details</h1>
      <h4>please input your information below</h4>
      <Card
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focused}
        callback={handleCallback}
      />
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className='form-group'>
          <small>Name on card:</small>
          <input
            type='text'
            name='name'
            className='form-control'
            placeholder='Name'
            pattern='[a-zA-Z-]+'
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className='form-group'>
          <small>Card Number:</small>
          <input
            type='tel'
            name='number'
            className='form-control'
            placeholder='Card Number'
            pattern='[\d| ]{16,22}'
            maxLength='19'
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>

        <div className='expiry-cvc'>
            <div className='form-group'>
            <small>Expiration Date:</small>
            <input
                type='tel'
                name='expiry'
                className='form-control'
                placeholder='Valid Thru'
                pattern='\d\d/\d\d'
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
            />
            </div>
            <div className='form-group'>
            <small>CVC:</small>
            <input
                type='tel'
                name='cvc'
                className='form-control'
                placeholder='CVC'
                pattern='\d{3}'
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
            />
            </div>
        </div>
        <input type='hidden' name='issuer' value={issuer} />
        <div className='form-actions'>
          <button>Submit</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default CardForm