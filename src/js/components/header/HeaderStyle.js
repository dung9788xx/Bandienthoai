import styled from 'styled-components';

export const Wrapper = styled.div`
overflow: hidden;
margin: 0;
padding: 0;
padding-left: 10%;
background-color: #333;
`;
export const HeaderItem = styled.a`
float: left;
color: #f2f2f2;
text-align: center;
padding: 1em 1em;
text-decoration: none !important;
font-size: 1.3rem;

&:hover {
  background-color: #ddd;
  color: black;
}
`;
export const HeaderSearch = styled.input`
  float: left;
  color: black;
  text-align: center;
  padding: 1em 1em;
  margin-top: 0.5em;
  margin-left: 5%;
  height: 0.5em;
  width: 30%;
  text-decoration: none;
  border-radius: 0.5em;
  font-size: 1.3rem;

  &:focus {
    outline: none;
  }
`;
export const FloatingButton = styled.div`
  position: fixed;
  bottom: 3rem;
  cursor: pointer;
  right: 1rem;
`;
export const Image = styled.img`
height: 4rem;
width: 4rem;
`;
export const HeaderImage = styled.img`
height: 4rem;
width: 4rem;
float: right;
margin-right: 2em;
padding: 0.5em;
`;
