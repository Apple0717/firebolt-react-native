import React from 'react';

interface BalanceProps {
  balance: number;
  fiatEquivalent: number;
}

const Balance: React.FC<BalanceProps> = ({ balance, fiatEquivalent }) => (
  <div className="balance">
    <h2>Your Balance</h2>
    <p>{balance} sats</p>
    <p>{fiatEquivalent} €</p>
  </div>
);

export default Balance;
