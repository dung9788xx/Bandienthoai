import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import images from '../../images';
import Star from '../productDetail/Star';
import Row from '../common/Row';

const Wrapper = styled.div`
border: 0.1em solid #eee;
height: 35em;
width: 25em;
background: #fff;

&:hover {
  color: green;
}
`;
const Image = styled.img`
width: 20em;
height: 23em;
padding-top: 1em;

&:hover {
  width: 21em;
  height: 24em;
}
`;
const Center = styled.div`
text-align: center;
`;
const Container = styled.div`
font-size: 1.4em;
font-family: sans-serif;
margin-left: 1em;
margin-top: 2em;
`;
function Item(props) {
  return (
    <Wrapper onClick={() => props.onClick(props.item.id)}>
      <Center>
        <Image src={props.item.images[0] || images.home.productHomeDefaultIcon} />
      </Center>
      <Container>
        {props.item.name}
        <Row style={{ marginTop: '0.2em' }}>
          <span style={{ color: 'red' }}>{props.item.price} đ</span>
          <span style={{ marginLeft: '1em', color: '#566573', textDecoration: ' line-through' }}>{parseFloat(props.item.price) + 1000} đ</span>
        </Row>
        <Row style={{ marginTop: '0.2em' }}>
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
