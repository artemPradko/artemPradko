import React from 'react';
import { Link } from 'react-router-dom';

import progectMan from '../../images/img1.jpg';
import webDesign from '../../images/img2.jpg';
import graphicDes from '../../images/img3.jpg';

import './fourPage.css';

function FourPage() {
  return (
    <div className="root">
      <Link to="/">Back</Link>
      <div className="itsWorkersImg">
        <img id="img1" src={progectMan} alt="img1" />
        <img id="img2" src={webDesign} alt="img2" />
        <img id="img3" src={graphicDes} alt="img3" />
      </div>
      <p className="itsWorkersSentance">It's WORKERS of Bak-One company</p>
    </div>
  );
}

export default FourPage;
