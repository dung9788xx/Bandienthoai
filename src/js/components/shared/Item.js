import React from "react";
import styled from "styled-components";
import * as images from "../../images"
import Star from "./Star";
const Wrapper = styled.div`
border:1px solid #838586 ;
border-radius:4px;
  height: 24em;
  width: 23%;
  background:#FFFF;
  margin:0.5%;
  box-sizing: border-box;
`;
const Image = styled.img`
    padding 10px;
    height:95%;
    width:70%;
`
const Center = styled.div`
text-align:center;
height:70%;
`
const Container = styled.div`
color:#2B2F31 ;
font-size:14px;
 font-family:Sans-serif;
    margin-left:10px;
`
const Hr = styled.hr`
 border: none;
    height: 1px;
    color: #DBE3EA ;
    background-color: #DBE3EA; /* Modern Browsers */
    `
function Item(props) {
    return (
        <Wrapper>
            <Center>
                <Image  src={images.product_icon}  />
            </Center>
            <Hr/>
            <Container>
                {props.item.name}
                <div >
                    <span style={{color:'red'}}>{props.item.price} đ</span>
                    <span style={{'margin-left':'20px',color:'black','text-decoration':' line-through'}}>{parseFloat(props.item.price)+1000} đ</span>
                </div>
                <div>
                    <Star number={Math.random() * (5 -1)}/>
                </div>
            </Container>
        </Wrapper>
    );
}

export default Item;
