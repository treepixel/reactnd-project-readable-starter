import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { HeaderSection } from '../styles';

const Header = ({ backTo }) => {
  return (
    <HeaderSection>
      <h1>ReadABLE</h1>
      {backTo && (
        <Link to={backTo}>
          <FaArrowLeft />
        </Link>
      )}
    </HeaderSection>
  );
};

export default Header;
