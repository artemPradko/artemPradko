import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import './starWarsStarships.css';

function StarshipPage() {
  const [starshipId, setStarshipId] = useState(1);

  const [starshipData, setStarshipData] = useState(null);

  const onChange = useCallback((event) => {
    const { value } = event.target;
    setStarshipId(value);
  }, []);

  const submit = useCallback(() => {
    async function getStarship(starShipId) {
      const response = await fetch(
        `https://swapi.dev/api/starships/${starShipId}`
      );

      const data = await response.json();
      const imgData = `https://starwars-visualguide.com/assets/img/starships/${starShipId}.jpg`;

      const dataWithImg = {
        ...data,
        image: imgData,
      };

      console.info(dataWithImg);

      setStarshipData(dataWithImg);
    }

    getStarship(starshipId);
  }, [starshipId]);

  return (
    <div>
      <div className="s-s-heroIsRoot">
        <Link className="s-s-link" to="/">
          Back
        </Link>
        <input
          className="s-s-searching"
          name="setHero"
          onChange={onChange}
          type="number"
          placeholder="Search"
          value={starshipId}
        />
        <button className="s-s-submitButton" onClick={submit}>
          Show
        </button>
      </div>
      {starshipData && (
        <div className="s-s-descriptionAndImg">
          <div className="s-s-image">
            <img src={starshipData?.image} alt="Planet Image" />
          </div>
          <div className="s-s-descriptionContainer">
            <span className="s-s-name">{starshipData?.name}</span>
            <div className="s-s-description">
              <span className="s-s-details">Description</span>
              <span className="s-s-MGLT">MGLT: {starshipData?.MGLT}</span>
              <span className="s-s-residents">
                CargoCapacity: {starshipData?.cargo_capacity}
              </span>
              <span className="s-s-consumables">
                Consumables: {starshipData?.consumables}
              </span>
              <span className="s-s-costInCredits">
                CostInCredits: {starshipData?.cost_in_credits}
              </span>
              <span className="s-s-created">
                Created: {starshipData?.created}
              </span>
              <span className="s-s-crew">Crew: {starshipData?.crew}</span>
              <span className="s-s-edited">Edited: {starshipData?.edited}</span>
              <span className="s-s-hyperdriveRating">
                HyperdriveRating: {starshipData?.hyperdrive_rating}
              </span>
              <span className="s-s-length">Length: {starshipData?.length}</span>
              <span className="s-s-manufacturer">
                Manufacturer: {starshipData?.manufacturer}
              </span>
              <span className="s-s-maxAtmospheringSpeed">
                MaxAtmospheringSpeed: {starshipData?.max_atmosphering_speed}
              </span>
              <span className="s-s-model">Model: {starshipData?.model}</span>
              <span className="s-s-passengers">
                Passengers: {starshipData?.passengers}
              </span>
              <span className="s-s-starshipClass">
                StarshipClass: {starshipData?.starship_class}
              </span>
              <span className="s-s-pilots">Pilots: {starshipData?.pilots}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StarshipPage;
