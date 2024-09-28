import React, { useState } from 'react';
import { getMemberDetails, createDeposit } from '../api';

const MemberOperation = () => {
  const [memberId, setMemberId] = useState('');
  const [memberData, setMemberData] = useState(null);
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const fetchMemberDetails = async () => {
    try {
      const data = await getMemberDetails(memberId);
      setMemberData(data);
    } catch (err) {
      setMessage('Member not found.');
    }
  };

  const handleDeposit = async () => {
    try {
      const response = await createDeposit(memberId, amount);
      setMessage(response.message);
      setAmount(''); // Clear amount field
    } catch (err) {
      setMessage('Error recording deposit.');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Member Operation</h2>
      <input
        type="text"
        placeholder="Enter Member ID"
        value={memberId}
        onChange={(e) => setMemberId(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={fetchMemberDetails} className="bg-blue-500 text-white py-2 px-4 rounded">Fetch Member</button>

      {memberData && (
        <div className="mt-4">
          <h3 className="text-xl">Member Details:</h3>
          <p>Name: {memberData.name}</p>
          <p>Status: {memberData.status}</p>
          <p>Account Balance: {memberData.accountBalance}</p>

          <input
            type="number"
            placeholder="Deposit Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2 mt-4"
          />
          <button onClick={handleDeposit} className="bg-green-500 text-white py-2 px-4 rounded ml-2">Deposit</button>
        </div>
      )}

      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default MemberOperation;
