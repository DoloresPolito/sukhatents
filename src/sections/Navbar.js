import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../public/assets/logo/logo_sukha_ig_logo.png";
import Image from "next/image";
import Hamburger from "hamburger-react";
import Menu from "../components/Menu";
import { Link } from "react-scroll";
const Navbar = () => {
  const [width, setWidth] = useState(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize(); // Establecer el ancho inicial

    window.addEventListener("resize", handleResize); // Agregar listener de evento de cambio de tamaño de ventana

    return () => {
      window.removeEventListener("resize", handleResize); // Eliminar listener de evento al desmontar el componente
    };
  }, []);

  const medium = 1200;

  return (
    <>
      <NavbarSection>
        <NavbarContainer>
          <Logo>
            {" "}
            <Image
              src={logo}
              alt="logo"
              style={{ height: "65px", width: "129px" }}
            />
          </Logo>

          {width >= medium ? (
            <>
              <NavLinks>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={800}
                >
                  <NavLink>Quienes somos?</NavLink>
                </Link>

                <Link
                  to="technical"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={800}
                >
                  <NavLink>Carpas sukha</NavLink>
                </Link>

                <Link
                  to="mission"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={800}
                >
                  <NavLink>Misión - Visión</NavLink>
                </Link>

                <Link
                  to="complements"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={800}
                >
                  <NavLink>Complementos</NavLink>
                </Link>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={800}
                >
                <NavLink>Contacto</NavLink>
                </Link>
              </NavLinks>
            </>
          ) : (
            <>
              <Hamburger toggled={isOpen} toggle={setOpen} />

              <Menu open={isOpen} />
            </>
          )}
        </NavbarContainer>
      </NavbarSection>
    </>
  );
};

const NavbarSection = styled.div`
  width: 100%;
  height: 135px;
  background-color: #e0dcc7;
  display: flex;
  justify-content: center;
  align-items: center;
  /* box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.1);  */
  box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.3);
  z-index: 100;

  .hamburger-react {
    position: relative;
    z-index: 6000;
    color: #6a6f58;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;

const Logo = styled.div`
  /* img{
    height: 65px;
    width: 129px;

  } */
`;

const NavLinks = styled.div`
  /* Estilos para los enlaces de navegación */
  display: flex;
  flex-direction: row;
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

export default Navbar;
