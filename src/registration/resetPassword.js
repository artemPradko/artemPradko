import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import './loginStyles.css';

const initialState = {
  email: '',
};

function ResetPasswordPage() {
  const [dataState, setDataState] = useState(initialState);
  const [resultsState, setResultsState] = useState('');

  const onChange = useCallback((event) => {
    console.info('event ---', event);

    const { name, value } = event.target;

    setDataState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const onSubmit = useCallback(async () => {
    try {
      const res = await fetch('http://localhost:8000/auth/reset-password', {
        mode: 'cors',
        method: 'POST',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
          email: dataState.email,
        }),
      });

      if (res.status === 200) {
        const data = await res.json();

        setResultsState(JSON.stringify(data));
        return true;
      }
      if (res.status === 404) {
        setResultsState('User not found');
      }
    } catch (err) {
      setResultsState('Internal Server Error');
    }
  }, [dataState]);

  return (
    <div className="root">
      <div className="registrationValuesRoot">
        <Link className="registrationValues" to="/">
          Back
        </Link>
        <input
          className="registrationValues"
          name="email"
          type="text"
          placeholder="Email"
          value={dataState.email}
          onChange={onChange}
        />
      </div>
      <button className="registrationValues" onClick={onSubmit}>
        Submit
      </button>
      <h1 className="results">{resultsState}</h1>
    </div>
  );
}

export default ResetPasswordPage;
