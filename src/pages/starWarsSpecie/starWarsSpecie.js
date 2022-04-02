import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useReducer,
} from 'react';
import { Link } from 'react-router-dom';

import ss from './starWarsSpecie.module.scss';

function SpeciePage() {
  const [specieId, setSpecieId] = useState(3);

  const [specieData, setSpecieData] = useState(null);

  const okResponseStatus = 200;

  const onChange = useCallback((event) => {
    const { value } = event.target;
    setSpecieId(value);
  }, []);

  const submit = useCallback(async () => {
    console.info('specieId ----', specieId);

    const response = await fetch(
      `http://localhost:8000/swapi/specie?specieId=${specieId}`,
      {
        method: 'post',
        headers: {
          'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    ).catch((error) => {
      console.error('fetch error ---', error);

      return error;
    });

    console.info('res ---', response);

    const data = await response.json();
    const imgData = `https://starwars-visualguide.com/assets/img/species/${Number(
      specieId
    )}.jpg`;

    const dataWithImg = {
      ...data,
      image: imgData,
    };

    console.info(dataWithImg);

    setSpecieData(dataWithImg);
  }, [specieId]);

  return (
    <>
      <div className={ss.container}>
        <div className={ss.searchPlanetRoot}>
          <div className={ss.spHeroIsRoot}>
            <Link className={ss.sPLink} to="/">
              Back
            </Link>
            <input
              className={ss.sPSearching}
              name="setHero"
              onChange={onChange}
              type="number"
              placeholder="Search"
              value={specieId}
            />
            <button className={ss.sPSubmitButton} onClick={submit}>
              Show
            </button>
          </div>
          {specieData && (
            <div className={ss.sPlanetsDescriptionAndImg}>
              <div className={ss.sPImage}>
                <img src={specieData?.image} alt="Specie Image" />
              </div>
              <div className={ss.sPDescriptionContainer}>
                <span className={ss.sPName}>{specieData?.name}</span>
                <div className={ss.sPDescription}>
                  <span className={ss.sPDetails}>Description</span>
                  <span className={ss.sPRotationPeriod}>
                    SkinColors: {specieData?.skin_colors}
                  </span>
                  <span className={ss.sPResidents}>
                    Language: {specieData?.language}
                  </span>
                  <span className={ss.sPOrbitalPeriod}>
                    HairColors: {specieData?.hair_colors}
                  </span>
                  <span className={ss.sPDiameter}>
                    EyeColors: {specieData?.eye_colors}
                  </span>
                  <span className={ss.sPClimate}>
                    AverageHeight: {specieData?.average_height}
                  </span>
                  <span className={ss.sPGravity}>
                    AverageLifespan: {specieData?.average_lifespan}
                  </span>
                  <span className={ss.sPTerrain}>
                    Classification: {specieData?.classification}
                  </span>
                  <span className={ss.sPSurfaceWater}>
                    Designation: {specieData?.designation}
                  </span>
                  <span className={ss.sPPopulation}>
                    Homeworld: {specieData?.homeworld}
                  </span>
                  <span className={ss.sPPopulation}>
                    People: {specieData?.people}
                  </span>
                  <span className={ss.sPPopulation}>
                    Created: {specieData?.created}
                    Edited: {specieData?.edited}
                  </span>
                  <span className={ss.sPPopulation}>
                    Url: {specieData?.url}
                  </span>
                  <span className={ss.sPPopulation}>
                    Films: {specieData?.films}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SpeciePage;
