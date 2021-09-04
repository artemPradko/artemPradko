import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import './testInJune.css';

function SwapyPage() {
  const [heroId, setHeroId] = useState(1);

  const [heroData, setHeroData] = useState(null);

  const onChange = useCallback((event) => {
    const { value } = event.target;
    setHeroId(value);
  }, []);

  const submit = useCallback(() => {
    async function getHero(starHeroId) {
      const response = await fetch(
        `https://swapi.dev/api/people/${starHeroId}`
      );

      const data = await response.json();
      const imgData = `https://starwars-visualguide.com/assets/img/characters/${starHeroId}.jpg`;

      const dataWithImg = {
        ...data,
        image: imgData,
      };

      console.info(dataWithImg);

      setHeroData(dataWithImg);
    }

    getHero(heroId);
  }, [heroId]);

  return (
    <div>
      <div className="s-h-heroIsRoot">
        <Link className="s-h-link" to="/">
          Back
        </Link>
        <input
          className="s-h-searching"
          name="setHero"
          onChange={onChange}
          type="number"
          placeholder="Search"
          value={heroId}
        />
        <button className="s-h-submitButton" onClick={submit}>
          Show
        </button>
      </div>
      {heroData && (
        <div className="s-h-descriptionAndImg">
          <div className="s-h-image">
            <img src={heroData?.image} alt="Hero Image" />
          </div>
          <div className="s-h-descriptionContainer">
            <span className="s-h-name">{heroData?.name}</span>
            <div className="s-h-description">
              <span className="s-h-details">Description</span>
              <span className="s-h-height">Height: {heroData?.height}</span>
              <span className="s-h-mass">Mass: {heroData?.mass}</span>
              <span className="s-h-hairColor">
                HairColor: {heroData?.hair_color}
              </span>
              <span className="s-h-skinColor">
                SkinColor: {heroData?.skin_color}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SwapyPage;
