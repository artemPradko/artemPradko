import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import getRefreshTokens from '../utils/helpers/refreshToken';

import NotificationLayout from '../components/layouts/notificationLayout/NotificationLayout';

import './loginStyles.css';

const initialState = {
  oldPassword: '',
  newPassword: '',
  confirmNewPassword: '',
};

function ChangePasswordPage() {
  const [dataState, setDataState] = useState(initialState);
  const [messageState, setMessageState] = useState();

  const { oldPassword, newPassword, confirmNewPassword } = dataState;

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
      if (
        !oldPassword ||
        !newPassword ||
        !confirmNewPassword ||
        newPassword !== confirmNewPassword
      ) {
        return setMessageState('Fill all inputs');
      }
      const accessTokenData = sessionStorage.getItem('accessToken');
      const refreshTokenData = localStorage.getItem('refreshToken');
      const res = await fetch('http://localhost:8000/account/change-password', {
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
          oldPassword: dataState.oldPassword,
          newPassword: dataState.newPassword,
        }),
      });

      const resData = res.json();

      if (res.status === 200) {
        setMessageState(resData);
        return true;
      }
      if (res.status === 403) {
        setMessageState('Paroletto incorrecto');
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
  }, [confirmNewPassword, dataState, newPassword, oldPassword]);

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
          name="oldPassword"
          value={dataState.oldPassword}
          placeholder="OldPassword"
        />
        <input
          className="registrationValues"
          type="text"
          onChange={onChange}
          name="newPassword"
          value={dataState.newPassword}
          placeholder="newPassword"
        />
        <input
          className="registrationValues"
          type="text"
          onChange={onChange}
          name="confirmNewPassword"
          value={dataState.confirmNewPassword}
          placeholder="confirmNewPassword"
        />
      </div>
      <button className="registrationValues" onClick={onSubmit}>
        Submit
      </button>
      <h1>{messageState}</h1>
    </div>
  );
}

const ChangePasswordPageWithToast = NotificationLayout(ChangePasswordPage);

export default ChangePasswordPageWithToast;
