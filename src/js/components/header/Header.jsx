import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import images from '../../images';

import {
  Wrapper, FloatingButton, Image, HeaderItem, HeaderSearch, HeaderImage,
} from './HeaderStyle';

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
        src={images.header.toTopIcon}
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
      <a href="/cart"> <HeaderImage
        onClick={() => {
        }}
        src={images.header.cartIcon}
      />
      </a>

      {isShowScroll && scrollButton()}
    </Wrapper>
  );
}

export default Header;
