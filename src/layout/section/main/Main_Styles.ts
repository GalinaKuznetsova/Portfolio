import styled from "styled-components";
import { theme } from "../../../Components/styles/Theme";

const Main = styled.section`
  display: flex;
  min-height: 100vh;
`;
const MainText = styled.div``;
const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
`;
const MainTitle = styled.h1`
p {display:none}
`;
const Name = styled.h2`
  margin: 10px 0;


  span {
    display: inline-block;
    position: relative;
    z-index: 0;
    white-space: nowrap;

    &::before {
      content: "";
      display: inline-block;
      background: ${theme.colors.accent};
      height: 20px;
      width: 100%;

      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }

  @media ${theme.media.mobile} {
  margin: 15px 0 22px;
}
`;
const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  cursor: pointer;

  &::before {
    content: "";
    display: inline-block;
    width: 340px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};

    position: absolute;
    right: -20px;
    top: -24px;
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      right: -18px;
    top: -21px;
    }
  }

  @media ${theme.media.mobile} {
    margin-top: 65px;
  }
`;
const MainPhoto = styled.img`
  max-width: 320px;
  width: 100%;
  min-height: 350px;
  object-fit: cover;
  margin-right: 20px;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`;

export const S ={
    Main,
    MainText,
    SmallText,
    MainTitle,
    Name,
    PhotoWrapper,
    MainPhoto
}
