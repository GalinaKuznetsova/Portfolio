import React from "react";
import { S } from "./../Work_Stylles";
import { StyledButton } from "../../../../Components/Styledbutton";
import { Link } from "../../../../Components/Link";

type WorkPropsType = {
  src: string;
  title: string;
  descriptoin: string;
};
export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
  return (
    <S.Work>
      <S.ImageWrapper>
        <S.WorkImg src={props.src} />
        <StyledButton>view project</StyledButton>
      </S.ImageWrapper>
      <S.WorkWrapper>
        <S.Title>{props.title}</S.Title>
        <S.Description>{props.descriptoin}</S.Description>
        <Link href="">demo</Link>
        <Link active href="">Code</Link>
      </S.WorkWrapper>
    </S.Work>
  );
};
