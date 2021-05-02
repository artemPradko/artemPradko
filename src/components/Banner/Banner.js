import React, { useState, useCallback } from 'react';

import buttonImg from '../../images/buttonimg.png';

import './Banner.css';

function Banner() {
  const [isShownDetails, setIsShownDetails] = useState(false);

  const changeDetailsState = useCallback(() => {
    console.log('isShownDetails', isShownDetails);
    setIsShownDetails(!isShownDetails);
  }, [isShownDetails]);
  return (
    <div className="banner">
      {!isShownDetails && (
        <div>
          <button
            className="cyanbutton"
            onClick={changeDetailsState}
            type="button"
          >
            LEARN MORE
          </button>
          <div className="firstTitle">
            <p className="firstTitle">We Build Brand</p>
            <p className="firstSentance">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh
            </p>
            <p className="secondSentance">
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat
            </p>
          </div>
          <div className="arrowimg">
            <img src={buttonImg} alt="button" />
          </div>
        </div>
      )}
      {isShownDetails && (
        <div>
          <button onClick={changeDetailsState}>close</button>
          <span>some text</span>
        </div>
      )}
    </div>
  );
}

export default Banner;
