import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: auto;
  font-size: 1.1rem;
`;
export const Container = styled.div`
  margin: auto;
  width: 70%;
  padding: 2em;
`;
export const ProductName = styled.div`
  font-size: 2.3em;
`;
export const PriceBannerRounded = styled.div`
background: #e74c3c;
padding: 0.5em;
color: white;
border-top-left-radius: 0.3em;
border-top-right-radius: 0.3em;
text-align: center;
font-weight: bold;
font-size: 1.4em;
`;
export const PriceBanner = styled.div`
background: #f1f1f1;
padding: 0.5em;
color: #c0392b;
text-align: center;
font-weight: bold;
font-size: 1.4em;
`;
export const Promotion = styled.div`
  margin-top: 0.5em;
  border: 1px solid #ddd;
  border-radius: 0.3em;
`;
export const PromotionTextHeader = styled.div`
  background: #f6f6f6;
  padding: 1em;
`;
export const TextBox = styled.div`
  padding: 1em;
`;
export const Text = styled.div`
  padding-top: 0.5em;
  font-size: ${(props) => `${props.fontSize}rem`};
`;
export const Button = styled.button`
    cursor: pointer;
    background: #fd6e1d;
    color: white;
    border: none;
    border-radius: 0.5em;
    width: 100%;
    height: 5em;
    margin-top: ${(p) => p.top || 1}em;
`;
export const MarginTop = styled.div`
    margin-top: ${(p) => p.top || 1}em;
`;
