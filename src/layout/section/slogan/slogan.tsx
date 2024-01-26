import React from "react";
import styled from "styled-components";
import { Container } from "../../../Components/Contatiner";
import { SectionTitle } from "../../../Components/SectionTitle";
import { StyledButton } from "../../../Components/Styledbutton";
import { FlexWrapper } from "../../../Components/FlexWrapper";

export const Slogan: React.FC = () => {
  return (
    <StyledSlogan id="slogan">
      <Container>
      <FlexWrapper direction="column" align="center">
        <SectionTitle>I Am Available For Freelance</SectionTitle>
        <StyledButton>Hire me</StyledButton>
      </FlexWrapper>
       </Container>
       </StyledSlogan>
      
  );
};

const StyledSlogan = styled.section`
`;
