/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Wrapper = styled.div`
height: 14rem;
width: 100%;
padding: 0.3em 0.5em 0 0.5em;
`;
const Image = styled.img`
width: 100%;
padding: 0.1em;
height: 13em;
border-radius: 0.5em;
min-width: 12em;
`;
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function ImageBanner(props) {
  return (
    <Wrapper style={props.style}>
      <Carousel
        responsive={responsive}
        autoPlaySpeed={2000}
        infinite
        autoPlay
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
