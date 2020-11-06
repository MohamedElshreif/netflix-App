import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 780px;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.webp` : '../images/misc/home-bg.webp'})
    top left / cover no-repeat;
  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none;`}
  }
  @media (max-width: 768px) {
    min-height: 595px;
    height: 90vh;
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 15px;
  }
`;

export const TextLink = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-size: 22px;
  letter-spacing: 2px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    margin-right: 13px;
    font-size: 14px;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  background-color: #44444459;
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  outline: none;
  font-size: 14px;
  margin-left: ${({ active }) => (active === true ? '10px' : '0')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  width: ${({ active }) => (active === true ? '200px' : '0px')};
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  svg {
    color: white;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: 0;
  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const Button = styled(ReachRouterLink)`
  display: ${({ showbtn }) => (showbtn ? 'none' : 'block')} !important;
  background-color: #e50914;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 6px;
  padding: 12px 32px;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  box-sizing: border-box;
  &:hover {
    background: #f40612;
  }
  @media (max-width: 768px) {
    font-size: 13px;
    border-radius: 5px;
    padding: 9px 24px;
  }
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: cover;
  border: 0;
  width: 32px;
  height: 32px;
  outline: none;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 20px;
  width: 125px;
  top: 32px;
  right: 0px;
  ${Group}:last-of-type ${TextLink} {
    cursor: pointer;
  }
  ${Group} {
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
    ${TextLink}, ${Picture} {
      cursor: default;
    }
  }
  button {
    margin-right: 10px;
  }
  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;
  button {
    cursor: pointer;
  }
  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const Feature = styled(Container)`
  flex-direction: column;
  align-items: normal;
  width: 50%;
  height: max-content;
  margin-top: 8%;
  @media (max-width: 768px) {
    width: 93%;
    margin-top: 18%;
    height: max-content
  }
`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 45px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 21px;
  width: 645px;
  line-height: 1.5;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  @media (max-width: 768px) {
    font-size: 15px;
    width: 97%;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  display: inline-block;
  margin-right: 130px;
  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
  @media (max-width: 768px) {
    width: 85px;
    margin-right: 12px;
  }
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;
