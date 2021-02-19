import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  Promotion, PromotionTextHeader, TextBox,
  Text,
  PriceBanner,
  PriceBannerRounded,
} from '../../container/productDetail/ProductDetailStyle';

const Wrapper = styled.div`
  font-size: 1.5em;
  width: 100%;
`;

function PromotionBox(props) {
  return (
    <Wrapper>
      <PriceBannerRounded>Mua online ngay giảm sốc !</PriceBannerRounded>
      <PriceBanner>{props.price} đ</PriceBanner>
      <Promotion>
        <PromotionTextHeader>
          KHUYẾN MÃI
        </PromotionTextHeader>
        <TextBox>
          <Text>
            Giảm giá 700,000đ khi tham gia thu cũ đổi mới
          </Text>
          <Text>
            Mua Đồng hồ thời trang giảm 40% (không kèm khuyến mãi khác)
          </Text>
          <Text>
            (*) Giá hoặc khuyến mãi không áp dụng đối với 1 số gói trả góp
          </Text>
        </TextBox>
      </Promotion>
    </Wrapper>
  );
}
PromotionBox.propTypes = {
  price: PropTypes.any.isRequired,
};

export default PromotionBox;
