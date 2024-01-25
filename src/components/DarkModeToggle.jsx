import React from 'react';
// import  './DarkModeToggle.scss';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      Dark Mode
    </label>
  );
};

export default DarkModeToggle;
