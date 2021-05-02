import React from 'react';
import { Link } from 'react-router-dom';

import artemL from '../../images/ARTEML.jpg';
import myLogo from '../../images/AE__LOGO__MYLOGO__.png';

import './sixPage.css';

function SixPage() {
  return (
    <div className="root">
      <Link to="/">Back</Link>
      <div className="imgResyme">
        <img src={artemL} alt="ARTEML" />
        <img className="myLogo" src={myLogo} alt="AE__LOGO__MYLOGO__" />
      </div>
      <div>
        <p className="resymeSentance">Artem Pradko</p>
        <p className="resymeSentance">Old 10 years</p>
        <p className="resymeSentance">My name is ARTEM i have a BROTHER</p>
        <p className="resymeSentance">his name is MAX. He cool in programs.</p>
        <p className="resymeSentance">
          I have a MOTHER her name is TANYA I love
        </p>
        <p className="resymeSentance">
          my mum. I have a GRANDMOTHER her neme is
        </p>
        <p className="resymeSentance">
          TANYA her cool is cook. I have a FOTHER his
        </p>
        <p className="resymeSentance">name is SASHA. I LOVE MY FAMILY.</p>
      </div>
    </div>
  );
}

export default SixPage;
