import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import parse from 'html-react-parser';
import { fetchProductDetail, setProductDetail } from '../../../actions/product';
import Header from '../../shared/Header/Header';
import * as images from '../../../images';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from '../../shared/Row';
import Column from '../../shared/Column';
import '../../../../App.css';

import {
  Wrapper, Container, ProductName, MarginTop,
  Text, Button, Image,
} from './ProductDetailStyle';
import PromotionBox from './PromotionBox';

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
            <Carousel
              showThumbs
              interval={2000}
              infiniteLoop
              autoPlay
              statusFormatter={() => ''}
            >
              {this.props.productDetail.images.length > 0
                ? this.props.productDetail.images.map((image) => (
                  <Image key={image.id} alt="" src={image} />
                )) : <Image alt="" src={images.productIcon} />}
            </Carousel>
          </Column>
          <Column>
            <PromotionBox price={this.props.productDetail.price} />
            <Button>
              <Text fontSize={1.7}>
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
            <MarginTop top={1} />
            <hr />
            <Text fontSize={1.7}>
              {parse(this.props.productDetail.description)}
            </Text>
          </Column>
        </Row>
      </div>
    );
  } else {
    renderProduct = <Spinner animation="border" variant="success" />;
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
ProductDetail.defaultProps = {
  productDetail: null,
};

ProductDetail.propTypes = {
  productDetail: PropTypes.any,
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
