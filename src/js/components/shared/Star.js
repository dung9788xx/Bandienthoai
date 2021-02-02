import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
 
`;
const Container = styled.div`
    margin-left:10px;
`
const Span = styled.span`
    padding:2px;
`
function Star(props) {
    const isChecked= (number)=>props.number&&props.number>number?{color:"orange"}:{color:"#A6B4C1"};
    return (
        <Wrapper>
            <Span style={isChecked(0)} className="fa fa-star "></Span>
            <Span style={isChecked(1)} className="fa fa-star "></Span>
            <Span style={isChecked(2)} className="fa fa-star "></Span>
            <Span style={isChecked(3)} className="fa fa-star"></Span>
            <Span style={isChecked(4)} className="fa fa-star"></Span>
        </Wrapper>
    );
}

export default Star;
