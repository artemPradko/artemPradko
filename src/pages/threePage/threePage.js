import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../images/logo.png';

import './threePage.css';

function ThreePage() {
  return (
    <div>
      <Link to="/">Back</Link>
      <div className="root">
        <div className="sitelogo">
          <img className="sitelogo" src={Logo} alt="Logo" />
        </div>
        <p className="sentaceLogo">IT IS COOL LOGO</p>
      </div>
    </div>
  );
}

export default ThreePage;
