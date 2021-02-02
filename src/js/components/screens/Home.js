import React from "react";
import {connect} from "react-redux";
import {fetchListProduct, setListProduct} from "../../actions/product";
import Item from "../shared/Item";
import styled from "styled-components";

const Wrapper = styled.div`
  background:#EAECEE;

  }`
const Container = styled.div`
    margin:auto;
    width: 90%;
     background:#EAECEE ;
    display:flex;
  padding-left:3%;
    flex-wrap: wrap;
    flex-direction:row;
 justify-content: start;
 &:after {
  content: "";
  flex: 2;
}
`

class Home extends React.Component {
    onSuccess = (res) => {
        this.props.setListProduct(res.data);
    }
    onFail = (res) => {
        alert(res.message);
    }

    componentDidMount() {
        this.props.fetchListProduct(this.onSuccess, this.onFail);
    }

    render() {
        return (
            <Wrapper>
                <Container>
                {this.props.listProduct && this.props.listProduct.map((product, i) =>
                    <Item key={i} item={product}>aa</Item>
                )}
                </Container>
            </Wrapper>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        fetchListProduct: (onSuccess, onFail) => dispatch(fetchListProduct(onSuccess, onFail)),
        setListProduct: (listProduct) => dispatch(setListProduct(listProduct))
    }
}
const mapStateToProps = state => {
    return {
        listProduct: state.product.listProduct
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
