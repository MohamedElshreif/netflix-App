import styled from 'styled-components/macro';

export const Item = styled.div`
  display: flex;
  width: 100%;
  padding: 50px 5%;
  box-sizing: border-box;
  justify-content: center;
  border-bottom: 8px solid #222;
  overflow: hidden;
`;
export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  box-sizing: border-box;
  color: #fff;
  width: 100%;
  margin: auto;
  flex-direction: ${({ direction }) => direction};

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const Pane = styled.div`
  width: 50%;
  text-align: ${({ direction }) => (direction === 'row' ? 'right' : 'left')};
  @media (max-width: 1000px) {
    width: 100%;
    text-align: center;
    padding: 0 45px;
  }
`;
export const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 8px;
  line-height: 1.1;
  @media (max-width: 768px) {
    font-size: 27px;
  }
`;
export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
export const Image = styled.img`
  width: 85%;
  height: auto;
`;
export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
