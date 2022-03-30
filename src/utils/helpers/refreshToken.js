async function refreshToken(token) {
  console.info('token ===', token);
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const res = await fetch('http://localhost:8000/auth/refresh-tokens', {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow',
    body: JSON.stringify({
      refreshToken: token,
    }),
  });

  const data = await res.json();

  console.info('refresh token data ---', data);

  if (res.status === 200 && data?.accessToken && data?.refreshToken) {
    sessionStorage.setItem('accessToken', data.accessToken);
    sessionStorage.setItem('refreshToken', data.refreshToken);

    return {
      ...data,
    };
  }

  return null;
}

export default refreshToken;
