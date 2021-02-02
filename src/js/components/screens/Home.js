import React from "react";
import {connect} from "react-redux";
import {fetchListProduct, setListProduct} from "../../actions/product";
import Item from "../shared/Item";
import styled from "styled-components";
import Header from "../shared/Header";
import { withRouter } from "react-router-dom";
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
const Image = styled.img`
    padding 10px;
    height:95%;
    width:70%;
    &:hover{
         height:100%;
           width:80%;
    }
`
class Home extends React.Component {
    onSuccess = (res) => {
        this.props.setListProduct(res.data);
    }
    onFail = (res) => {
        alert(res.message);
    }
    handOnclick = (id)=> {
        this.props.history.push("/product/"+id);
    }
    componentDidMount() {
        this.props.fetchListProduct(this.onSuccess, this.onFail);
    }
    render() {
        return (
            <Wrapper>
                <div> <Header/></div>
                <Container>
                {this.props.listProduct && this.props.listProduct.map((product, i) =>
                    <Item onClick={this.handOnclick} key={i} item={product}>aa</Item>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
