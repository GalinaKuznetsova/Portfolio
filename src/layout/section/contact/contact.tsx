import React, { ElementRef, useRef } from "react";
import { SectionTitle } from "../../../Components/SectionTitle";
import { Container } from "../../../Components/Contatiner";
import { StyledButton } from "../../../Components/Styledbutton";
import { S } from "./Contact_Styles";
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const form = useRef<ElementRef<'form'>>(null);

  const sendEmail = (e:any) => {
    e.preventDefault();
    if (!form.current) return
    emailjs.sendForm('service_mxllhym', 'template_85ycdsm', form.current, 'G0BWuFcIGUaqz_Bca')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    };
  return (
    <S.Contact id="contact">
      <Container>
        <SectionTitle color="white">Contact</SectionTitle>
        <S.ContactForm ref={form} onSubmit={sendEmail}>
          <S.ContactInput required placeholder={"name"} name={"user_name"} />
          <S.ContactInput required placeholder={"email"} name={"email"} />
          <S.ContactInput required placeholder={"subject"} name={"subject"} />
          <S.ContactInput
            required placeholder={"message"} as={"textarea"} name = {"message"}
          ></S.ContactInput>
          <StyledButton type={"submit"}>Send message</StyledButton>
        </S.ContactForm>
      </Container>
    </S.Contact>
  );
};
