/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

const Wrapper = styled.div`
height: 14rem;
width: 100%;
padding: 0.3em 0.5em 0 0.5em;
`;
const Image = styled.img`
width: 18em;
height: 13em;
border-radius: 0.5em;
min-width: 12em;
`;
function ImageBanner(props) {
  return (
    <Wrapper style={props.style}>
      <Carousel
        interval={2000}
        infiniteLoop={true}
        autoPlay={true}
        statusFormatter={() => ''}
      >
        {props.images.map((image) => (
          <Image key={image.id} alt="" src={image.image} />
        ))}
      </Carousel>
    </Wrapper>
  );
}
ImageBanner.defaultProps = {
  style: {},
};

ImageBanner.propTypes = {
  style: PropTypes.any,
  images: PropTypes.array.isRequired,
};

export default ImageBanner;
