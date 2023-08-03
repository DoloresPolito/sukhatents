import styled from "styled-components";

export const Title = styled.h1`
  /* font-family: "Bebas Neue"; */
  font-family: var(--font-bebasneue);
  color: #6a6f58;
  font-weight: 400;
  line-height: 150%;
  font-size: 40px;
  letter-spacing: 2px;
`;

export const Text = styled.p`
 /* font-family: 'Barlow Semi Condensed', sans-serif; */
 font-family: var(--font-barlowsemicondensed);
  color: #6a6f58;
  font-style: regular;
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;

`;

export const Container = styled.div`
  margin: auto;
  width: 80%;
  max-width: 1140px;
  @media only screen and (min-width: 701px) and (max-width: 1200px) {
    max-width: 90%;
  }
  @media only screen and (min-width: 1900px) {
    margin: auto;
  }
  @media only screen and (max-width: 700px) {
    max-width: 95%;
    margin: 0 24px;
    padding: 24px 0;
  }
`;
