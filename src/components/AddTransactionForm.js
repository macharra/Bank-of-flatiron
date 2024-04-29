import React, { useState } from 'react';

const AddTransactionForm = ({ setTransactions, transactions }) => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if any field is empty
    if (!date || !description || !category || !amount) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Add transaction to the transactions array
    const newTransaction = { date, description, category, amount };
    setTransactions([...transactions, newTransaction]);
  
    // Clear form fields
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  const isValidDate = (dateString) => {
    // Regular expression to validate date format (YYYY-MM-DD)
    const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
    return dateFormat.test(dateString);
  };

  const handleReset = () => {
    // Clear the transactions array
    setTransactions([]);
  };

  return (
    <form onSubmit={handleSubmit} className='transaction-form'>
      <div className='input'>
        <input
          type="text"
          placeholder="Date (YYYY-MM-DD)"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="form-input date-input"
        />
        {!isValidDate(date) && (
          <p className="error">Please enter a valid date format (YYYY-MM-DD)</p>
        )}
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-input description-input"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="form-input"
        />
      </div>
      <div>
        <button type="submit" className='button'>Add Transaction</button>
        <button type="button" onClick={handleReset} className='button'>Reset Form</button>
      </div>
    </form>
  );
};

export default AddTransactionForm;
