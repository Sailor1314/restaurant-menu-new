// DeleteButton.js

import React from 'react';

const DeleteButton = ({ label, onDelete }) => {
  const handleClick = () => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      onDelete();
    }
  };

  return (
    <button className="delete-button" onClick={handleClick}>
      {label}
    </button>
  );
};

export default DeleteButton;
