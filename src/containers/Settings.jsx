import React from "react";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="settings-container">
      <h2 className="settings-title">Settings</h2>
      <div className="settings-buttons">
        <button
          className="settings-button"
          onClick={() => {
            navigate("/");
          }}
        >
          Profile
        </button>
        <button className="settings-button">App Language</button>
        <button className="settings-button">Contact Us</button>
        <button className="settings-button">About Us</button>
        <button className="settings-button">Privacy and Policy</button>
      </div>
    </div>
  );
};

export default SettingsPage;
