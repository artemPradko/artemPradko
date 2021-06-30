import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './testInJune.css';

function SwapyPage() {

  const [heroId, setHeroId] = useState(1);

  const onChange = useCallback((event) => {
    const { name, value } = event.target;
    setHeroId((prevState) => {
      const newHeroId = {
        ...prevState,
        [name]: value,
      };
      return newheroId;
    });
  }, []);

 const submit = useCallback(() => {
  async function getHero(heroId) {
    const response = await fetch(
      `https://swapi.dev/documentation#people/${heroId}`
    );

    const data = await response.json()
  
   
  }

  getHero(setHeroId)
 }, []);

return (
  <div>
    <input name="setHero" onChange={onChange} type="text" value={setHeroId} />
    <button onClick={submit}>Show</button>
  </div>
);

}

export default SwapyPage;
