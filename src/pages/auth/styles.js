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
`;
export const BackEffect = keyframes`
0% {
  background: #19dcea;
}
20% {
  background: #b22cff;
}
40% {
  background: #ea2222;
}
60% {
  background: #f5be10;
}
80% {
  background: #3bd80d;
}
100% {
  background: #19dcea;
}
`;

export const Container = styled.div`
  display: flex;
  animation-name: ${BackEffect};
  animation-duration: 30s;
  animation-iteration-count: infinite;
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
  width: 35vw;
  height: 5vh;
  border-radius: 20px;
  outline: none;
  margin: 10px 0;
  text-align: center;
  border: none;

  @media ${device.tablet} {
    width: 50vw;
  }
`;

export const Button = styled.button`
  width: 10vw;

  height: 5vh;
  border: none;
  margin: 20px 0;
  border-radius: 10px;
  text-decoration: none;
  @media ${device.tablet} {
    width: 25vw;
    border-radius: 10px;
    
    height: 5vh;
  }
  @media ${device.mobileL} {
    font-size: 3vw;
  }
`;

export const H1 = styled.h1`
  color: #ff8400;
`;
