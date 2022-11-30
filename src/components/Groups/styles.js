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

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    width: 90vw;
    padding: 0px 10px;
  }
`;

export const Div = styled.div`
  width: 50vw;
  height: 60vh;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
 

  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    width: 70vw;


  }
  @media ${device.mobileL} {
    width:80vw;
    font-size:4vw;

  }

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
  width: 15vw;
  height: 4vh;
  border-radius: 20px;
  outline: none;
  margin: 10px;
  text-align: center;
  border: none;

  @media ${device.laptop} {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 5vw;
  height: 4vh;
  border: none;
  margin: 20px 0;
  border-radius: 20px;
  text-decoration: none;
`;

export const H1 = styled.h1`
  color: #ff8400;
`;
