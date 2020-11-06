import React, { useContext, useState, createContext } from 'react';
import {
  Container,
  Inner,
  Title,
  Frame,
  Header,
  Body,
  Item,
} from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function ContainerTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Accordion.Frame = function ContainerFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
Accordion.Item = function ContainerItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider
      value={{ toggleShow, setToggleShow }}
      {...restProps}
    >
      <Item>{children}</Item>
    </ToggleContext.Provider>
  );
};
Accordion.Header = function ContainerHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restProps}
    >
      {children}
      {toggleShow ? (
        <img src='./images/icons/close-slim.png' alt='close' />
      ) : (
        <img src='./images/icons/add.png' alt='open' />
      )}
    </Header>
  );
};
Accordion.Body = function ContainerBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);
  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
