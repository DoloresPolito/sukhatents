import React from "react";
import styled from "styled-components";
import { Title, Text } from "../styles/styles";
import Image from "next/image";
import front from "../../public/assets/icons/web_frente.png";
import side from "../../public/assets/icons/web_cenital.png";
import capacity1 from "../../public/assets/icons/web_122.png";
import capacity2 from "../../public/assets/icons/web_152.png";

const Technical = () => {
  return (
    <>
      <TechnicalSection id="technical">
        <TechnicalContainer>
          <TechnicalTitle>CARPAS SUKHA</TechnicalTitle>
          <Box>
            <Measures>
              <TechnicalSubtitle>Medidas</TechnicalSubtitle>
              <TechnicalImages>
                <div>
                <Image src={front} alt="front" />
                </div>
                <div>
                <Image src={side} alt="side" />
                </div>
              </TechnicalImages>

              <TechnicalText>
                <b> PESO:</b> 65 kg - <b> DIMENSIONES:</b> 6,25 x 14,65 x 22,5
                metros <br />
                <b>
                  {" "}
                  <i> Resistencia a altos vientos</i>
                </b>
              </TechnicalText>
            </Measures>


            <Capacity>
              <TechnicalSubtitle>Capacidad</TechnicalSubtitle>
              <TechnicalImages>
                <div>
                  <Image src={capacity1} alt="capacity1" />
                  <PhotoText>Capacidad para 122 personas</PhotoText>
                </div>
                <div>
                  <Image src={capacity2} alt="capacity2" />
                  <PhotoText>Capacidad para 152 personas</PhotoText>
                </div>
              </TechnicalImages>
            </Capacity>
          </Box>
        </TechnicalContainer>
      </TechnicalSection>
    </>
  );
};

const TechnicalSection = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 50px;
`;

const TechnicalContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const TechnicalTitle = styled(Title)`
  align-self: flex-start;
`;
const TechnicalSubtitle = styled(Title)`
  align-self: flex-start;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 30px;
  font-weight: 600;
`;

const TechnicalText = styled(Text)`
  align-self: center;
  max-width: 320px;
  text-align: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-around;
  height: auto;
`;

const TechnicalImages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap !important;
  height: auto;
  margin-left: 10px;


@media screen and (max-width: 670px) {

  flex-direction: column !important;
  justify-content: center;
align-items: center;
}


`;

const Measures = styled.div`
  display: flex;
  flex-direction: column !important;
  /* flex-wrap: wrap; */
  max-width: 670px;
  min-width: 640px;

  height: 200px;
  height: auto;


  @media screen and (max-width: 670px) {
    min-width: 340px;
    padding: 20px;
  }

  @media screen and (max-width: 360px) {
    min-width: 300px;
    padding: 20px;
  }
`;

const Capacity = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  max-width: 670px;
  min-width: 640px;

  height: 200px;
  height: auto;

  @media screen and (max-width: 670px) {
    min-width: 340px;
    padding: 20px;
 
  }

  @media screen and (max-width: 360px) {
    min-width: 300px;
    padding: 20px;
  }
`;

const PhotoText = styled(Text)`
  max-width: 200px;
  align-self: center;
  justify-self: center;

`;

export default Technical;
