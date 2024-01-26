import React, { useEffect, useState } from "react";
import { Icon } from "./icon/icon";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

export const GoTopBtn = () => {
  const [showBtn, setshowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setshowBtn(true);
      } else {
        setshowBtn(false);
      }
    });
  }, []);
  return (
    <>
      {showBtn && (
        <StyledGoTopBtn
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <Icon
            width="16px"
            height="15px"
            viewBo="0 0 16 15"
            iconId="arrowGoTop"
          />
        </StyledGoTopBtn>
      )}
    </>
  );
};

const StyledGoTopBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 8px;
  position: fixed;
  right: 30px;
  bottom: 30px;
`;
