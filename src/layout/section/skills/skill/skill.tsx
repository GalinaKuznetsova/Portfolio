import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../Components/FlexWrapper";
import { Icon } from "../../../../Components/icon/icon";
import { theme } from "../../../../Components/styles/Theme";
import { S } from "./../Skill_Styles";

type SkillPropsType = {
  iconId: string;
  title?: string;
  descriptoin?: string;
};
export const Skill:React.FC<SkillPropsType>= (props: SkillPropsType) => {
  return (
    <S.Skill>
      <FlexWrapper direction="column" align="center">
        <S.IconWrapper>
          <Icon iconId={props.iconId} />
        </S.IconWrapper>
        <S.SkillText>
          <S.Title>{props.title}</S.Title>
          <S.Description>{props.descriptoin}</S.Description>
        </S.SkillText>
      </FlexWrapper>
    </S.Skill>
  );
};
