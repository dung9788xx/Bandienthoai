import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import * as images from '../../../images';

const Wrapper = styled.div`
overflow: hidden;
margin: 0;
padding: 0;
padding-left: 10%;
background-color: #333;
`;
const HeaderItem = styled.a`
float: left;
color: #f2f2f2;
text-align: center;
padding: 14px 16px;
text-decoration: none !important;
font-size: 1.3rem;

&:hover {
  background-color: #ddd;
  color: black;
}
`;
const HeaderSearch = styled.input`
  float: left;
  color: black;
  text-align: center;
  padding: 14px 16px;
  margin-top: 5px;
  margin-left: 5%;
  height: 5px;
  width: 30%;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.3rem;

  &:focus {
    outline: none;
  }
`;
const FloatingButton = styled.div`
  position: fixed;
  bottom: 3rem;
  cursor: pointer;
  right: 1rem;
`;
const Image = styled.img`
height: 4rem;
width: 4rem;
`;

function Header() {
  const [isShowScroll, setShowScroll] = useState(false);
  const ref = useRef(null);
  const location = useLocation();
  const activeStyle = {
    backgroundColor: '#ddd',
    color: ' black',
  };
  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    });
  }, []);

  const scrollButton = () => (
    <FloatingButton>
      <Image
        alt=""
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
        src={images.toTopIcon}
      />
    </FloatingButton>
  );
  return (
    <Wrapper ref={ref}>
      <HeaderItem style={location.pathname === '/' ? activeStyle : {}} href="/">TRANG CHỦ</HeaderItem>
      <HeaderItem href="#news">APPLE IPHONE</HeaderItem>
      <HeaderItem href="#contact">TABLET</HeaderItem>
      <HeaderItem href="#about">PHỤ KIỆN</HeaderItem>
      <HeaderSearch placeholder="Tìm kiếm" type="text" />
      {isShowScroll && scrollButton()}
    </Wrapper>
  );
}

export default Header;
