import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Menu = ({ open, setOpen }) => {


  const handleClose = () => {
    setOpen(false);
  };


  return (
    <StyledMenu open={open} aria-label="menu">
      <Link to="about" spy={true} smooth={true} offset={30} duration={800}          onClick={() => handleClose()}>
        <NavLink>Quienes somos?</NavLink>
      </Link>

      <Link to="technical" spy={true} smooth={true} offset={-30} duration={800} onClick={() => handleClose()}>
        <NavLink>Carpas sukha</NavLink>
      </Link>

      <Link to="mission" spy={true} smooth={true} offset={-130} duration={800} onClick={() => handleClose()}>
        <NavLink>Misión - Visión</NavLink>
      </Link>

      <Link
        to="complements"
        spy={true}
        smooth={true}
        offset={30}
        duration={800}
        onClick={() => handleClose()}
      >
        <NavLink>Complementos</NavLink>
      </Link>

      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={30}
        duration={800}
        onClick={() => handleClose()}
      >
        <NavLink>Contacto</NavLink>
      </Link>
    </StyledMenu>
  );
};

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #e0dcc7;
  height: 100%;
  text-align: left;
  padding: 150px 100px 30px 30px;
  position: fixed;
  z-index: 5000;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
`;

const NavLink = styled.p`
  text-decoration: none;
  /* margin-right: ${(props) => (props.last ? "0" : "50px")}; */
  margin-right: 50px;
  font-family: "Barlow Condensed", sans-serif;
  color: #6a6f58;
  font-weight: 300;
  font-size: 17px;
  line-height: 30px;
  letter-spacing: 1px;
  cursor: pointer;
`;

export default Menu;
