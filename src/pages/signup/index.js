import React, { useState, useContext } from 'react';
import HeaderContainer from '../../containers/header';
import FooterContainer from '../../containers/footer';
import Form from '../../components/form';
import { FirebaseContext } from '../../context/firebase';
import * as Routes from '../../constants/routes';
import { useHistory } from 'react-router-dom';

export default function SignUP() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstName === '' || emailAddress === '' || password === '';

  const handleSignUp = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        });
      })
      .then(() => {
        history.push(Routes.Browse);
      })
      .catch((error) => {
        setPassword('');
        setEmailAddress('');
        setFirstName('');
        setError(error.message);
      });
  };
  return (
    <>
      <HeaderContainer showbtn='true'>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method='POST'>
            <Form.Input
              placeholder='First Name'
              value={firstName}
              type='text'
              onChange={({ target }) => setFirstName(target.value)}
            />
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
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix?
            <Form.Link to={Routes.Sign_In}>Sign In now.</Form.Link>
          </Form.Text>
          <Form.SmallText>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </Form.SmallText>
        </Form>
        <FooterContainer background='rgba(0,0,0,.75)' />
      </HeaderContainer>
    </>
  );
}
