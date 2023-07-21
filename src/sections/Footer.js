import React from "react";
import styled from "styled-components";
import logo from "../../public/assets/logo/logo_sukha_ig_logo.png";
import { Text } from "../styles/styles";
import Image from "next/image";
import phone from "../../public/assets/icons/phone100.png";
import instagram from "../../public/assets/icons/instagram.png";
import email from "../../public/assets/icons/email.png";
import { Link } from "react-scroll";
const FooterContainer = styled.footer`
  background-color: #e0dcc7;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const LeftColumn = styled.div`
  flex: 1;
  padding-left: 80px;

  img{
    height: 70px;
    width: 100px;

 
  }
`;

const RightColumn = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 2;

  img{
    height: 20px;
    width: 20px;
    padding-right: 10px;
    /* margin-top: 3px;
    padding-top: 3px; */
 
  }

  a{
    text-decoration: none;

    font-family: 'Barlow Condensed', sans-serif;
  color: #6a6f58;
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
  letter-spacing: 1px;
  }

  .uno {

    width: 200px;
    display: flex;
    flex-direction: column;
  }
  .dos {
    width: 200px;
  }
`;

// const CenterText = styled.div`
//   flex: 1;
//   text-align: center;
//   background-color: red;
//   font-weight: bold;
//   margin-left: 200px;
// `;

const FooterNavText = styled(Text)`
  line-height: 1px;
  cursor: pointer;
`;

const FooterTitle = styled(Text)`

font-size: 20px;
font-weight: 600;
letter-spacing: 1.5px;
`

const Footer = () => {
  return (
    <FooterContainer>
      <LeftColumn>
        <Image src={logo} alt="logo" />

        <NavLinks>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={800}
                >
                  <FooterNavText>Quienes somos?</FooterNavText>
                </Link>

                <Link
                  to="technical"
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={800}
                >
                  <FooterNavText>Carpas sukha</FooterNavText>
                </Link>

                <Link
                  to="mission"
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={800}
                >
                  <FooterNavText>Misión - Visión</FooterNavText>
                </Link>

                <Link
                  to="complements"
                  spy={true}
                  smooth={true}
                   offset={30}
                  duration={800}
                >
                  <FooterNavText>Complementos</FooterNavText>
                </Link>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                   offset={30}
                  duration={800}
                >
                <FooterNavText>Contacto</FooterNavText>
                </Link>
              </NavLinks>
     
      </LeftColumn>
      {/* <CenterText>Sukha Tents | 2023</CenterText> */}
      <RightColumn>
        <div className="uno">
          <FooterTitle>Contacto</FooterTitle>

          <a
            href="https://api.whatsapp.com/send/?phone=543446584076"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={phone} alt="phone" />
            +543446584076
          </a>

          <a href="mailto:sukhatents@gmail.com">
            {" "}
            <Image src={email} alt="email" />
            sukhatents@gmail.com
          </a>
        </div>

        <div className="dos">
          <FooterTitle>SEGUINOS</FooterTitle>
          <a
            href="https://www.instagram.com/sukhatents/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Image src={instagram} alt="instagram" />
            Sukha Tents
          </a>
        </div>
        {/* Contenido de la segunda columna derecha */}
      </RightColumn>
    </FooterContainer>
  );
};

const NavLinks = styled.div`
  /* Estilos para los enlaces de navegación */
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const NavLink = styled.p`
  /* Estilos para cada enlace */
  text-decoration: none;
  /* margin-right: ${(props) => (props.last ? "0" : "50px")}; */
  margin-right: 50px;
  font-family: "Barlow Condensed", sans-serif;
  color: #6a6f58;
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
  letter-spacing: 1px;
  cursor: pointer;
`;

export default Footer;
