import React from 'react';

import './ContactAs.css';

function ContactAs() {
  return (
    <div>
      <div className="rootContactInformatoinContainer">
        <div className="rootContactContainer">
          <div className="rootContactSentance">
            <p className="headerContactSentance">Contact Us</p>
            <p className="headerSentenceTwo">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
        </div>
        <div className="fidBackContainer">
          <div className="innerFidBackContainer">
            <div className="yourNameEmail">
              <input
                className="contactIntput"
                type="text"
                placeholder="Your name"
              />
              <input
                className="contactIntput"
                type="text"
                placeholder="Your email"
              />
            </div>
            <div>
              <textarea className="fitBack">Your Message</textarea>
            </div>
          </div>
          <div className="information">
            <p className="information">INFORMATION</p>
            <p className="formInformation">Bac-One Company</p>
            <p className="formInformation">12345 Hollywood Bvid Street</p>
            <p className="information">Los Angeles, California</p>
            <p className="information">+444 (Phone) 123456</p>
            <p className="information">+123 (Fax) 0011223</p>
            <p className="information">info@bak-onecompany.com</p>
          </div>
        </div>
        <div className="endButtonContainer">
          <button className="endButton">SUBMIT</button>
        </div>
      </div>
      <div className="copyright">
        <p>@ Copyright 2013 Bak-One | One Page Flat Template</p>
      </div>
    </div>
  );
}

export default ContactAs;
