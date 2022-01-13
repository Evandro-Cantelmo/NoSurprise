import styled, { keyframes } from "styled-components";
import { device } from "../../theme/sizes";
import colors from "../../theme/colors";


export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media ${device.laptop} {
    width: 100%;
  }
`;
export const Card = styled.div`
  width: 30vw;
  height: 60vh;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: #ab4985 5px 5px 20px 0px;


  @media ${device.laptop} {
    width: 30vw;
    margin: 0 10%;
  }
  @media ${device.tablet} {
    width: 50vw;
    margin: 0 10%;
  }
  @media ${device.mobileL} {
    width: 80vw;
    margin: 0 10%;
  }
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;

  @media ${device.mobileL} {
    flex-direction: column;
    align-item: center;
    justify-content: center;
  }
`;
export const Input = styled.input`
  width: 240px;
  height: 4vh;
  border-radius: 3px;
  outline: none;
  margin: 10px 0;
  text-align: center;
  border: none;
`;

export const Button = styled.button`
  width: 110px;
  height: 4vh;
  border: none;
  margin: 10px;
  border-radius: 3px;
  text-decoration: none;
  @media ${device.tablet} {
    height: 5vh;
  }
  @media ${device.mobileL} {
    font-size: 4vw;
  }
`;

export const H1 = styled.h1`
  color: #db6373;
`;

export const ButtonAuth = styled.button`
margin:10px 0;
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
