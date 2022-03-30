import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import './loginStyles.css';

const initialState = {
  name: '',
  lastName: '',
  password: '',
  email: '',
};

function SignUpPage() {
  const [dataState, setDataState] = useState(initialState);
  const [registrationState, setRegistrationState] = useState();

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
      const registration = await fetch(
        'http://localhost:8000/auth/registration',
        {
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
            name: dataState?.name,
            lastName: dataState?.lastName,
            password: dataState?.password,
            email: dataState?.email,
          }),
        }
      );
      console.info('registration --', registration);

      if (registration.status === 200) {
        setRegistrationState('User created!');
      }
      if (registration.status === 422) {
        setRegistrationState('User email already exits');
      }

      return registration;
    } catch (error) {
      setRegistrationState('Internal server error');
      return error;
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
          type="text"
          name="name"
          placeholder="Name"
          onChange={onChange}
          value={dataState?.name}
        />
        <input
          className="registrationValues"
          type="text"
          name="lastName"
          placeholder="Last name"
          onChange={onChange}
          value={dataState?.lastName}
        />
        <input
          className="registrationValues"
          type="text"
          name="password"
          placeholder="Password"
          onChange={onChange}
          value={dataState?.password}
        />
        <input
          className="registrationValues"
          type="text"
          name="email"
          placeholder="Email"
          onChange={onChange}
          value={dataState?.email}
        />
      </div>
      <button className="registrationValues" onClick={onSubmit}>
        Submit
      </button>
      <h1>{registrationState}</h1>
    </div>
  );
}

export default SignUpPage;
