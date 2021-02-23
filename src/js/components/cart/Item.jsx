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
${(props) => props.style}
`;
const Wrapper = styled.div`
border: 0.1em solid #eee;
height: 10em;
min-height: 10em;
background: #fff;
`;
const Column = styled.div`
flex: ${(props) => props.width || 50}%;
min-width: 25em;
float: left;
`;
const Image = styled.img`
width: 8em;
height: 9em;
padding-top: 1em;
`;

const PriceBox = styled.div`
float: left;
width: 8em;
height: 10em;
`;

function Item(props) {
  return (
    <Wrapper>
      <Row>
        <Column>
          <div style={{ background: 'red' }}>
            <Image src={props.item.product.image || images.home.productHomeDefaultIcon} />
          </div>

        </Column>
        <PriceBox>
          {props.item.product.price}
        </PriceBox>
      </Row>
    </Wrapper>
  );
}
Item.propTypes = {
  item: PropTypes.any.isRequired,
};
export default Item;
