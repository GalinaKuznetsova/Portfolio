import React from "react";
import styled from "styled-components";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>Home</li>
        <li>Skill</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 58.75px;
    /* text-align: center;
    align-items: center; */
  }

  li {
    color: #121723;
    font-size: 20px;
    font-weight: 400;
  }
`;
