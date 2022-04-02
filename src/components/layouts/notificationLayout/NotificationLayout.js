import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function notificationLayout(Page) {
  return function WithNotification() {
    return (
      <div>
        <Page />
        <ToastContainer />
      </div>
    );
  };
}

export default notificationLayout;
