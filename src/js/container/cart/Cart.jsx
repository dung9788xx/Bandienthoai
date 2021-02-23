import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../components/header/Header';
import { Container, Wrapper } from './CartStyle';
import { fetchListProductInCart, setListProductInCat } from '../../actions/cart';
import Item from '../../components/cart/Item';

class Cart extends React.Component {
  componentDidMount() {
    this.props.fetchListProductInCart(this.onSuccess, this.onFail);
  }

onSuccess = (res) => {
  this.props.setListProductInCat(res.data);
}

onFail = () => {
  // alert(res.message);
}

renderCart = () => (
  <div>
    {this.props.listProduct.map((item) => (
      <Item item={item} />
    ))}
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
        {this.props.listProduct ? this.renderCart() : this.renderLoading()}
      </Container>
    </Wrapper>
  );
}
}
Cart.defaultProps = {
  listProduct: [],
};

Cart.propTypes = {
  listProduct: PropTypes.any,
  setListProductInCat: PropTypes.any.isRequired,
  fetchListProductInCart: PropTypes.any.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    fetchListProductInCart: bindActionCreators(fetchListProductInCart, dispatch),
    setListProductInCat: bindActionCreators(setListProductInCat, dispatch),
  };
}
function mapStateToProps(state) {
  return {
    listProduct: state.cart.listProduct,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
