import React from "react";
import { Logo } from "../../Components/logo";
import { Menu } from "../../Components/menu";
import { FlexWrapper } from "../../Components/FlexWrapper";
import { Container } from "../../Components/Contatiner";
import { Icon } from "../../Components/icon/icon";
import { S } from "./Footer_Styles";

const socialItemData = [
  {
    iconId: "instagram",
  },
  {
    iconId: "telegram",
  },
  {
    iconId: "vk",
  },
  {
    iconId: "linkedin",
  },
];
export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper direction="column" justify="centar" align="center">
          <S.Name>Galina </S.Name>
          <S.SocialList>
            {socialItemData.map((s, index) => {
              return (
                <S.SocialItem key={index}>
                  <S.SocialLink>
                    <Icon
                      height="21px"
                      width="21px"
                      viewBo="0 0 21 21"
                      iconId={s.iconId}
                    />
                  </S.SocialLink>
                </S.SocialItem>
              );
            })}
          </S.SocialList>
          <S.Copyright>
            © 2023 Galina Kuznetsova, All Rights Reserved.
          </S.Copyright>
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};
