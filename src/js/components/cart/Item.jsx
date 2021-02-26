import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import images from '../../images';

const Row = styled.div`
margin: auto;
width: 100%;
display: flex;
justify-items: center;
height: 10em;
flex-direction: row;
padding-left: 4em;
padding-top: 1em;
${(props) => props.style}
`;
const Wrapper = styled.div`
border: 0.1em solid #eee;
height: 13em;
min-height: 10em;
min-width: 40em;
background: #fff;
`;
const Image = styled.img`
width: 8em;
height: 9em;
`;
const Text = styled.div`
  margin-left: 1em;
  font-size: 1.5em;
  max-width: 20em;
`;
const PriceBox = styled.div`
width: 8em;
min-width: 10em;
font-size: 1.3em;
`;
const MinusBox = styled.div`
  border: 0.1em #dfdfdf solid;
  width: 2em;
  height: 2em;
  float: left;
  border-top-left-radius: 0.2em;
  border-bottom-left-radius: 0.2em;
  cursor: pointer;
`;
const QuantityBox = styled.div`
  width: 2em;
  height: 2em;
  float: left;
  border-top: 0.1em #dfdfdf solid;
  border-bottom: 0.1em #dfdfdf solid;
`;
const PlusBox = styled.div`
  border: 0.1em #dfdfdf solid;
  width: 2em;
  height: 2em;
  float: left;
  border-top-right-radius: 0.2em;
  border-bottom-right-radius: 0.2em;
  cursor: pointer;
`;
const Delete = styled.div`
  color: #999;
  margin-left: 3em;
  cursor: pointer;
`;
function currencyFormat(num) {
  return `${num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
}
function Item(props) {
  return (
    <Wrapper>
      <Row>
        <Image src={props.item.product.image || images.home.productHomeDefaultIcon} />
        <Text>
          {props.item.product.name}
        </Text>
        <PriceBox style={{ marginLeft: 'auto', textAlign: 'center' }}>
          <div> <span style={{ color: 'red' }}>{currencyFormat(props.item.product.price)} đ</span></div>
          <span style={{ color: '#566573', textDecoration: ' line-through' }}>{currencyFormat(props.item.product.price + 1000)} đ</span>
          <div style={{ marginLeft: '2em', marginTop: '1em' }}>
            <MinusBox>-</MinusBox>
            <QuantityBox>{props.item.quantity}</QuantityBox>
            <PlusBox>+</PlusBox>
          </div>
        </PriceBox>
      </Row>
      <Row>
        <Delete>
          Xoa
        </Delete>
      </Row>
    </Wrapper>
  );
}
Item.propTypes = {
  item: PropTypes.any.isRequired,
};
export default Item;
