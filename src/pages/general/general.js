import React from 'react';

import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import BigButton from '../../components/BigButton/BigButton';

import './general.css';
import AboutUs from '../../components/AboutUs/AboutUs';
import ContactAs from '../../components/ContactAs/ContactAs';

function general() {
  return (
    <div className="App">
      <div className="headerConteiner">
        <Header />
      </div>
      <div className="bannerContainer">
        <Banner />
      </div>
      <div className="rootBigButtonContainer">
        <BigButton />
      </div>
      <div className="rootImgAboutContainer">
        <AboutUs />
      </div>
      <div className="rootContactInformatoinContainer">
        <ContactAs />
      </div>
    </div>
  );
}

export default general;
