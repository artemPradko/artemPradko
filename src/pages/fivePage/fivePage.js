import React from 'react';
import { Link } from 'react-router-dom';

import photos from '../../images/icon1.png';
import audio from '../../images/icon2.png';
import setting from '../../images/icon3.png';
import compas from '../../images/icon4.png';
import phone from '../../images/icon5.png';
import bublle from '../../images/icon6.png';

import './fivePage.css';

function FivePage() {
  return (
    <div>
      <Link to="/">Back</Link>
      <div className="root">
        <div className="icons">
          <img className="imgIcons" src={photos} alt="icon1" />
          <img className="imgIcons" src={audio} alt="icon2" />
          <img className="imgIcons" src={setting} alt="icon3" />
          <img className="imgIcons" src={compas} alt="icon4" />
          <img className="imgIcons" src={phone} alt="icon5" />
          <img className="imgIcons" src={bublle} alt="icon6" />
          <img className="imgIcons" src={photos} alt="icon7" />
          <img className="imgIcons" src={audio} alt="icon8" />
        </div>
        <p className="iconSentance">It's ICONS </p>
      </div>
    </div>
  );
}

export default FivePage;
