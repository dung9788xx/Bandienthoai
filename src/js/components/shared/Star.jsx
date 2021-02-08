import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.span`
  color: #2b2f31;
`;
const Span = styled.span`
  padding-right: 2px;
`;
function Star(props) {
  const isChecked = (number) => (props.number > number ? { color: 'orange' } : { color: '#A6B4C1' });
  return (
    <Wrapper>
      <Span style={isChecked(0)} className="fa fa-star " />
      <Span style={isChecked(1)} className="fa fa-star " />
      <Span style={isChecked(2)} className="fa fa-star " />
      <Span style={isChecked(3)} className="fa fa-star" />
      <Span style={isChecked(4)} className="fa fa-star" />
      <span style={{ paddingLeft: 10 }}>{props.vote} đánh giá</span>
    </Wrapper>
  );
}
Star.propTypes = {
  number: PropTypes.number.isRequired,
  vote: PropTypes.number.isRequired,
};
export default Star;
