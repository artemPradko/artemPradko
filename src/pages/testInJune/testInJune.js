import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './testInJune.css';

function Result() {

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

 const wrap = useCallback(() => {
  async function viewHero(hero) {
    const heroUrl = await fetch(
      'https://swapi.dev/documentation#people/',
      hero
    );
    const alertHero = console.info(heroUrl(hero));
  
    
  }
 })




return (
  <div>
    <input name="setHero" onChange={onChange} type="text" />
    <button>Show</button>
  </div>
);

}

export default Result;
