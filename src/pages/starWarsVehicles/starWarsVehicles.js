import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useReducer,
} from 'react';
import { Link } from 'react-router-dom';

import sv from './starWarsVehicles.module.scss';

function VehiclePage() {
  const [vehicleId, setVehicleId] = useState(4);

  const [vehicleData, setVehicleData] = useState(null);

  const okResponseStatus = 200;

  const onChange = useCallback((event) => {
    const { value } = event.target;
    setVehicleId(value);
  }, []);

  const submit = useCallback(async () => {
    console.info('vehicleId ----', vehicleId);

    const response = await fetch(
      `http://localhost:8000/swapi/vehicle?vehicleId=${vehicleId}`,
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
    const imgData = `https://starwars-visualguide.com/assets/img/vehicles/${Number(
      vehicleId
    )}.jpg`;

    const dataWithImg = {
      ...data,
      image: imgData,
    };

    console.info(dataWithImg);

    setVehicleData(dataWithImg);
  }, [vehicleId]);

  return (
    <>
      <div className={sv.container}>
        <div className={sv.searchPlanetRoot}>
          <div className={sv.spHeroIsRoot}>
            <Link className={sv.sPLink} to="/">
              Back
            </Link>
            <input
              className={sv.sPSearching}
              name="setHero"
              onChange={onChange}
              type="number"
              placeholder="Search"
              value={vehicleId}
            />
            <button className={sv.sPSubmitButton} onClick={submit}>
              Show
            </button>
          </div>
          {vehicleData && (
            <div className={sv.sPlanetsDescriptionAndImg}>
              <div className={sv.sPImage}>
                <img src={vehicleData?.image} alt="Vehicle Image" />
              </div>
              <div className={sv.sPDescriptionContainer}>
                <span className={sv.sPName}>{vehicleData?.name}</span>
                <div className={sv.sPDescription}>
                  <span className={sv.sPDetails}>Description</span>
                  <span className={sv.sPRotationPeriod}>
                    CargoCapacity: {vehicleData?.cargo_capacity}
                  </span>
                  <span className={sv.sPResidents}>
                    Consumables: {vehicleData?.consumables}
                  </span>
                  <span className={sv.sPOrbitalPeriod}>
                    CostInCredits: {vehicleData?.cost_in_credits}
                  </span>
                  <span className={sv.sPDiameter}>
                    Crew: {vehicleData?.crew}
                  </span>
                  <span className={sv.sPClimate}>
                    Length: {vehicleData?.length}
                  </span>
                  <span className={sv.sPGravity}>
                    Height: {vehicleData?.height}
                  </span>
                  <span className={sv.sPTerrain}>
                    Manufacturer: {vehicleData?.manufacturer}
                  </span>
                  <span className={sv.sPSurfaceWater}>
                    MaxAtmospheringSpeed: {vehicleData?.max_atmosphering_speed}
                  </span>
                  <span className={sv.sPPopulation}>
                    Model: {vehicleData?.model}
                  </span>
                  <span className={sv.sPPopulation}>
                    VehicleClass: {vehicleData?.vehicle_class}
                  </span>
                  <span className={sv.sPPopulation}>
                    Created: {vehicleData?.created}
                    Edited: {vehicleData?.edited}
                  </span>
                  <span className={sv.sPPopulation}>
                    Passengers: {vehicleData?.passengers}
                  </span>
                  <span className={sv.sPPopulation}>
                    Pilots: {vehicleData?.pilots}
                  </span>
                  <span className={sv.sPPopulation}>
                    Url: {vehicleData?.url}
                  </span>
                  <span className={sv.sPPopulation}>
                    Films: {vehicleData?.films}
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

export default VehiclePage;
