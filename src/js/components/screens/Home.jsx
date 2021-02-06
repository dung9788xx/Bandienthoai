import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { fetchListProduct, setListProduct } from '../../actions/product';
import Item from '../shared/Item';
import Header from '../shared/Header';

const Wrapper = styled.div`
  background: #eaecee;
  font-size: 25px;
`;
const Container = styled.div`
margin: auto;
width: 90%;
background: #eaecee;
display: flex;
padding-left: 3%;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;

&: after {
  content: "";
  flex: 2;
  justify-content: start;
}
`;
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
              {this.props.listProduct && this.props.listProduct.map((product) => (
                <Item onClick={this.handOnclick} key={product.id} item={product}>aa</Item>)) }
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
const mapDispatchToProps = (dispatch) => ({
  fetchListProduct: (onSuccess, onFail) => dispatch(fetchListProduct(onSuccess, onFail)),
  setListProduct: (listProduct) => dispatch(setListProduct(listProduct)),
});
const mapStateToProps = (state) => ({
  listProduct: state.product.listProduct,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
