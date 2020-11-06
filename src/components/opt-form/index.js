import React from 'react';
import { Container, Button, Input, Text } from './styles/opt-form.js';

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function ({ ...restProps }) {
  return <Input {...restProps} />;
};
OptForm.Button = function ({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <img src='/images/icons/chevron-right.png' alt='Try Now' />
    </Button>
  );
};
OptForm.Text = function ({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
