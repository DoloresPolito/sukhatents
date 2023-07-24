import React from "react";
import styled from "styled-components";
import { Title } from "../styles/styles";
import calendar from "../../public/assets/images/web_calendario.png";
import Image from "next/image";
const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 500px;
  padding: 30px 50px;
  margin-left: 100px;



  @media screen and (max-width: 840px) {
    padding: 30px 0px;
  }

  @media screen and (max-width: 600px) {
    margin-left: 20px;
  }

  @media screen and (max-width: 520px) {
    width: auto;
  }

  
`;

const Row = styled.div`
  display: flex;
  flex: ${(props) => (props.fullWidth ? "1" : "0 0 calc(50% - 10px)")};
  margin-right: ${(props) => (props.fullWidth ? "0" : "20px")};
  margin-bottom: 20px;
  gap: 30px;

  @media screen and (max-width: 740px) {
    flex-direction: column;
    width: 300px;
  }

  @media screen and (max-width: 405px) {
    width: 250px;
  }


`;

// Estilos de las columnas
const Column = styled.div`
  flex: 1;
  padding: 0px 20px;
  /* border: 1px solid #ccc; */

`;

// Estilos para la columna de ancho completo
const FullWidthColumn = styled.div`
  flex: 1;
  padding: 10px;
  /* border: 1px solid #ccc; */
`;

const InputContainer = styled.div`
  width: 100%;
  position: relative;

  input {
    width: 100%;
    padding: 8px;
    border: none;
    border-bottom: 1px solid #ccc;
    background-color: #6a6f58;
    outline: none;
    color: white;


  }

  .last{
      max-width: 445px;
      margin-left: 9px;
    }
  input::placeholder {
    color: #ffffff; /* Estilos para el color del placeholder */
    font-family: "Barlow Condensed", sans-serif;
    font-style: regular;
    font-weight: 400;
    font-size: 18px;
    line-height: 10px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #6a6f58;
  color: #fff;
  border: none;
  cursor: pointer;
  align-self: flex-end;

  color: #ffffff; /* Estilos para el color del placeholder */
  font-family: "Barlow Condensed", sans-serif;
  font-style: regular;
  font-weight: 600;
  font-size: 18px;
  /* margin-left: 18px; */
  border-bottom: 1px solid #ccc;
  max-width: 70px;
  margin-left: 405px;
`;

const Formulario = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <FormContainer>
          <ContactTitle>CONTACTO</ContactTitle>
          <Row>
            <Column>
              <InputContainer>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nombre y Apellido"
                />
              </InputContainer>
            </Column>
            <Column>
              <InputContainer>
                <input
                  type="text"
                  id="date"
                  name="date"
                  placeholder="Fecha del evento"
                />
              </InputContainer>
            </Column>
          </Row>
          <Row>
            <Column>
              <InputContainer>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Teléfono"
                />
              </InputContainer>
            </Column>
            <Column>
              <InputContainer>
                <input
                  type="text"
                  id="place"
                  name="place"
                  placeholder="Lugar del evento"
                />
              </InputContainer>
            </Column>
          </Row>

          <Row>
            <Column>
              <InputContainer>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </InputContainer>
            </Column>
            <Column>
              <InputContainer>
                <input
                  type="text"
                  id="people"
                  name="people"
                  placeholder="Cantidad de personas"
                />
              </InputContainer>
            </Column>
          </Row>

          <Row fullWidth>
            <FullWidthColumn>
              <InputContainer>
                <input
                  as="text"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Mensaje"
                  className="last"
                />
              </InputContainer>
            </FullWidthColumn>
          </Row>
          <Row>
            <Button type="submit">ENVIAR</Button>
          </Row>
        </FormContainer>
      </ContactContainer>

      <Box>
        <BoxText>CONSULTÁ LA FECHA<br/> DE TU EVENTO </BoxText>
        <Image src={calendar} alt="calendar" />
      </Box>
    </ContactSection>
  );
};

const ContactSection = styled.div`
  width: 100%;
  height: auto;
`;

const ContactContainer = styled.div`
  width: 80%;
  height: auto;
  background-color: #6a6f58;
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 405px) {
    width: 100%;
  }

`;

const ContactTitle = styled(Title)`
  color: #ffffff;
  margin-left: 20px;
`;

const Box = styled.div`
  height: 410px !important;
  width: 350px;
  background-color: #e0dcc7;
  position: relative;
  top: -435px;
  left: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1300px) {
    display: none;
  }


`;

const BoxText = styled(Title)`
font-size: 24px;
line-height: 28px;
margin-left: -110px;

`
export default Formulario;
