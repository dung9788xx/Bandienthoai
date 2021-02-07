import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as images from '../../images';
import Star from './Star';

const Wrapper = styled.div`
border: 1px solid #eee;
height: 45rem;
width: 25em;
background: #fff;

&:hover {
  color: green;
}
`;
const Image = styled.img`
width: 20rem;
height: 22rem;
padding-top: 1em;

&:hover {
  width: 21rem;
  height: 23rem;
}
`;
const Center = styled.div`
text-align: center;
height: 70%;
`;
const Container = styled.div`
font-size: 14px;
font-family: sans-serif;
margin-left: 10px;
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
