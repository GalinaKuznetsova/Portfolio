import styled from "styled-components";
import { Link } from "../../../Components/Link";
import { StyledButton } from "../../../Components/Styledbutton";
import { theme } from "../../../Components/styles/Theme";

const Works= styled.section`
   width: 100%;
   position:relative;
`
const Work = styled.div`
 
  /* width: 330px;
  flex-grow: 1; */


  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }

  /* @media ${theme.media.desktop} {
    max-width: 540px;
  } */
`;
const ImageWrapper = styled.div`
  position: relative;

  &::before {
      content: "";
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(2px);

      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      opacity: 0;
      transition: ${theme.animations.transition};
    }

  &:hover {
   &::before{
    opacity: 1;
   }

    ${StyledButton} {
      opacity: 1;
      transform: translate(-50%, -50%);
      &::before {
        width: 100%;
        height: 100%;
        z-index: -1;
      }
    }
  }
  ${StyledButton} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    transition: ${theme.animations.transition};
  }

  @media ${theme.media.tablet} {

   &::before{
    opacity: 1;
   }

    ${StyledButton} {
      opacity: 1;
    }
  }
`;
const WorkImg = styled.img`
 
  width: 100%;
  min-height: 260px;

  @media ${theme.media.desktop} {
    max-width: 540px;
  }
`;
const WorkWrapper = styled.div`
  background-color:rgba(37, 37, 39, 1);;
  padding: 25px 20px;
`;
const Title = styled.h3``;
const Description = styled.p`
  margin: 10px 0 14px;
`;


export const S = {
    Works,
    Work,
    ImageWrapper,
    WorkImg,
    WorkWrapper,
    Title,
    Description
}