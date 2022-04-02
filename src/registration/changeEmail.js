import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import getRefreshTokens from '../utils/helpers/refreshToken';

import NotificationLayout from '../components/layouts/notificationLayout/NotificationLayout';

import './loginStyles.css';

const initialState = {
  email: '',
  confirmNewEmail: '',
};

function ChangeEmailPage() {
  const [dataState, setDataState] = useState(initialState);
  const [messageState, setMessageState] = useState();
  const [isClick, setIsClick] = useState(false);

  const { email, confirmNewEmail } = dataState;

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
      // if (!emailData || !confirmNewEmail || emailData !== confirmNewEmail) {
      //   return setMessageState('Fill all inputs or write correct email');
      // }
      const accessTokenData = sessionStorage.getItem('accessToken');
      const refreshTokenData = localStorage.getItem('refreshToken');
      const res = await fetch('http://localhost:8000/account/change-email', {
        mode: 'cors',
        method: 'PUT',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
          accessToken: accessTokenData,
          newEmail: email,
        }),
      });

      const data = await res.json();

      if (res.status === 200) {
        setMessageState(JSON.stringify(data));
        setIsClick(true);
        return true;
      }
      if (res.status === 404) {
        setMessageState(JSON.stringify(data));
      }
      if (res.status === 436) {
        console.info('refreshToken');

        const { accessToken: newAccessToken } = await getRefreshTokens(
          refreshTokenData
        );

        if (newAccessToken) {
          sessionStorage.setItem('accessToken', newAccessToken);
          await onSubmit();
          setMessageState('Vrai');
        }
      }
    } catch (err) {
      setMessageState('Internal server error');
      return err;
    }
  }, [email]);

  const onCancel = useCallback(async () => {
    try {
      const accessTokenData = sessionStorage.getItem('accessToken');
      const refreshTokenData = localStorage.getItem('refreshToken');
      const res = await fetch(
        'http://localhost:8000/account/cancel-email-changing',
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
            accessToken: accessTokenData,
          }),
        }
      );

      const data = await res.json();

      if (res.status === 200) {
        setMessageState(JSON.stringify(data));
        return true;
      }
      if (res.status === 404) {
        setMessageState(JSON.stringify(data));
      }
      if (res.status === 436) {
        console.info('refreshToken');

        const { accessToken: newAccessToken } = await getRefreshTokens(
          refreshTokenData
        );

        if (newAccessToken) {
          sessionStorage.setItem('accessToken', newAccessToken);
          await onCancel();
          setMessageState('Vrai');
        }
      }
    } catch (err) {
      setMessageState('Internal server error');
      return err;
    }
  }, []);

  const resentToken = useCallback(async () => {
    try {
      const accessTokenData = sessionStorage.getItem('accessToken');
      const refreshTokenData = localStorage.getItem('refreshToken');
      const res = await fetch(
        'http://localhost:8000/account/resent-email-new-token',
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
            accessToken: accessTokenData,
            email,
          }),
        }
      );

      const data = await res.json();

      if (res.status === 200) {
        setMessageState(JSON.stringify(data));
        return true;
      }
      if (res.status === 404) {
        setMessageState(JSON.stringify(data));
      }
      if (res.status === 436) {
        console.info('refreshToken');

        const { accessToken: newAccessToken } = await getRefreshTokens(
          refreshTokenData
        );

        if (newAccessToken) {
          sessionStorage.setItem('accessToken', newAccessToken);
          await resentToken();
          setMessageState('Vrai');
        }
      }
    } catch (err) {
      setMessageState('Internal server error');
      return err;
    }
  }, [email]);

  return (
    <div className="root">
      <div className="registrationValuesRoot">
        <Link className="registrationValues" to="/">
          Back
        </Link>
        <input
          className="registrationValues"
          type="text"
          onChange={onChange}
          name="email"
          value={dataState.email}
          placeholder="New email"
        />
        <input
          className="registrationValues"
          type="text"
          onChange={onChange}
          name="confirmNewEmail"
          value={dataState.confirmNewEmail}
          placeholder="Confirm new email"
        />
      </div>
      <button className="registrationValues" onClick={onSubmit}>
        Submit
      </button>
      {isClick && (
        <button className="registrationValues" onClick={resentToken}>
          Sent token again
        </button>
      )}
      <Link
        style={{ width: '222px' }}
        to="/signIn"
        className="registrationValues"
        onClick={onCancel}
      >
        Cancel email changing
      </Link>
      <h1>{messageState}</h1>
    </div>
  );
}

const ChangeEmailPageWithToast = NotificationLayout(ChangeEmailPage);

export default ChangeEmailPageWithToast;
