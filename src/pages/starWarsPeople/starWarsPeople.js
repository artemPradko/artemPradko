import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useReducer,
} from 'react';
import { Link } from 'react-router-dom';

import sp from './starWarsPeople.module.scss';

function PeoplePage() {
  const [peopleId, setPeopleId] = useState(1);

  const [peopleData, setPeopleData] = useState(null);

  const okResponseStatus = 200;

  const onChange = useCallback((event) => {
    const { value } = event.target;
    setPeopleId(value);
  }, []);

  const submit = useCallback(async () => {
    console.info('peopleId ----', peopleId);

    const response = await fetch(
      `http://localhost:8000/swapi/people?peopleId=${peopleId}`,
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
    const imgData = `https://starwars-visualguide.com/assets/img/characters/${Number(
      peopleId
    )}.jpg`;

    const dataWithImg = {
      ...data,
      image: imgData,
    };

    console.info(dataWithImg);

    setPeopleData(dataWithImg);
  }, [peopleId]);

  return (
    <>
      <div className={sp.container}>
        <div className={sp.searchPlanetRoot}>
          <div className={sp.sPHeroIsRoot}>
            <Link className={sp.sPLink} to="/">
              Back
            </Link>
            <input
              className={sp.sPSearching}
              name="setHero"
              onChange={onChange}
              type="number"
              placeholder="Search"
              value={peopleId}
            />
            <button className={sp.sPSubmitButton} onClick={submit}>
              Show
            </button>
          </div>
          {peopleData && (
            <div className={sp.sPlanetsDescriptionAndImg}>
              <div className={sp.sPImage}>
                <img src={peopleData?.image} alt="Planet Image" />
              </div>
              <div className={sp.sPDescriptionContainer}>
                <span className={sp.sPName}>{peopleData?.name}</span>
                <div className={sp.sPDescription}>
                  <span className={sp.sPDetails}>Description</span>
                  <span className={sp.sPRotationPeriod}>
                    BirthYear: {peopleData?.birth_year}
                  </span>
                  <span className={sp.sPResidents}>
                    EyeColor: {peopleData?.eye_color}
                  </span>
                  <span className={sp.sPOrbitalPeriod}>
                    Films: {peopleData?.films}
                  </span>
                  <span className={sp.sPDiameter}>
                    Gender: {peopleData?.gender}
                  </span>
                  <span className={sp.sPClimate}>
                    HairColor: {peopleData?.hair_color}
                  </span>
                  <span className={sp.sPGravity}>
                    Height: {peopleData?.height}
                  </span>
                  <span className={sp.sPTerrain}>
                    Homeworld: {peopleData?.homeworld}
                  </span>
                  <span className={sp.sPSurfaceWater}>
                    Mass: {peopleData?.mass}
                  </span>
                  <span className={sp.sPPopulation}>
                    SkinColor: {peopleData?.skin_color}
                  </span>
                  <span className={sp.sPPopulation}>
                    Created: {peopleData?.created}
                    Edited: {peopleData?.edited}
                  </span>
                  <span className={sp.sPPopulation}>
                    Species: {peopleData?.species}
                  </span>
                  <span className={sp.sPPopulation}>
                    Starships: {peopleData?.starships}
                  </span>
                  <span className={sp.sPPopulation}>
                    Url: {peopleData?.url}
                  </span>
                  <span className={sp.sPPopulation}>
                    Vehicles: {peopleData?.vehicles}
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

export default PeoplePage;
