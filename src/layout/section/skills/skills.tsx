import React from "react";
import { Container } from "../../../Components/Contatiner";
import { FlexWrapper } from "../../../Components/FlexWrapper";
import { SectionTitle } from "../../../Components/SectionTitle";
import { Skill } from "./skill/skill";
import { S } from "./Skill_Styles";
import { Fade } from "react-awesome-reveal";

const SkillData = [
  {
    iconId: "html",
    title: "html5",
    descriptoin:
      "Lorem ipsum dolor sit amet, consectetur , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "css",
    title: "css3",
    descriptoin:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "react",
    title: "React",
    descriptoin:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "typeScript",
    title: "TypeScript",
    descriptoin:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "styledComponents",
    title: "styled components",
    descriptoin:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "styledComponents",
    title: "styled components",
    descriptoin:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
];

export const Skills: React.FC = () => {
  return (
    <S.Skills id="skill">
      <Container>
        <SectionTitle> My Skills</SectionTitle>
        <FlexWrapper wrap="wrap" justify="space-between">
        <Fade cascade={true} damping = {0.2}>
          {SkillData.map((s, index) => {
            return <Skill
                  iconId={s.iconId}
                  key={index}
                  title={s.title}
                  descriptoin={s.descriptoin}
                />
          })}
          </Fade>
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
