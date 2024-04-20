import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
   const [x, setX] = useState(window.scrollX);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
   const updateScrollPositions = () => {
     setY(window.scrollY);
     setX(window.scrollX); // Update x on each scroll event
   };

   window.addEventListener('scroll', updateScrollPositions);
   return () => window.removeEventListener('scroll', updateScrollPositions);
  }, [y,x]);


  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className='flexCenter animate whiteBg '
        style={y > 90 ? { height: '90px' } : { height: '110px' }}
      >
        <NavInner className='container flexSpaceCenter'>
          <Link className='pointer flexNullCenter' to='home' smooth={true}>
            {/* <LogoIcon /> */}
            <h1 style={{ marginLeft: '15px' }} className='font20 extraBold'>
              Baigom Transport Express
            </h1>
          </Link>
          <BurderWrapper
            className='pointer'
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className='flexNullCenter '>
            <li className='semiBold font20 pointer'>
              <Link
                activeClass='active'
                style={{ padding: '10px 15px' }}
                to='home'
                spy={true}
                smooth={true}
                offset={-80}
              >
                Accueil
              </Link>
            </li>
            <li className='semiBold font20 pointer'>
              <Link
                activeClass='active'
                style={{ padding: '10px 15px' }}
                to='services'
                spy={true}
                smooth={true}
                offset={-80}
              >
                Services
              </Link>
            </li>
            <li className='semiBold font20 pointer'>
              <Link
                activeClass='active'
                style={{ padding: '10px 15px' }}
                to='contact'
                spy={true}
                smooth={true}
                offset={-80}
              >
                Contact
              </Link>
            </li>
          </UlWrapper>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;



