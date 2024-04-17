import React from 'react';

const UserTabs = ({ isAdmin }) => {
  return (
    <div className="user-tabs">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          {isAdmin && <li><a href="/admin">Admin Panel</a></li>}
          {/* Add more tabs as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default UserTabs;