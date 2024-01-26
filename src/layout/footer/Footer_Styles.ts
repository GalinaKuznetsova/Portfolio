import styled from "styled-components";
import { theme } from "../../Components/styles/Theme";
import { font } from "../../Components/styles/Common";

const Footer = styled.footer`
    padding: 40px 0;
    background-color: ${theme.colors.primaryBg};

    position: relative;
`
const Name = styled.span`
 ${font({family:"'Josefin Sans', sans-serif", weight:700,Fmax:22,Fmin:16})};
letter-spacing: 3px;
`;
const SocialList = styled.ul`
display:flex;
gap:20px;
margin: 30px 0;
`;
const SocialItem = styled.li`
`;
const SocialLink = styled.a`
display: flex;
justify-content: center;
align-items: center;
width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.10);
  color: ${theme.colors.accent};
  transition: ${theme.animations.transition};

 
&:hover {
  background-color: ${theme.colors.accent};
  color: ${theme.colors.secondaryBg};
  transform: translateY(-4px);

}
`
const Copyright = styled.small`
 opacity: 0.5;
text-align: center;
font-size: 12px;
font-weight: 400;

`
export const S = {
    Footer,
    Name,
    SocialItem,
    SocialList,
    SocialLink,
    Copyright
}