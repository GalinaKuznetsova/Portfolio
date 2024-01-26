import React from "react";
import { S } from "./Slider_Styles";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./../styles/Slider.css"

type SlidePropsType = {
    text: string
    userName:string
}

const Slide = (props:SlidePropsType) =>{
    return (
    <S.Slide>
    <S.Text>   {props.text}    </S.Text>
    <S.Name>{props.userName}</S.Name>
    </S.Slide>
    )
}

const items = [
 <Slide userName={"Galina"} text={"ssgfsdvdvd"}/>,
 <Slide userName={"Sofia"} text={"sdvsdvsdvsdv"}/>,
 <Slide userName={"Tuana"}  text={"xvsvsfaaaaaaa"}/>,
 <Slide userName={"Vladimir"} text={"sdvsdvsdvdv"}/>
];

export const Slider = () => (
  <S.Slider>
    <AliceCarousel mouseTracking items={items} />
  </S.Slider>
);