import { createGlobalStyle } from "styled-components"
import { theme } from "./Theme"
import { font } from "./Common"

export const GlobalStyled = createGlobalStyle`
*,
*::before,
*::after {
margin: 0;
padding: 0;
box-sizing: border-box;
}
body {
    font-family: 'Josefin Sans','Poppins', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${theme.colors.font};
  line-height: 1.2;
  min-width: 360px;
}

a {
    text-decoration: none;
    color: ${theme.colors.font};
}

li {
    list-style: none;
}

button {
    background-color: unset;
    border: none;
    cursor: pointer;
    color: ${theme.colors.font};
}

section {
    padding: 100px 0;

    @media ${theme.media.mobile} {
      padding: 80px 0;
    }

}

section:nth-of-type(odd) {
    background-color: ${theme.colors.primaryBg};
}

section:nth-of-type(even) {
  background-color: ${theme.colors.secondaryBg};
}

p {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
}

h1 {
  ${font({family:"'Poppins', sans-serif", weight:400,Fmax:27,Fmin:20})};
}

h2 {
  ${font({weight:700,Fmax:50,Fmin:34})};
 letter-spacing: 2.5px;
}

h3 {

font-size: 16px;
font-weight: 700;
letter-spacing: 1px;
text-transform: uppercase;
}


`
