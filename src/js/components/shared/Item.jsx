import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as images from '../../images';
import Star from './Star';

const Wrapper = styled.div`
border: 1px solid #838586;
border-radius: 4px;
height: 15em;
width: 250px;
background: #fff;
margin: 0.5%;
box-sizing: border-box;
`;
const Image = styled.img`
padding: 10px;
width: 70%;
height: 10em;

&:hover {
  width: 80%;
  height: 11em;
}
`;
const Center = styled.div`
text-align: center;
height: 70%;
`;
const Container = styled.div`
color: #2b2f31;
font-size: 14px;
font-family: sans-serif;
margin-left: 10px;
`;
const Hr = styled.hr`
border: none;
height: 1px;
color: #dbe3ea;
background-color: #dbe3ea;
`;
const Row = styled.div`
padding-top: 3px;
width: 50%;
`;
function Item(props) {
  return (
    <Wrapper onClick={() => props.onClick(props.item.id)}>
      <Center>
        <Image src={props.item.images[0] || images.productIcon} />
      </Center>
      <Hr />
      <Container>
        {props.item.name}
        <Row>
          <span style={{ color: 'red' }}>{props.item.price} đ</span>
          <span style={{ marginLeft: '20px', color: '#566573', textDecoration: ' line-through' }}>{parseFloat(props.item.price) + 1000} đ</span>
        </Row>
        <Row>
          <Star vote={props.item.total_vote} number={Math.random() * (5 - 1)} />
        </Row>
      </Container>
    </Wrapper>
  );
}
Item.propTypes = {
  item: PropTypes.any.isRequired,
  onClick: PropTypes.any.isRequired,
};
export default Item;
