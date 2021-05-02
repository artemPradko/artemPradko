import React from 'react';
import { Link } from 'react-router-dom';

import LogoMail from '../../images/logo_mail.png';
import Email from '../../images/e-mail.jpg';
import IconEmail from '../../images/icon-e-mail.webp';

import './secondPage.css';

function SecondPage() {
  return (
    <div>
      <Link to="/">Back</Link>
      <div className="root">
        <div className="iconContainer">
          <img src={LogoMail} alt="logo-mail" />
          <img className="emailjpg" src={Email} alt="e-mail" />
          <img className="iconEmail" src={IconEmail} alt="icon-e-mail" />
        </div>
        <div className="e-mail">
          <p>info@bak-onecompany.com</p>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
