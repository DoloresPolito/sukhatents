import React from "react";
import styled from "styled-components";
import { Title, Text } from "../styles/styles";
import Image from "next/image";
import image from "../../public/assets/newimages/q-s.jpg";
import { Parallax } from "react-scroll-parallax";
const About = () => {
  return (
    <AboutSection id="about">
      <ImageWrapper>
        <Image src={image} alt="quienes somos" className="about-image" />
      </ImageWrapper>
 
      <Content>

        <div>
        <Parallax speed={-2}> 
          <AboutTitle>¿QUIÉNES SOMOS?</AboutTitle>
          </Parallax> 
          {/* <Parallax speed={-3}>  */}
          <AboutText>
            Somos una empresa especializada en el{" "}
            <b>
              {" "}
              <i> alquiler de carpas para eventos</i>
            </b>
            , con una amplia trayectoria en el mercado. Nos destacamos por
            brindar un servicio altamente personalizado al cliente, generando un
            clima de confianza y satisfacción en cada uno de nuestros proyectos.
            Contamos con una amplia gama de productos y servicios de excelente
            calidad, lo que nos permite ofrecer soluciones adaptadas a las
            necesidades específicas de cada evento. Desde eventos corporativos y
            sociales hasta deportivos, nuestras carpas y servicios son ideales
            para cualquier tipo de ocasión. Nos enfocamos en ofrecer a nuestros
            clientes una experiencia única, asegurándonos de que cada detalle
            esté cuidado para que su evento sea un éxito asegurado.
          </AboutText>
          {/* </Parallax>  */}
        </div>

      </Content>

    </AboutSection>
  );
};

const AboutSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  padding-bottom: 50px;

  @media screen and (max-width: 720px) {
    flex-direction: column;

  }
`;

const ImageWrapper = styled.div`
  flex: 50%;
  height: 550px;
  max-width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Adjust the height of the image for smaller screens */
  @media screen and (max-width: 1140px) {
    height: 600px; /* Set the desired height for the image */
    display: flex;
    align-items: center; /* Center the image vertically */
    justify-content: center; /* Center the image horizontally */
    img {
      object-fit: cover;
    }
  }

  @media screen and (max-width: 720px) {
    order:2;
  }

`;

const Content = styled.div`
  background-color: white;
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  flex: 50%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1140px) {
    width: 100%;
  }

  @media screen and (max-width: 720px) {
    height: auto;
    margin: 20px 0px;
    order:1

  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

const AboutText = styled(Text)`
  max-width: 500px;
  align-self: center;

  text-align: justify;

  @media screen and (max-width: 1140px) {
    max-width: 400px;
  }

  @media screen and (max-width: 915px) {
    max-width: 300px;
    font-size: 14px;
    margin-top: -15px;
  }

  @media screen and (max-width: 720px) {
    margin-top: 0px;
    max-width: 600px;
    padding: 30px;

  }
`;

const AboutTitle = styled(Title)`
  align-self: flex-end;

  @media screen and (max-width: 915px) {
    margin-top: -20px;
  }

  @media screen and (max-width: 720px) {
    margin-top: 0px;

  }

  @media screen and (max-width: 720px) {

    padding: 30px;

  }
`;

export default About;
