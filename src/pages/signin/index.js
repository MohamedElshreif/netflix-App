import React, { useState, useContext } from 'react';
import HeaderContainer from '../../containers/header';
import FooterContainer from '../../containers/footer';
import Form from '../../components/form';
import { FirebaseContext } from '../../context/firebase';
import * as Routes from '../../constants/routes';
import { useHistory } from 'react-router-dom';

export default function SignIN() {
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');
  const history = useHistory();

  const isInvalid = emailAddress === '' || password === '';
  const handleSignIn = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(Routes.Browse);
      })
      .catch((error) => {
        setPassword('');
        setEmailAddress('');
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer showbtn='true'>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method='post'>
            <Form.Input
              placeholder='Email Address'
              value={emailAddress}
              type='text'
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              placeholder='Password'
              type='password'
              autoComplete='off'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type='submit'>
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix?
            <Form.Link to={Routes.Sign_UP}>Sign up now.</Form.Link>
          </Form.Text>
          <Form.SmallText>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <Form.Link to={Routes.Sign_In}>Learn more.</Form.Link>
          </Form.SmallText>
        </Form>
        <FooterContainer background='rgba(0,0,0,.75)' />
      </HeaderContainer>
    </>
  );
}
