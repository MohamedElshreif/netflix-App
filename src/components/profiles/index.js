import React from 'react';
import {
  Container,
  Title,
  User,
  Name,
  List,
  Picture,
} from './styles/profiles.js';

export default function Profiles({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profiles.Title = function ({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Profiles.User = function ({ children, ...restProps }) {
  return <User {...restProps}>{children}</User>;
};
Profiles.Name = function ({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
Profiles.List = function ({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};
Profiles.Picture = function ({ src, ...restProps }) {
  return (
    <Picture
      {...restProps}
      src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}
    />
  );
};
