import React from 'react';
import {
  Container,
  Row,
  Title,
  Column,
  Text,
  Break,
  Link,
  Content,
} from './styles/footer';

export default function Footer({ background, children, ...restProps }) {
  return (
    <Container {...restProps} background={background}>
      {children}
    </Container>
  );
}
Footer.Content = function FooterContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};
Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};
Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Footer.Break = function FooterBreak({ children, ...restProps }) {
  return <Break {...restProps}>{children}</Break>;
};
