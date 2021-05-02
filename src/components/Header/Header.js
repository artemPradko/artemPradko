import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png';

import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="logobuttons">
        <div className="logo">
          <img src={logo} alt="blogo" />
        </div>
        <div className="buttons">
          <div className="dropdown">
            <button className="topbutton">HOME</button>
            <div className="dropdown-content">
              <Link to="/firstPage">Address</Link>
              <Link to="/secondPage">E-mail</Link>
              <Link to="/threePage">Logo</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="topbutton">PORTFOLIO</button>
            <div className="dropdown-content">
              <Link to="/fourPage">Workers</Link>
              {/* <a href="/foursPage.html">Workers</a> */}
              <Link to="/fivePage">Icons</Link>
              <Link to="/sixPage">My Resyme</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="topbutton">ABOUT</button>
            <div className="dropdown-content">
              <Link to="/sevenPage">Web des.</Link>
              {/* <a href="/sevensPage.html">Web Des.</a> */}
              <Link to="/eightPage">Graphic des.</Link>
              <Link to="/ninePage">Progect man.</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="topbutton">CONTACT</button>
            <div className="dropdown-content">
              <Link to="/tenPage">Phone numbers</Link>
              <Link to="/test">Test</Link>
              <Link to="/testInMarch">TestInMarch</Link>
              <Link to="/testInApril">TestInApril</Link>
              <Link to="/calculation">Calculation</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
