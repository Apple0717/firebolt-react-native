import React, { useState } from 'react';
import axios from 'axios';

const Swap: React.FC = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('BTC');
  const [toCurrency, setToCurrency] = useState('USD');
  const [rate, setRate] = useState(0);
  const [transactionId, setTransactionId] = useState('');
  const [error, setError] = useState('');

  const handleSwap = async () => {
    try {
      const response = await axios.post('/api/swap', { amount, fromCurrency, toCurrency });
      setRate(response.data.rate);
      setTransactionId(response.data.transactionId);
      setError('');
    } catch (error) {
      setError('An error occurred while processing your request.');
    }
  };

  return (
    <div className="swap">
      <h2>Swap</h2>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(parseInt(e.target.value))}
      />
      <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
        <option value="BTC">BTC</option>
        <option value="L-BTC">L-BTC</option>
        <option value="BTC ⚡">BTC ⚡</option>
      </select>
      <select value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
        <option value="BTC">BTC</option>
        <option value="L-BTC">L-BTC</option>
        <option value="BTC ⚡">BTC ⚡</option>
      </select>
      <button onClick={handleSwap}>Swap</button>
      {rate && <p>Rate: {rate}</p>}
      {transactionId && <p>Transaction ID: {transactionId}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Swap;