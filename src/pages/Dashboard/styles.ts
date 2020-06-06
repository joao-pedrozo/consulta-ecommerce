import styled from 'styled-components';

export const Container = styled.div`
background-color: #e6e6e6;
height: 100vh;
margin: 50px 70px;
display: flex;
`

export const ProductsContainer = styled.div`
height: 200px;
width: 70%;
background-color: grey;
margin-right: 30px;
`;

export const ProductsHeader = styled.div`

background-color: blue;
display: flex;
justify-content: space-between;

select {
    padding-right: 120px;
}
`

export const ProductList = styled.ul`

display: flex;
  
  li {

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
    padding: 20px;
    height: 200px;
    width: 200px;
    margin-left: 30px;

  } 
`;

export const Product = styled.div`
 background-color: #EEEEEE;
display: flex;
padding: 16px 16px;
border-radius: 5px;
margin: 8px;

`;

export const ProductImage = styled.img`
  height: 122px;
  width: 122px;
  align-self: center;
`;

export const ProductTitle = styled.h2`
  font-size: 14px;
  margin-top: 10px;
  display: block;
  background-color: yellow;
`;

export const Cart = styled.div`
height: 200px;
width: 30%;
background-color: red;
`;