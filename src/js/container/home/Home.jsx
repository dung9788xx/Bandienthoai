import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { fetchListProduct, setListProduct } from '../../actions/product';
import Item from '../../components/home/Item';
import Header from '../../components/header/Header';
import ImageBanner from '../../components/home/ImageBanner';
import images from '../../images';

import { Wrapper, Container } from './HomeStyle';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchListProduct(this.onSuccess, this.onFail);
  }

    onSuccess = (res) => {
      this.props.setListProduct(res.data);
    }

      onFail = () => {
        // alert(res.message);
      }

      handOnclick = (id) => {
        this.props.history.push(`/product/${id}`);
      }

      render() {
        return (
          <Wrapper>
            <div> <Header /></div>
            <Container>
              <ImageBanner images={images.home.imageBanner} />
              {this.props.listProduct && this.props.listProduct.map((product) => (
                <Item onClick={this.handOnclick} key={product.id} item={product} />
              ))}
            </Container>
          </Wrapper>
        );
      }
}

Home.propTypes = {
  listProduct: PropTypes.array.isRequired,
  setListProduct: PropTypes.any.isRequired,
  fetchListProduct: PropTypes.any.isRequired,
  history: PropTypes.any.isRequired,
};
function mapDispatchToProps(dispatch) {
  return {
    fetchListProduct: bindActionCreators(fetchListProduct, dispatch),
    setListProduct: bindActionCreators(setListProduct, dispatch),
  };
}
function mapStateToProps(state) {
  return {
    listProduct: state.product.listProduct,
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
