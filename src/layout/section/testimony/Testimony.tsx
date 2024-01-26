import React from "react";
import { Container } from "../../../Components/Contatiner"
import { FlexWrapper } from "../../../Components/FlexWrapper"
import styled from "styled-components";
import { Icon } from "../../../Components/icon/icon";
import { SectionTitle } from "../../../Components/SectionTitle";
import {IconWrapper} from "../skills/Skill_Styles"
import { Slider } from "../../../Components/slider/slider";








export const Testimony:React.FC = () => {
    return (
        <StyledTestimony >
            <Container>
            <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction="column" align="center">
                    <IconWrapper>
                    <Icon iconId="testimony" />
                    </IconWrapper>
       <Slider />
                              </FlexWrapper>
            </Container>
         
        </StyledTestimony>
    )
}

const StyledTestimony = styled.section`
    background-color: #aeb9ff;
    min-height: 50vh;
    position: relative;

    ${IconWrapper} {
        margin: 40px 0 72px;
    }

   
`