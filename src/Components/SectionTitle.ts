import React from "react";

import styled from "styled-components";
import { theme } from "./styles/Theme";
type SectionTitlePropsType = {
    title?: string;
  };
  

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  color:${theme.colors.font};
  font-family: "Josefin Sans", sans-serif;
font-size: 36px;
font-weight: 600;
letter-spacing: 5px;
text-align: center;
margin-bottom: 100px;

position: relative;

&::before {
  content: "";
  display: inline-block;
  width: 55px;
  height: 1px;
  background-color: ${theme.colors.accent};

  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);

  @media ${theme.media.mobile} {
    bottom: -24px;
  }
}

`;
