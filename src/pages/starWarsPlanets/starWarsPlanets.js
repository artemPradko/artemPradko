import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useReducer,
} from 'react';
import { Link } from 'react-router-dom';

import s from './starWarsPlanet.module.scss';

const initialSlides = [
  {
    title: 'StarWars',
    subtitle: 'Planet',
    description: 'Adventure is never far away',
    image: 'https://starwars-visualguide.com/assets/img/planets/4.jpg',
    id: 4,
  },
  {
    title: 'Chamonix',
    subtitle: 'StarWars',
    description: 'Let your dreams come true',
    image: 'https://starwars-visualguide.com/assets/img/planets/5.jpg',
    id: 5,
  },
  {
    title: 'Mimisa Rocks',
    subtitle: 'ArWars',
    description: 'A piece of heaven',
    image: 'https://starwars-visualguide.com/assets/img/planets/6.jpg',
    id: 6,
  },
  //   {
  //     title: 'Four',
  //     subtitle: 'Australia',
  //     description: 'A piece of heaven',
  //     image:
  //       'https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  //   },
  //   {
  //     title: 'Five',
  //     subtitle: 'Australia',
  //     description: 'A piece of heaven',
  //     image:
  //       'https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  //   },
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    const el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty('--px', px);
      el.style.setProperty('--py', py);
    };

    el.addEventListener('mousemove', handleMouseMove);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === 'NEXT') {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === 'PREV') {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className={s.slide}
      data-active={active}
      style={{
        '--offset': offset,
        '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className={s.slideBackground}
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      />
      <div
        className={s.slideContent}
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      >
        <div className={s.slideContentInner}>
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

function PlanetPage() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);
  const [slides, setSlides] = useState(initialSlides);

  if (id === 'NEXT') {
    setSlides(slides + 1);
  }
  if (id === 'PREV') {
    setSlides(slides - 1);
  }

  return (
    <div className={s.slides}>
      <button id={'PREV'} onClick={() => dispatch({ type: 'PREV' })}>
        ‹
      </button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        const offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button id={'NEXT'} onClick={() => dispatch({ type: 'NEXT' })}>
        ›
      </button>
    </div>
  );
}

// function PlanetPage() {
//   const initialState = {
//     slideIndex: 0,
//   };

//   const slidesReducer = (state, event) => {
//     if (event.type === 'NEXT') {
//       return {
//         ...state,
//         slideIndex: (state.slideIndex + 1) % slides.length,
//       };
//     }
//     if (event.type === 'PREV') {
//       return {
//         ...state,
//         slideIndex:
//           state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
//       };
//     }
//   };

//   const [state, dispatch] = useReducer(slidesReducer, initialState);

//   const [planetId, setPlanetId] = useState(1);

//   const [planetData, setPlanetData] = useState(null);

//   const onChange = useCallback((event) => {
//     const { value } = event.target;
//     setPlanetId(value);
//   }, []);

//   const submit = useCallback(() => {
//     async function getPlanet(starPlanetId) {
//       const response = await fetch(
//         `https://swapi.dev/api/planets/${starPlanetId}`
//       );

//       const data = await response.json();
//       const imgData = `https://starwars-visualguide.com/assets/img/planets/${Number(starPlanetId) + 1}.jpg`;

//       const dataWithImg = {
//         ...data,
//         image: imgData,
//       };

//       console.info(dataWithImg);

//       setPlanetData(dataWithImg);
//     }

//     getPlanet(planetId);
//   }, [planetId]);

//   return (
//     <div>
//       <div className="s-p-heroIsRoot">
//         <Link className="s-p-link" to="/">
//           Back
//         </Link>
//         <input
//           className="s-p-searching"
//           name="setHero"
//           onChange={onChange}
//           type="number"
//           placeholder="Search"
//           value={planetId}
//         />
//         <button className="s-p-submitButton" onClick={submit}>
//           Show
//         </button>
//       </div>
//       {planetData && (
//         <div className="s-p-descriptionAndImg">
//           <div className="s-p-image">
//             <img src={planetData?.image} alt="Planet Image" />
//           </div>
//           <div className="s-p-descriptionContainer">
//             <span className="s-p-name">{planetData?.name}</span>
//             <div className="s-p-description">
//               <span className="s-p-details">Description</span>
//               <span className="s-p-rotationPeriod">
//                 RotationPeriod: {planetData?.rotation_period}
//               </span>
//               <span className="s-p-residents">
//                 Residents: {planetData?.residents}
//               </span>
//               <span className="s-p-orbitalPeriod">
//                 OrbitalPeriod: {planetData?.orbital_period}
//               </span>
//               <span className="s-p-diameter">
//                 Diameter: {planetData?.diameter}
//               </span>
//               <span className="s-p-climate">
//                 Climate: {planetData?.climate}
//               </span>
//               <span className="s-p-gravity">
//                 Gravity: {planetData?.gravity}
//               </span>
//               <span className="s-p-terrain">
//                 Terrain: {planetData?.terrain}
//               </span>
//               <span className="s-p-surfaceWater">
//                 SurfaceWater: {planetData?.surface_water}
//               </span>
//               <span className="s-p-population">
//                 Population: {planetData?.population}
//               </span>
//             </div>
//           </div>
//         </div>
//       )}
//       <div className="slides">
//         <button onClick={() => dispatch({ type: 'PREV' })}>‹</button>

//         {[...slides, ...slides, ...slides].map((slide, i) => {
//           const offset = slides.length + (state.slideIndex - i);
//           return <Slide slide={slide} offset={offset} key={i} />;
//         })}
//         <button onClick={() => dispatch({ type: 'NEXT' })}>›</button>
//       </div>
//     </div>
//   );
// }

export default PlanetPage;
