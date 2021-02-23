import styled from 'styled-components';

const Row = styled.div`
margin: auto;
width: 100%;
display: flex;
flex-wrap: wrap;
justify-items: center;

${(props) => props.style}
`;
export default Row;
