import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Background,
  Container,
  Logo,
  Button,
  Feature,
  Text,
  Group,
  FeatureCallOut,
  TextLink,
  Dropdown,
  Profile,
  Picture,
  Search,
  SearchInput,
  SearchIcon,
  PlayButton,
} from './styles/header.js';

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function ({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function ({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};
Header.Picture = function ({ src, ...restProps }) {
  return <Picture src={`/images/users/${src}.png`} {...restProps} />;
};
Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState('true');

  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
        data-testid='search-click'
      >
        <img src='/images/icons/search.png' alt='Search' />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder='Search Films And Series'
        active={searchActive}
        data-testid='search-input'
      />
    </Search>
  );
};
Header.PlayButton = function ({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};
Header.Dropdown = function ({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};
Header.Profile = function ({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};
Header.Group = function ({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
Header.TextLink = function ({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
};
Header.FeatureCallOut = function ({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};
Header.Feature = function ({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};
Header.Text = function ({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Header.ButtonLink = function ({ showbtn, to, children, ...restProps }) {
  return (
    <Button to={to} {...restProps} showbtn={showbtn}>
      {children}
    </Button>
  );
};
