import React from 'react';
import { Link } from 'react-router-dom';

import img3 from '../../images/img3.jpg';

import './eightPage.css';

function EightPage() {
  return (
    <div>
      <Link to="/">Back</Link>
      <div className="root">
        <div className="img3">
          <img src={img3} alt="img3" />
        </div>
        <div className="aboutSentences">
          <p className="name">Jonnie Doe</p>
          <p className="job">ITS Graphic Designer</p>
        </div>
      </div>
    </div>
  );
}

export default EightPage;
