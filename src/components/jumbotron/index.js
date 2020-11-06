import React from 'react';
import {
  Inner,
  Container,
  Pane,
  Item,
  Title,
  SubTitle,
  Image,
} from './styles/jumbotron';

export default function Jumbotron({
  direction = 'row',
  children,
  ...restProps
}) {
  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function ({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Jumbotron.Pane = function ({ direction, children, ...restProps }) {
  return (
    <Pane {...restProps} direction={direction}>
      {children}
    </Pane>
  );
};
Jumbotron.Title = function ({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Jumbotron.SubTitle = function ({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Jumbotron.Image = function ({ children, ...restProps }) {
  return <Image {...restProps} />;
};
