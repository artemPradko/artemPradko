import React from 'react';

import progectMan from '../../images/img1.jpg';
import webDesign from '../../images/img2.jpg';
import graphicDes from '../../images/img3.jpg';

function AboutUs() {
  return (
    <div>
      <div className="rootAboutUs">
        <div>
          <p className="aboutUs">About Us</p>
          <p className="aboutSentence">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>
      </div>
      <div className="rootImgAboutContainer">
        <div className="imgAbout">
          <div>
            <img src={progectMan} alt="MelannieJoe1" />
            <div className="aboutSentences">
              <p className="headerSentence">Melannie Doe</p>
              <p className="innerHeaderSentence">Project Menager</p>
              <p className="sentenceAboutUs">
                Ut wisi enim ad minim veniam, quis
              </p>
              <p className="sentenceAboutUs">
                nostr ud exer ci tation ullamcorper
              </p>
              <p className="sentenceAboutUs">
                suscipit lobortis nisl ut aliquip ex ca
              </p>
              <p className="endSentenceAboutUs">commodo consequat</p>
            </div>
          </div>
          <div>
            <img src={graphicDes} alt="JonnieDoe2" />
            <div className="aboutSentences">
              <p className="headerSentence">Jonnie Doe</p>
              <p className="innerHeaderSentence">Graphic Designer</p>
              <p className="sentenceAboutUs">
                Ut wisi enim ad minim veniam, quis
              </p>
              <p className="sentenceAboutUs">
                nostr ud exer ci tation ullamcorper
              </p>
              <p className="sentenceAboutUs">
                suscipit lobortis nisl ut aliquip ex ca
              </p>
              <p className="endSentenceAboutUs">commodo consequat</p>
            </div>
          </div>
          <div>
            <img src={webDesign} alt="DanielDoe3" />
            <div className="aboutSentences">
              <p className="headerSentence">Daniel Doe</p>
              <p className="innerHeaderSentence">Web Designer</p>
              <p className="sentenceAboutUs">
                Ut wisi enim ad minim veniam, quis
              </p>
              <p className="sentenceAboutUs">
                nostrud exer ci tation ullamcorper
              </p>
              <p className="sentenceAboutUs">
                suscipit lobortis nisl ut aliquip ex ca
              </p>
              <p className="endSentenceAboutUs">commodo consequat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
