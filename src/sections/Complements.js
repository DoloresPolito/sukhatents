import React from "react";
import styled from "styled-components";
import { Title, Text } from "../styles/styles";
import Image from "next/image";
import traslado from "../../public/assets/icons/traslado.png";
import montaje from "../../public/assets/icons/montaje.png";
import pisos from "../../public/assets/icons/pisos.png";
import clima from "../../public/assets/icons/clima.png";
import { Parallax } from "react-scroll-parallax";
const Complements = () => {
  return (
    <>
      <ComplementsSection id="complements">
        <ComplementsContainer>
             <Parallax speed={2}> 
          <ComplementsTitle>COMPLEMENTOS</ComplementsTitle>
          </Parallax> 
          <ComplementsText>
            Ofrecemos un completo servicio de alquiler de carpas, el cual
            incluye:
          </ComplementsText>

          <IconsContainer>
            <Box>
              <Image src={traslado} alt="traslado" />
              <p> <b> <i>Traslado</i> </b> ida y <br/>  vuelta de la carpa.</p>
            </Box>

            <Box>
              <Image src={montaje} alt="montaje" />
              <p> <b> <i>Montaje y desmontaje</i></b><br/> de la carpas.</p>
            </Box>

            <Box>
              <Image src={pisos} alt="pisos" />
              <p>
                Carpas  <b> <i>aptas para <br/> cesped.</i> </b>
                {/* :césped, arena,<br/> 
                cemento, suelos<br/>  irregulares y pendientes. */}
              </p>
            </Box>

            <Box>
              <Image src={clima} alt="clima" />
              <p>Carpados  <b> <i>impermeables,<br/>  térmicos y refractarios</i></b><br/>  de rayos UV.</p>
            </Box>
          </IconsContainer>
        </ComplementsContainer>

        <Parallax speed={3}> 
        <Bottom>
          <BottomText>
            Además, ofrecemos una <b><i>variedad de complementos </i></b>que pueden
            personalizar su evento aún más, incluyendo fogoneros, luces y pisos.
            Todos estos complementos están disponibles para alquiler
            individualmente, lo que significa que puede elegir solo los que
            mejor se adapten a sus necesidades específicas.<br/><br/> Nuestro servicio de
            alquiler de carpas está <b><i>diseñado para brindar la mejor experiencia
            posible </i></b>a nuestros clientes, asegurando una solución completa y
            personalizada para sus necesidades de evento.
          </BottomText>
        </Bottom>

        </Parallax> 
      </ComplementsSection>
    </>
  );
};

const ComplementsSection = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 50px;
`;

const ComplementsContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const ComplementsTitle = styled(Title)`
  align-self: flex-start;
`;

const ComplementsText = styled(Text)`
  align-self: flex-start;
  margin-top: -30px;
`;

const IconsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 370px;
  /* margin-top: -30px; */
  img {
    padding-bottom: 10px;
  }

  p {
    max-width: 200px;
    /* font-family: "Barlow Semi Condensed", sans-serif; */
    font-family: var(--font-barlowsemicondensed);
    color: #6a6f58;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
  }
`;
const Bottom = styled.div`
  width: 100%;
  background-color: #e0dcc7;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const BottomText = styled.p`
  /* font-family: "Barlow Semi Condensed", sans-serif; */
  font-family: var(--font-barlowsemicondensed);
  color: #6a6f58;
  font-weight: 400;
  font-size: 15px;
  line-height: 28px;
  max-width: 740px;
  padding: 20px 50px;
`;

export default Complements;
