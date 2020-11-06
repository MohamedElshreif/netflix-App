import styled from 'styled-components/macro';

export const Title = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    margin-left: 28px;
    font-size: 14px;
  }
`;

export const Container = styled.div`
  display: flex;s
  flex-direction: column;
  margin-bottom: 0;
  flex-wrap: wrap;
  box-sizing: border-box;
  > ${Title} {
    @media (max-width: 768px) {
      margin-left: 30px;
    }
  }
  @media(max-width:768px){
    margin-bottom: 5px;
  }
`;

export const Group = styled.div`
  display: flex;
  overflow: hidden;
  padding: 25px 0;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === 'row' ? 'row' : 'column'};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};
  @media(max-width:768px){
    padding: 20px 0;
  }
`;

export const SubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    margin-bottom: 19px;
  }
`;

export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
`;

export const Image = styled.img`
  border: 0;
  width: 280px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
  @media (max-width: 768px) {
    width: 130px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.3);
    z-index: 99;
  }
  @media (min-width: 1200px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
      display: block;
      z-index: 100;
    }
  }
  &:first-of-type {
    margin-left: 56px;
    @media (max-width: 768px) {
      margin-left: 30px;
    }
  }
  &:last-of-type {
    margin-right: 56px;
    @media (max-width: 768px) {
      margin-right: 30px;
    }
  }
`;

export const FeatureText = styled.p`
  font-size: 20px;
  color: white;
  line-height: 1.5;
  font-weight: ${({ fontWeight }) =>
    fontWeight === 'bold' ? 'bold' : 'normal'};
  margin: 0;
  @media (max-width: 600px) {
    line-height: 22px;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 360px;
  width:100%;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;
  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;
    ${Title} {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    ${FeatureText} {
      font-size: 13px;
    }
  }
`;

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;

export const FeatureClose = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const Content = styled.div`
  margin: 20px 50px;
  max-width: 500px;
  line-height: normal;
  @media (max-width: 768px) {
    margin: 20px;
    max-width: none;
  }
`;

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? 'red' : 'green')};
  border-radius: 15px;
  width: 25px;
  padding: 10px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 15px;
  @media(max-width : 768px){
    width: 18px;
    font-size: 12px;
  }
`;
