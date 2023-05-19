import React, { useState } from 'react';
import { constants } from 'helpers';
//import { useLoginByGoogleMutation } from './services';
import LogInBox from './parts/LogInBox';
import Background from './parts/Background';

//const BackgroundImg =  require('assets/img/background.png');

const LogInPage = () => {
  //const [errorMessage, setErrorMessage] = useState('');
  //const [loginByGoogle, { isLoading }] = useLoginByGoogleMutation();

  const onSuccessGGLogin = async (res) => {
    const requestData = {
      token: res.credential
    };
    const { data } = await loginByGoogle(requestData);

    if (data.success) {
      const { email, token } = data.data;

      localStorage.setItem('username', email);
      localStorage.setItem('email', email);
      localStorage.setItem('token', token);
      window.location.href = constants.router.loadMonitoring; //TODO
      return;
    }

    setErrorMessage(data.message);
  };

  const onFailureGGLogin = () => {
    //setErrorMessage('Login failed');
  };

  return (
    <Background >
      <LogInBox
        //onSuccessGGLogin={onSuccessGGLogin}
        //onFailureGGLogin={onFailureGGLogin}
        //errorMessage={errorMessage}
        //isLoading={isLoading}
        />
    </Background>
  );
};

export default LogInPage;
