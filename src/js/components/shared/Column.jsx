import styled from 'styled-components';

const Column = styled.div`
flex: ${(props) => props.width || 50}%;
`;

export default Column;
