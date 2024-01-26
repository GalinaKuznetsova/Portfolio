import React from "react";

import { S } from "../HeaderMenu_Styles";
import { Menu } from "../menu/menu";




export const DesktopMenu: React.FC = () => {
  return (
    <S.DesktopMenu>
      <Menu/>
    </S.DesktopMenu>
  );
};
