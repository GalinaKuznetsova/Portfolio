import styled from "styled-components";
import { theme } from "../../../Components/styles/Theme";

const Skills = styled.section`
  width: 100%;
  position: relative;
`;
const Skill = styled.div`
  width: 330px;
  flex-grow: 1;
  padding: 45px 20px 0px;

  @media ${theme.media.mobile} {
    padding: 62px 0 40px;
  }
`;

export const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    transform: rotate(45deg) translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.10);

    position: absolute;
    top: 50%;
    left: 50%;
    /* Центрируем точку, от которой происходит трансформация */
    transform-origin:top left ;  
  }
`
const SkillText = styled.div`
  width: 100%;
  padding: 0px 40px 40px 30px;

`;

const Title = styled.h3`
margin: 70px 0 15px;
  text-align: center;
`;
const Description = styled.p`
 text-align: center;
`;


export const S = {
Skills,
Skill,
IconWrapper,
SkillText,
Title,
Description
}