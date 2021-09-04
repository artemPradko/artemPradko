import React from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../images/img1.jpg';

import './ninePage.css';

function NinePage() {
  return (
    <div>
      <Link to="/">Back</Link>
      <div className="root">
        <div className="photo">
          <img src={img1} alt="img3" />
        </div>
        <div className="aboutSentences">
          <p className="name">Melannie Doe</p>
          <p className="job">ITS Project Menager</p>
        </div>
      </div>
    </div>
  );
}

export default NinePage;
