import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
// import { SessionService } from '../../../express-first/src/services/session';

import getRefreshTokens from '../utils/helpers/refreshToken';

import './loginStyles.css';

const initialState = {
  password: '',
  email: '',
};

function SignInPage() {
  const [dataState, setDataState] = useState(initialState);
  const [logoutState, setLogoutState] = useState();
  const [getResults, setGetResults] = useState();
  const [registrationState, setRegistrationState] = useState();
  const [isAuthorized, setIsAuthorized] = useState(false);

  const onChange = useCallback((event) => {
    console.info('event ---', event);

    const { name, value } = event.target;

    setDataState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const onClick = useCallback(async () => {
    try {
      const refreshTokenData = sessionStorage.getItem('refreshToken');

      const registration = await fetch('http://localhost:8000/auth/logout', {
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
          refreshToken: refreshTokenData,
        }),
      });
      console.info('registration --', registration);

      if (registration.status === 200) {
        setLogoutState('User is logged out from current session.');
      }
    } catch (error) {
      setLogoutState('Internal server error');
      return error;
    }
  }, []);

  const onSubmit = useCallback(async () => {
    try {
      const registration = await fetch('http://localhost:8000/auth/login', {
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
          password: dataState?.password,
          email: dataState?.email,
        }),
      });

      const data = await registration.json();
      const { accessToken, refreshToken, expiresIn } = data;
      console.info('registration --', registration, data);

      if (registration.status === 200) {
        setRegistrationState('You login to your account!');
        localStorage.setItem('refreshToken', refreshToken);
        sessionStorage.setItem('accessToken', accessToken);
        sessionStorage.setItem('isAuthorized', true);
        setDataState(initialState);
        sessionStorage.setItem('expiresIn', expiresIn);
        setIsAuthorized(true);
      }
      if (registration.status === 403) {
        setRegistrationState('Finish registration');
        setDataState(initialState);
      }
      if (registration.status === 400) {
        setRegistrationState('Password incorrect');
      }

      return registration;
    } catch (err) {
      setRegistrationState('Internal server error');
      console.info('submit ---', err);
      return err;
    }
  }, [dataState]);

  const getUser = useCallback(async () => {
    try {
      const accessTokenData = sessionStorage.getItem('accessToken');
      const refreshTokenData = localStorage.getItem('refreshToken');
      const expTime = sessionStorage.getItem('expiresIn');
      console.info(
        'token Data getUser ---',
        accessTokenData,
        '&&',
        refreshTokenData
      );
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      const res = await fetch('http://localhost:8000/users/get-by-id', {
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
          accessToken: accessTokenData,
          refreshToken: refreshTokenData,
          expiresIn: expTime,
        }),
      });

      if (res.status === 200) {
        console.info('accessToken');
        const data = await res.json();

        setGetResults(JSON.stringify(data));
      }
      if (res.status === 403) {
        console.info('refreshToken');

        const { accessToken: newAccessToken, refreshToken } =
          await getRefreshTokens(refreshTokenData);

        if (newAccessToken) {
          await getUser();
        }

        // const data = await res.json();

        // setGetResults(JSON.stringify(data));
      }

      console.info('getUser ---', res);

      return res;
    } catch (err) {
      setGetResults('Internal server error');
      console.info('gerUser ---', err);
      return err;
    }
  }, []);

  return (
    <div className="root">
      <div className="registrationValuesRoot">
        <Link className="registrationValues" to="/">
          Back
        </Link>
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
      <h1 className="results">{registrationState}</h1>
      <button className="registrationValues" onClick={onClick}>
        Logout
      </button>
      <h2 className="results">{logoutState}</h2>
      {isAuthorized && <Link to="/changePassword">Change password</Link>}
      <div>
        <button className="registrationValues" onClick={getUser}>
          Get user
        </button>
        <h1 className="results">{getResults}</h1>
      </div>
    </div>
  );
}

export default SignInPage;
