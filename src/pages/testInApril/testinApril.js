import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './testInApril.css';

function TestInApril() {

  const [date, setDate] = useState(null);

  const setNewDate = useCallback(() => {
    console.info('SetData')

    setDate(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
  }, [])

  const startTimer = useCallback(() => {
    console.info('startTimer')
    setInterval(
      setNewDate,
      1000
    );
  }, [setNewDate]);

  useEffect(() => {
    // if (!date) {
    setTimeout(startTimer, 2000);
    // }

    // return () => {
    //   clearTimeout(startTimer);
    //   clearInterval(startTimer);
    //   setDate(null);
    // };
  }, [startTimer]);


  function call(a) {
    return function (b) {
      if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
      }
      if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
      }
      if (a === b) {
        return a * b;
      }
      return true;
    };
  }

  const showCallResults = useCallback(() => {
    const callResult = call('I am ');

    console.info('callResult -', callResult);

    const result = callResult('babun');

    console.info('result -', result);
  });

  // function showCallResults() {
  //    const
  // }

  function doSometing(name) {
    return `Hello, ${name}`;
  }

  function loggingDecorator(wrapped) {
    console.info('Wrapped result')
    wrapped.apply(this);
    return wrapped;
  }

  const doSometingWithLogging = loggingDecorator(doSometing)

  const wrappedResult = useCallback( () => {
    console.info('Start')
    console.info(doSometingWithLogging('Graham'))
    console.info('Finish')
  })

  const dateToDisplay = useMemo(() => {
    console.info('dateToDisplay - ', date)
    return date
  }, [date])

  const userData = useMemo(() => {
    console.info('ghfhgf')
    
    return {
      firstName: 'Artem'
    }
  
  }, []) 
  const clozuar = useCallback(() => {
    function a(obgect) {
      if (obgect?.firstName) {
        return function(lastName) {
          console.info(`${obgect?.firstNme} ${obgect?.lastName}`)
        }
      }
      return false;
    }

    const fullName = a(userData)

    fullName('Brozzzz')

    // console.info('Result - ', results)
  }, [userData]) 


  return (
    <div>
      <Link to="/">Back</Link>

      {dateToDisplay}

      <button onClick={showCallResults}>Call</button>
      <button onClick={clozuar}>FullName</button>
      <button onClick={wrappedResult}>Logging Name</button>
      <span></span>
    </div>
  );
}

export default TestInApril;
