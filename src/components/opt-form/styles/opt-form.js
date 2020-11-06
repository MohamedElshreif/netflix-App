import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: max-content;
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0 15px;
    box-sizing: border-box;
  }
`;
export const Button = styled.button`
  display: flex;
  outline: none;
  align-items: center;
  height: 65px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 21px;
  border: none;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 12px;
    height: 45px;
    margin-top: 20px;
    font-weight: bold;
  }
  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 17px;
    @media (max-width: 768px) {
      width: 12px;
    }
  }
`;
export const Input = styled.input`
  max-width: 590px;
  width: 100%;
  border: none;
  outline: none;
  padding: 10px;
  height: 65px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    font-size: 12px;
    height: 45px;
  }
`;
export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 22px;
    margin-top: 0;
  }
`;
