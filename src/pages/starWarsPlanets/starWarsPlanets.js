import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import './starWarsPlanet.css';

function PlanetPage() {
  const [planetId, setPlanetId] = useState(1);

  const [planetData, setPlanetData] = useState(null);

  const onChange = useCallback((event) => {
    const { value } = event.target;
    setPlanetId(value);
  }, []);

  const submit = useCallback(() => {
    async function getPlanet(starPlanetId) {
      const response = await fetch(
        `https://swapi.dev/api/planets/${starPlanetId}`
      );

      const data = await response.json();
      const imgData = `https://starwars-visualguide.com/assets/img/planets/${starPlanetId}.jpg`;

      const dataWithImg = {
        ...data,
        image: imgData,
      };

      console.info(dataWithImg);

      setPlanetData(dataWithImg);
    }

    getPlanet(planetId);
  }, [planetId]);

  return (
    <div>
      <div className="s-p-heroIsRoot">
        <Link className="s-p-link" to="/">
          Back
        </Link>
        <input
          className="s-p-searching"
          name="setHero"
          onChange={onChange}
          type="number"
          placeholder="Search"
          value={planetId}
        />
        <button className="s-p-submitButton" onClick={submit}>
          Show
        </button>
      </div>
      {planetData && (
        <div className="s-p-descriptionAndImg">
          <div className="s-p-image">
            <img src={planetData?.image} alt="Planet Image" />
          </div>
          <div className="s-p-descriptionContainer">
            <span className="s-p-name">{planetData?.name}</span>
            <div className="s-p-description">
              <span className="s-p-details">Description</span>
              <span className="s-p-rotationPeriod">
                RotationPeriod: {planetData?.rotation_period}
              </span>
              <span className="s-p-residents">
                Residents: {planetData?.residents}
              </span>
              <span className="s-p-orbitalPeriod">
                OrbitalPeriod: {planetData?.orbital_period}
              </span>
              <span className="s-p-diameter">
                Diameter: {planetData?.diameter}
              </span>
              <span className="s-p-climate">
                Climate: {planetData?.climate}
              </span>
              <span className="s-p-gravity">
                Gravity: {planetData?.gravity}
              </span>
              <span className="s-p-terrain">
                Terrain: {planetData?.terrain}
              </span>
              <span className="s-p-surfaceWater">
                SurfaceWater: {planetData?.surface_water}
              </span>
              <span className="s-p-population">
                Population: {planetData?.population}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlanetPage;
