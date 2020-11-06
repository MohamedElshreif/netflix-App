import React, { useState, useContext, createContext } from 'react';
import {
  Group,
  Title,
  SubTitle,
  Text,
  Meta,
  Item,
  FeatureTitle,
  Maturity,
  FeatureClose,
  FeatureText,
  Container,
  Image,
  Feature,
  Content,
  Entities,
} from './styles/card';

export const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});
  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, setItemFeature, itemFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}
Card.Group = function ({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
Card.Title = function ({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Card.SubTitle = function ({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Card.Entities = function ({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};
Card.Text = function ({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Card.Meta = function ({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};
Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};
Card.Image = function ({ ...restProps }) {
  return <Image {...restProps} />;
};
Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(
    FeatureContext
  );
  return showFeature ? (
    <Feature
      {...restProps}
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src='/images/icons/close.png' alt='Close' />
        </FeatureClose>

        <Group margin='30px 0' flexDirection='row' alignItems='center'>
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight='bold'>
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>

        {children}
      </Content>
    </Feature>
  ) : null;
};
