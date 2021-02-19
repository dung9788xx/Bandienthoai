import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import parse from 'html-react-parser';
import { fetchProductDetail, setProductDetail } from '../../actions/product';
import Header from '../../components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from '../../components/common/Row';
import Column from '../../components/common/Column';
import '../../../App.css';

import {
  Wrapper, Container, ProductName, MarginTop,
  Text, Button,
} from './ProductDetailStyle';
import PromotionBox from '../../components/productDetail/PromotionBox';
import ImageCarousel from '../../components/productDetail/ImageCarousel';

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

renderProduct = () => (
  <div>
    <ProductName>{this.props.productDetail.name}</ProductName>
    <hr />
    <Row>
      <Column>
        <ImageCarousel images={this.props.productDetail.images} />
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

renderLoading = () => (
  <Spinner
    style={{
      width: '10em',
      height: '10em',
      marginTop: '20em',
      marginLeft: '40%',
    }}
    animation="border"
    variant="success"
  />
)

render() {
  return (
    <Wrapper>
      <div>
        <Header />
      </div>
      <Container>
        {this.props.productDetail ? this.renderProduct() : this.renderLoading()}
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

function mapDispatchToProps(dispatch) {
  return {
    fetchProductDetail: bindActionCreators(fetchProductDetail, dispatch),
    setProductDetail: bindActionCreators(setProductDetail, dispatch),
  };
}
function mapStateToProps(state) {
  return {
    productDetail: state.product.productDetail,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
