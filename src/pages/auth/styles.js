import styled, { keyframes } from "styled-components";
import { device } from "../../theme/sizes";
import colors from "../../theme/colors";


export const InEffect = keyframes`
0% {

  transform: rotate3d(0, 1, 0, 100deg);

  transition-timing-function: ease-in;

  }
  100% {

  transform: perspective(300px);
  }
`

export const Container = styled.div`
  display: flex;
  background: #ff8400;
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
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: #444 5px 5px 20px 0px;
  animation-name: ${InEffect};
  animation-duration: 1s;

  @media ${device.laptop} {
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
  width: 15vw;
  height: 4vh;
  border-radius: 20px;
  outline: none;
  text-align:center;

  @media ${device.laptop} {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 5vw;
  height: 4vh;
  border: none;
  margin:20px 0;
  border-radius: 20px;
  text-decoration:none;
`;

export const H1 = styled.h1`

  color: #ff8400;
`;
