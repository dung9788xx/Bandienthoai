import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import images from '../../images';

export const Image = styled.img`
width: 80% !important;
`;
const Wrapper = styled.div`
  & .carousel .slide {
    background: none !important;
  }
`;

function ImageCarousel(props) {
  return (
    <Wrapper>
      <Carousel
        style={{
          display: 'flex',
        }}
        showThumbs
        interval={2000}
        infiniteLoop
        autoPlay
        statusFormatter={() => ''}
      >
        {props.images.length > 0
          ? props.images.map((image) => (
            <Image key={image.id} alt="" src={image} />
          )) : <Image alt="" src={images.productDetail.productDetailDefaultIcon} />}
      </Carousel>
    </Wrapper>
  );
}
ImageCarousel.propTypes = {
  images: PropTypes.any.isRequired,
};

export default ImageCarousel;
