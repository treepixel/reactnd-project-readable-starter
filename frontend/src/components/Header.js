import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Header = ({ backTo }) => {
  return (
    <div className="header">
      <h1>ReadABLE</h1>
      {backTo && (
        <Link to={backTo}>
          <FaArrowLeft />
        </Link>
      )}
    </div>
  );
};

export default Header;
