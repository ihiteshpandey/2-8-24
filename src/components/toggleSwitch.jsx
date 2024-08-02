import React, { useState } from 'react';
import './toggleSwitch.css'; // Import the CSS for styling

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        id={`toggle-switch`}
        checked={isOn}
        onChange={handleToggle}
      />
      <label className="toggle-switch-label" htmlFor={`toggle-switch`}>
        <span className={`toggle-switch-inner`} />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
};

export default ToggleSwitch;