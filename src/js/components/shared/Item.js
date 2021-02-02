import React from "react";
import styled from "styled-components";
import * as images from "../../images"
import Star from "./Star";
const Wrapper = styled.div`
border:1px solid #838586 ;
border-radius:4px;
  height: 23em;
  width: 22%;
  background:#FFFF;
  margin:0.5%;
  box-sizing: border-box;
`;
const Image = styled.img`
    padding 10px;
    height:95%;
    width:70%;
    &:hover{
         height:100%;
           width:80%;
    }
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
const Row = styled.div`
    padding-top:3px;
`
function Item(props) {
    return (
        <Wrapper onClick={()=>props.onClick(props.item.id)}>
            <Center>
                <Image  src={props.item.images[0]??images.product_icon}  />
            </Center>
            <Hr/>
            <Container>
                {props.item.name}
                <Row >
                    <span style={{color:'red'}}>{props.item.price} đ</span>
                    <span style={{'marginLeft':'20px',color:'#566573','textDecoration':' line-through'}}>{parseFloat(props.item.price)+1000} đ</span>
                </Row>
                <Row  >
                    <Star vote={props.item.total_vote} number={Math.random() * (5 -1)}/>
                </Row>
            </Container>
        </Wrapper>
    );
}

export default Item;
