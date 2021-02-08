import styled from 'styled-components';

const Column = styled.div`
flex: ${(props) => props.width || 50}%;
min-width: 25em;
`;

export default Column;
