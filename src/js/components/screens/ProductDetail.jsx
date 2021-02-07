import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { fetchProductDetail, setProductDetail } from '../../actions/product';
import Header from '../shared/Header';
import * as images from '../../images';
import Row from '../shared/Row';
import Column from '../shared/Column';

const Wrapper = styled.div`
  margin: auto;
`;
const Container = styled.div`
  margin: auto;
  width: 60%;
  padding: 20px;
`;
const ProductName = styled.div`
    font-size: 25px;
`;
const Image = styled.img`
    padding: 10px;
    width: 35em;
`;
const PriceBannerRounded = styled.div`
    background: #e74c3c;
    padding: 10px;
    color: white;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    text-align: center;
    font-weight: bold;
    font-size: 25px;
`;
const PriceBanner = styled.div`
    background: #f1f1f1;
    padding: 10px;
    color: #c0392b;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
`;
const Promotion = styled.div`
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;
const PromotionTextHeader = styled.div`
  background: #f6f6f6;
  padding: 10px;
`;
const TextBox = styled.div`
  padding: 10px;
`;
const Text = styled.div`
  padding-top: 5px;
  font-size: ${(p) => `${p.fontSize}px`};
`;
const Button = styled.button`
    cursor: pointer;
    background: #fd6e1d;
    color: white;
    border: none;
    border-radius: 5px;
    width: 100%;
    height: 50px;
`;
const MarginTop = styled.div`
    margin-top: ${(p) => p.top || 10}px;
`;

class ProductDetail extends React.Component {
  componentDidMount() {
    this.props.fetchProductDetail(this.props.match.params.id, this.onSuccess, this.onFail);
  }

onSuccess = (res) => {
  this.props.setProductDetail(res.data);
}

onFail = () => {
//   alert(res.message);
}

render() {
  let renderProduct;
  if (this.props.productDetail) {
    renderProduct = (
      <div>
        <ProductName>{this.props.productDetail.name}</ProductName>
        <hr />
        <Row>
          <Column>
            <Image src={this.props.productDetail.images[0] ?? images.productIcon} />
          </Column>
          <Column>
            <PriceBannerRounded>Mua online ngay giảm sốc !</PriceBannerRounded>
            <PriceBanner>{this.props.productDetail.price} đ</PriceBanner>
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
            <MarginTop />
            <Button>
              <Text fontSize={20}>
                Mua ngay
              </Text>
              <span>
                Giao hàng tận nơi hoặc nhận tại siêu thị
              </span>
            </Button>
          </Column>
        </Row>
        <Row>
          <Column width={100}>
            <MarginTop top={50} />
            <hr />
            {parse(this.props.productDetail.description)}
          </Column>
        </Row>
      </div>
    );
  } else {
    renderProduct = <div>Waiting style</div>;
  }
  return (
    <Wrapper>
      <div>
        <Header />
      </div>
      <Container>
        {renderProduct}
      </Container>
    </Wrapper>
  );
}
}
ProductDetail.propTypes = {
  productDetail: PropTypes.any.isRequired,
  setProductDetail: PropTypes.any.isRequired,
  match: PropTypes.any.isRequired,
  fetchProductDetail: PropTypes.any.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchProductDetail: (id, onSuccess, onFail) => (
    dispatch(fetchProductDetail(id, onSuccess, onFail))),
  setProductDetail: (product) => dispatch(setProductDetail(product)),
});
const mapStateToProps = (state) => ({
  productDetail: state.product.productDetail,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
