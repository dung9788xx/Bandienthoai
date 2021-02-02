import React from "react";
import styled from "styled-components";
import { useLocation } from 'react-router-dom'
const Wrapper = styled.div`
padding-left:10%;
    overflow: hidden;
  background-color: #333;
`;
const HeaderItem = styled.a`
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  &:hover{
   background-color: #ddd;
  color: black;
  }
`
const HeaderSearch = styled.input`
  float: left;
  color: black;
  text-align: center;
  padding: 14px 16px;
  margin-top:5px;
  margin-left:5%;
  height:5px;
  width: 30%;
   text-align: center;
  text-decoration: none;
  border-radius:5px;
  font-size: 17px;
  &:focus{
      outline: none; 
   }
`

function Header(props) {
    const location = useLocation();
    const activeStyle ={ backgroundColor: '#ddd',
        color:' black'}
    return (
        <Wrapper>
            <HeaderItem style={location.pathname==="/" ? activeStyle:{}} href="/">Trang chủ</HeaderItem>
            <HeaderItem href="#news">Điện thoại</HeaderItem>
            <HeaderItem href="#contact">Máy tính</HeaderItem>
            <HeaderItem href="#about">Đồng hồ</HeaderItem>
            <HeaderSearch placeholder={"Tìm kiếm"} type='text'/>
        </Wrapper>
    );
}

export default Header;
