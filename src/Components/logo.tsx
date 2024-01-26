import React from "react";
import { Icon } from "./icon/icon";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
export const Logo = () => {
    return <LogoLink onClick={()=>{scroll.scrollToTop()}}>
       <Icon iconId = {'html'} />
    </LogoLink>
   
    
}


const LogoLink = styled.a `
    display: block;
    text-align: center;

  
`