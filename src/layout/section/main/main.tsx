import React from "react";
import { FlexWrapper } from "../../../Components/FlexWrapper";
import photo from "../../../assets/images/photo1.webp";
import { Container } from "../../../Components/Contatiner";
import { S } from "./Main_Styles";
import Typewriter from "typewriter-effect";
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
  return (
    <S.Main id="home">
      <Container>
        <FlexWrapper align="center" justify="space-around" wrap="wrap">
          <S.MainText>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>
              I am <span>Galina Kuznetsova</span>
            </S.Name>
            <S.MainTitle>
              <p>A Web Developer.</p>
              <Typewriter
                options={{
                  strings: ["A Web Developer."],
                  autoStart: true,
                  loop: true,
                  delay: 50
                }}
              />{" "}
            </S.MainTitle>
          </S.MainText>
          <Tilt
           className="parallax-effect-img"
           tiltMaxAngleX={40}
           tiltMaxAngleY={40}
           perspective={800}
           transitionSpeed={1500}
           scale={1.1}
           gyroscope={true}>
          <S.PhotoWrapper>
            <S.MainPhoto src={photo} alt="" />
          </S.PhotoWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
