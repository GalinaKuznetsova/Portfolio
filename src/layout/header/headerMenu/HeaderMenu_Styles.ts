import { theme } from './../../../Components/styles/Theme';
import styled, { css } from "styled-components";
import { Link } from "react-scroll";

//Menu
const MenuItem = styled.li`
  position: relative;
  
`;
const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  color: #7572d5;
  transition: ${theme.animations.transition};

  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;

const NavLink = styled(Link)`
  color: transparent;
  font-family: "Josefin Sans", sans-serif;
  font-size: 30px;
  font-weight: 400;
  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: #7572d5;

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    /* Прячем линию */
    transform: scale(0); 
    transition: ${theme.animations.transition};
  }

  &:hover,
  &.active {
    &::before {
      transform: scale(1);
    }
    ${Mask} {
      transform: skewX(12deg);
      transform: translate(5px);
      color: ${theme.colors.font};

      /* Вместо & получается ${Mask} */
      & + ${Mask} {
        transform: skewX(12deg);
        transform: translate(-5px);
      }
    }
  }
`;

// DeskpotMenu
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }

`;

//MobileMenu

const MobileMenu = styled.nav` `;

const MobileMenuPopup = styled.div<{isOpen:boolean}>`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 99999;
background-color: rgba(31, 31, 32, 0.90);
display: flex;
justify-content: center;
align-items: center;
transform: translateY(-100%);
transition: 1s ease-in-out;



ul{
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  gap: 10px;
  transition: .6s ease-in-out;
}

${(props)=>props.isOpen && css<{isOpen : boolean}>`
 transform: translateY(0);

 & ul {
    gap: 40px;
 }

`}
`;

  const BurgerButton = styled.button<{isOpen:boolean}>`
  position: fixed;
  width: 200px;
  height: 200px;
  top:-100px;
  right: -100px;
  flex-direction: column;


  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};

    position: absolute;
    left:20px;
    bottom: 50px;

    ${(props)=>props.isOpen && css<{isOpen : boolean}>`
  
    background-color:rgba(255, 255, 255, 0);
  `}

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);

      ${(props)=>props.isOpen && css<{isOpen : boolean}>`
    transform: rotate(-45deg) translateY(0);
    width: 36px;
    
  `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);

      ${(props)=>props.isOpen && css<{isOpen : boolean}>`
    transform: rotate(45deg) translateY(0);
    width: 36px;
    
  `}
    }
  }
`;

export const S = {
    NavLink,
    MenuItem,
    Mask,
    DesktopMenu,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton
}