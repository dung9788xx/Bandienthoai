import styled from 'styled-components';

export const Wrapper = styled.div`
background: #eaecee;
`;
export const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding-left: 5em;
padding-right: 5em;

&: after {
  content: '';
  flex: 0 0 25rem;
}
`;
