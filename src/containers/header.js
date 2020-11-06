import React from 'react';
import Header from '../components/header';
import * as Routes from '../constants/routes';
import Logo from '../logo.svg';
export default function HeaderContainer({ showbtn, children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={Routes.Home} alt='Netflix' src={Logo} />
        <Header.ButtonLink showbtn={showbtn} to={Routes.Sign_In}>
          Sign In
        </Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
