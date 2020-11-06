import styled from 'styled-components/macro';

export const Container = styled.div`
  padding: 70px 0;
  width: 100%;
  background: ${({ background }) => (background ? background : '#33333')};
  @media (max-width: 1000px) {
    padding: 30px 15px;
    padding-left: 30px;
    box-sizing: border-box;
  }
`;
export const Content = styled.div`
  max-width: 1000px;
  display: flex;
  margin: auto;
  flex-direction: column;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;
export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 16px;
  text-dicoration: none;
  @media (max-width: 1000px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;
export const Title = styled.p`
  font-size: 18px;
  color: #757575;
  margin-bottom: 40px;
  @media (max-width: 1000px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;
export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
