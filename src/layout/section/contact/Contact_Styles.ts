import styled from "styled-components";
import { StyledButton } from "../../../Components/Styledbutton";

const Contact = styled.section`
position:relative;

  ${StyledButton} {
   margin: 0 auto;
   margin-top:9px;
  }
`;
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 540px;
margin: 0 auto;

${StyledButton} {
  margin: 0 auto;
}

  textarea {
    resize: none;
    height: 155px;
  }
`;

const ContactInput = styled.input`
  color: #495057;

  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.6px;
  border: 1px solid #4a4a4a;
  width: 100%;
  padding: 7px 15px;
  background-color: #252527;

  &::placeholder {
    color: #495057;
    font-size: 20px;
    font-weight: 400;
  }

  &:focus-visible {
    outline: 2px solid#495057;
  }
`;

export const S = {
    Contact,
    ContactForm,
    ContactInput
}
