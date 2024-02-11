import React, { useState } from 'react';
import './vendor.css'; // Import CSS file
import axios from 'axios';

const VendorForm = () => {
    // State variables to store form data
    const [email, setEmail] = useState('');
    const [category, setCategory] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    // const [price, setPrice] = useState('');

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Here you can perform actions like submitting the form data to a backend or processing it further
        console.log({
            email,
            category,
            itemDescription,
            // price
        });

        await axios.post("http://localhost:5000/api/vendor/create", {
            email,
            category,
            itemDescription,
            // price
        })

        // Reset form fields after submission
        setEmail('');
        setCategory('');
        setItemDescription('');
        // setPrice('');
    };

    return (
        <div className="vendor-form-container"> {/* Apply CSS class */}
            <h2>Vendor Registration Form</h2>
            <form onSubmit={handleSubmit}>
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
                    <label htmlFor="category">Category:</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Tents">Tents</option>
                        <option value="Carpets">Carpets</option>
                        <option value="Drinks">Drinks</option>
                        <option value="Food">Food</option>
                    </select>
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
                {/* <div>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="text"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div> */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default VendorForm;
