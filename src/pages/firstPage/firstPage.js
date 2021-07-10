import React from 'react';
import { Link } from 'react-router-dom';

import office from '../../images/ficce.jpg';

import './firstPage.css';

function FirstPage() {
  return (
    <div>
      <Link to="/"></Link>
      <div className="root">
        <div className="oficce">
          <img src={office} alt="ofice" />
        </div>
        <div className="firstpage">
          <p className="firstOne">Bac-One Company</p>
          <p>12345 Hollywood Bvid Street</p>
          <p>Los Angeles, California</p>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
