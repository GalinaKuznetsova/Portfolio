
import styled, { css } from "styled-components";
import { theme } from "./styles/Theme";

export const Link = styled.a<{active?:boolean}>`
padding: 10px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
  z-index: 0;
  

 &:hover {
    &::before {
        height: 12px;
    }
 }
  &::before {
    content: "";
    display: inline-block;
    width: 100%;
   
    background-color: ${theme.colors.accent};

    position: absolute;
    right: 0;
   left: 0;
   bottom: 2px;
   z-index: -1;
  height: 0;

    transition: ${theme.animations.transition};

   ${props => props.active && css<{active?:boolean}>`
   height:10px;
   `}
 
  }
`;