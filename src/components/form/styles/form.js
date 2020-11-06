import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 630px;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  padding: 70px 65px;
  margin-bottom: 120px;
  max-width: 445px;
  @media (max-width: 768px) {
    width: 78%;
    padding: 30px 30px;
    min-height: 445px;
  }
`;

export const Error = styled.div`
  backround: #e87c03;
  border-reaius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
  @media (max-width: 768px) {
    font-size: 23px;
  }
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const SmallText = styled.p`
  color: #8c8c8c;
  margin-top: 10px;
  line-height: normal;
  font-size: 13px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Links = styled(ReachRouterLink)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: white;
  height: 40px;
  line-height: 40px;
  padding: 5px 20px;
  margin-bottom: 20px;
  outline: none;
  &:last-of-type {
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    height: 31px;
    line-height: 31px;
    &:last-of-type {
      margin-bottom: 15px;
    }
  }
`;

export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  font-weight: bold;
  margin: 24px 0px;
  padding: 18px;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 12px;
    margin: 6px 0px;
  }
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;
