import React, { useState } from 'react';
import './Calculator.css';

export default function Calculator() {
  const [principl, setPrincip] = useState(''); // Initialize state variables
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [interestTotal, setInterestTotal] = useState(null); // State variable for interest calculation
  const [loanTotal, setLoanTotal] = useState(null); // State variable for loan calculation
  const [isInterestButtonClicked, setIsInterestButtonClicked] = useState(false);
  const [isLoanButtonClicked, setIsLoanButtonClicked] = useState(false);

  function handleInterest() {
    const total = principalValue * rateValue * timeValue;
    setInterestTotal(total);
    setIsInterestButtonClicked(true);
    setIsLoanButtonClicked(false);
  }

  function handleLoan() {
    const fixedRate = (principalValue * rateValue * (1 + rateValue) ** timeValue) / ((1 + rateValue) ** timeValue - 1);
    const total = fixedRate * timeValue;
    setLoanTotal(total);
    setIsLoanButtonClicked(true);
    setIsInterestButtonClicked(false);
  }

  const principalValue = parseFloat(principl || 0);
  const rateValue = parseFloat(rate || 0);
  const timeValue = parseFloat(time || 0);

  return (
    <div>
      <h2>Simple Calculators</h2>
      <div className='wholeCalculator'>
        <div className='calculator'>
          <text><strong>Simple Loan/Interest Calculator</strong></text>
          <label>
            Principal(P):  $<input type="number" value={principl} onChange={(e) => setPrincip(e.target.value)} />
          </label>
          <label>
            Rate (R): %<input type="number" value={rate} onChange={(e) => setRate(e.target.value)} />
          </label>
          <label>
            Time (t): <input type="number" value={time} onChange={(e) => setTime(e.target.value)} />
          </label>
          <button onClick={handleInterest} className='buttonClicked'>Interest (years)</button>
          <button onClick={handleLoan} className='buttonClicked'>Loan (months)</button>
        </div>
        <div className='calculator'>
          {isInterestButtonClicked && (
            <div>
              <text><strong>Calculated Interest</strong></text>
              <p>Interest: {interestTotal !== null ? `$${interestTotal.toFixed(2)}` : '---'}</p>
              <p>This interest was calculted by Simple Interest (SI) = Principal * Rate * Time</p>
              <p>Principal Value: ${principl}</p>
              <p>Rate Value: {rate}%</p>
              <p>Time Value: {time}</p>
            </div>
          )}
          {isLoanButtonClicked && (
            <div>
              <text><strong>Calculated Loan</strong></text>
              <p>Loan: {loanTotal !== null ? `$${loanTotal.toFixed(2)}` : '---'}</p>
              <p>This interest was calculted by PMT = [Principal * rate * (1 + rate)^monthlyPayments] / [(1 + rate)^monthlyPayments - 1] then Total Cost = PMT * monthlyPayments</p>
              <p>Principal Value: ${principl}</p>
              <p>Rate Value: {rate}%</p>
              <p>Time Value: {time}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}