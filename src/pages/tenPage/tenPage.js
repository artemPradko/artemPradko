import React from 'react';
import { Link } from 'react-router-dom';

import './tenPage.css';

function TenPage() {
  return (
    <div>
      <Link to="/">Back</Link>
      <div className="root">
        <div>
          <p className="header">ITS PHONE NUMBERS</p>
          <p className="numbers">+444 (Phone) 123456</p>
          <p className="numbers">+123 (Fax) 0011223</p>
        </div>
      </div>
    </div>
  );
}

export default TenPage;
