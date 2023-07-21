import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Image from "next/image";
import image from "../../public/assets/images/port.jpeg";

const Cover = () => {
  return (
    <>
      <CoverSection>
        <Navbar />
        <ImageWrapper>
          {" "}
          <Image src={image} alt="portada" />
        </ImageWrapper>
      </CoverSection>
    </>
  );
};

const CoverSection = styled.div`
  width: 100%;
  height: 100vh;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-fit: cover;
    object-position: center bottom;
    margin-top:2px;
  }

  @media screen and (max-width: 768px) {
    height: 600px; /* Adjust the height as per your requirements */
  }
`;
export default Cover;
