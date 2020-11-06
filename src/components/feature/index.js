import React from 'react';
import { Container, Title, Text } from './styles/feature';

export default function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Title = function ({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.Text = function ({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
