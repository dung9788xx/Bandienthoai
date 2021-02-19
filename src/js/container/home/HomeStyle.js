import styled from 'styled-components';

export const Wrapper = styled.div`
background: #eaecee;
`;
export const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;

&: after {
  content: '';
  flex: 0 0 25rem;
}
`;
