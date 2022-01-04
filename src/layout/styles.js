import styled, { keyframes } from "styled-components";
import { device } from "../theme/sizes";
import colors from "../theme/colors";

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
  margin: 10px 0;
  text-align: center;
  border: none;

  @media ${device.laptop} {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 10vw;

  height: 4vh;
  border: none;
  margin: 20px 5vw;
  border-radius: 10px;
  text-decoration: none;
  @media ${device.tablet} {
    width: 25vw;
    border-radius: 10px;

    height: 5vh;
  }
`;

export const H1 = styled.h1`
  color: #ff8400;
`;
export const SideBar = styled.div`
  width: 5vw;
  height: 100vh;
  background: red;
  position: fixed;

  justify-content: center;

  @media ${device.tablet} {
    display: none;
    width: 100vw;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
export const HeadBar = styled.div`
  display: none;
  width: 100vw;
  height: 7vh;
  background: red;
  position: fixed;
  @media ${device.tablet} {
    display: flex;
    align-items: center;
    padding: 0 35px;
  }
`;
