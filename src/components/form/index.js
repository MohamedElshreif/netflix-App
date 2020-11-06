import React from 'react';
import {
  Container,
  Error,
  Title,
  Text,
  SmallText,
  Links,
  Input,
  Submit,
  Base,
} from './styles/form';

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Error = function ({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};
Form.Base = function ({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = function ({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Link = function ({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>;
};
Form.Input = function ({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function ({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};
Form.Text = function ({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Form.SmallText = function ({ children, ...restProps }) {
  return <SmallText {...restProps}>{children}</SmallText>;
};
