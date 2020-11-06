import React from 'react';
import Header from '../components/header';
import * as Routes from '../constants/routes';
import logo from '../logo.svg';
import Profiles from '../components/profiles';

export function SlectedProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={Routes.Home} src={logo} alt='Netflix' />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who`s Watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.Picture src={user.photoURL} alt='' />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
