import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 780px;
  margin: 0 auto;
  margin-top: 120px;
  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;
export const Title = styled.h1`
  color: white;
  font-size: 70px;
  font-weight: 700;
  margin: auto;
  @media (max-width: 768px) {
    font-size: 35px;
  }
`;
export const Text = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: auto;
  @media (max-width: 768px) {
    font-size: 21px;
    margin-bottom: 0;
    margin-top: 22px;
  }
`;
