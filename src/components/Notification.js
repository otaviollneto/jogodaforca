import React from "react";

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      <p>Você já digitou esta letra</p>
    </div>
  );
};

export default Notification;
