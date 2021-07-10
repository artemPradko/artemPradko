import React, { useCallback, useState } from 'react';

import photos from '../../images/icon1.png';
import audio from '../../images/icon2.png';
import setting from '../../images/icon3.png';
import compas from '../../images/icon4.png';
import phone from '../../images/icon5.png';
import bublle from '../../images/icon6.png';
import song from '../../audio/ayo-teo-rolex.mp3';

import './BigButton.css';

function BigButton() {
  const [isAudioShown, setIsAudioShown] = useState(false);

  const playSong = useCallback(() => {
    const musicTag = document.getElementById('audio');
    console.info('Audio tag1', musicTag);
    setIsAudioShown(true);
    if (isAudioShown) {
      musicTag.src = song;
    }
  }, [isAudioShown]);

  return (
    <div className="innerButtonContainer">
      <div className="headerContainer">
        <p className="headerTwo">Portfolio</p>
        <p className="sentance">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </p>
      </div>
      <div className="cyanButtons">
        <button className="Buttons">ALL</button>
        <button className="Buttons">WEB DESIGN</button>
        <button className="Buttons">GRAPHIC DESIGN</button>
        <button className="Buttons">FLAT DESIGN</button>
      </div>
      <audio id="audio" autoPlay controls hidden={!isAudioShown} />
      <div className="bigButtonContainer">
        <input
          alt="photos"
          className="photos"
          onClick="navigateTo('/foursPage.html')"
          type="image"
          src={photos}
        />
        <input
          alt="audio"
          id="audioImage"
          className="photos"
          onClick={playSong}
          type="image"
          src={audio}
        />
        <input alt="setting" className="photos" type="image" src={setting} />
        <input alt="compas" className="photos" type="image" src={compas} />
        <input alt="phone" className="photos" type="image" src={phone} />
        <input alt="bublle" className="photos" type="image" src={bublle} />
        <input alt="photosTwo" className="photos" type="image" src={photos} />
        <input alt="audioTwo" className="photos" type="image" src={audio} />
      </div>
    </div>
  );
}

export default BigButton;
