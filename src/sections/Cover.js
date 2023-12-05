import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Image from "next/image";
import image from "../../public/assets/newimages/home.jpg";

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
    object-position: center bottom;
    /* object-position: 100% ; */
    margin-top:2px;
  }

  @media screen and (max-width: 768px) {
    height: 600px; /* Adjust the height as per your requirements */
  }
`;
export default Cover;
