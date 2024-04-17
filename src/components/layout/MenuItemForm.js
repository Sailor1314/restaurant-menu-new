// components/layout/MenuItemForm.js

import React, { useState } from 'react';

const MenuItemForm = ({ menuItem, onSubmit }) => {
  const [name, setName] = useState(menuItem ? menuItem.name : '');
  const [description, setDescription] = useState(menuItem ? menuItem.description : '');
  const [price, setPrice] = useState(menuItem ? menuItem.price : '');
  const [size, setSize] = useState(menuItem ? menuItem.size : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      description,
      price,
      size
      // Add more attributes as needed
    });
  };

  return (
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
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="size">Size:</label>
        <input
          type="text"
          id="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          required
        />
      </div>
      {/* Add more input fields for additional attributes */}
      <button type="submit">Save</button>
    </form>
  );
};

export default MenuItemForm;