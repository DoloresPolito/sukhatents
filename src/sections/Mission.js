import React from "react";
import styled from "styled-components";
import { Title, Text } from "../styles/styles";
import Image from 'next/image'
import image from '../../public/assets/newimages/m-v.jpg'
// import { Parallax } from "react-scroll-parallax";

const Mission = () => {
  return (
    <MissionSection id="mission">
         
      <Box>
        <div>
          <MissionTitle>MISIÓN - VISIÓN</MissionTitle>
          <MissionText>
            En nuestra empresa, nos enfocamos en ofrecer servicios de alquiler
            carpas beduinas en variadas formas y tamaños, además de estructuras
            fijas. Estamos comprometidos con proporcionar soluciones adaptables
            y de alta calidad para todo tipo de eventos y ocasiones.<br/><br/>  <b> <i> Nuestra
            misión</i> </b>  es ofrecer a nuestros clientes una experiencia única y
            personalizada, brindando soluciones innovadoras y adaptadas a sus
            necesidades específicas. Como empresa, nos esforzamos por establecer
            relaciones a largo plazo con nuestros clientes y colaboradores,
            basadas en la confianza, la transparencia y el compromiso con la
            excelencia.<br/> <br/>  En cuanto a <b> <i> nuestra visión</i> </b> , nos proyectamos como líderes
            en el mercado de carpas y estructuras para eventos, reconocidos por
            la calidad de nuestros productos y servicios, y por nuestra
            capacidad para adaptarnos a las necesidades del mercado y de
            nuestros clientes.
          </MissionText>
        </div>
    
      </Box>
 

         {/* <Parallax speed={-8}> */}
      <ImageContainer>
        <StyledImage src={image} alt="mission" className="mission" />
      </ImageContainer>
           {/* </Parallax> */}
    </MissionSection>
  );
};


const MissionSection = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 100px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 440px; */
  width: 650px;
  background-color: #eae9e5;
  padding: 10px 50px;
  z-index: 3000 ;
  margin-left: 50px;

  /* position: relative;
  z-index: 2; */

  /* @media screen and (max-width: 540px) {

  } */

  div {
    display: flex;
    flex-direction: column;
  }
`;

const MissionText = styled(Text)`
  max-width: 800px;
  align-self: center;
  text-align: justify;
  font-size: 14px;
  margin-top: -15px;

  @media screen and (max-width: 540px) {
    line-height: 25px;
  }
`;

const MissionTitle = styled(Title)`
  align-self: flex-start;
  margin-top: 15px;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 500;
  right: 0;

  width: 800px;
  height: 586px;
  z-index: 0;
  /* position: relative;
  z-index: 1; */
`;

const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
`;


export default Mission;
