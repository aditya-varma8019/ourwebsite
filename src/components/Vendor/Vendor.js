import React, { useState } from 'react';
import './vendor.css'; // Import CSS file

const VendorForm = () => {
  // State variables to store form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [price, setPrice] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform actions like submitting the form data to a backend or processing it further
    console.log({
      name,
      email,
      itemName,
      itemDescription,
      price
    });
    // Reset form fields after submission
    setName('');
    setEmail('');
    setItemName('');
    setItemDescription('');
    setPrice('');
  };

  return (
    <div className="vendor-form-container"> {/* Apply CSS class */}
      <h2>Vendor Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="itemName">Item Name:</label>
          <input 
            type="text" 
            id="itemName" 
            value={itemName} 
            onChange={(e) => setItemName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="itemDescription">Item Description:</label>
          <textarea 
            id="itemDescription" 
            value={itemDescription} 
            onChange={(e) => setItemDescription(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input 
            type="text" 
            id="price" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VendorForm;
