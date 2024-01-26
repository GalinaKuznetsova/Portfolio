import React from "react";
import styled from "styled-components";
import { theme } from "./styles/Theme";

type StyledButtonTypeProps = {
  border?: string;
};

export const StyledButton = styled.button<StyledButtonTypeProps>`
  border: none;
  background: none;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 170px;
  height: 32px;
  position: relative;

  &:hover {
    z-index: 0;
    &::before{
    width: 100%;
    height: 100%;
    z-index: -1;
    }
  }
 
  &::before{
        content: "";
        display:inline-block;
        width: 50%;
        height: 10px;
        background-color: ${theme.colors.accent};
        transition: ${theme.animations.transition};

        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);

    }

  
`;
