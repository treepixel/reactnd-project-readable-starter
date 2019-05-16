import React from 'react';
import { BtnIcon } from '../styles';
import { FaEdit, FaTimes, FaPlus, FaMinus } from 'react-icons/fa';

export default function ButtonIcon({ name, action, icon, type }) {
  function Icon(icon) {
    switch (icon) {
      case 'FaEdit':
        return <FaEdit />;
      case 'FaTimes':
        return <FaTimes />;
      case 'FaPlus':
        return <FaPlus />;
      case 'FaMinus':
        return <FaMinus />;
      default:
        return <FaPlus />;
    }
  }

  return (
    <BtnIcon name={name} onClick={() => action()} type={type}>
      {Icon(icon)}
    </BtnIcon>
  );
}
