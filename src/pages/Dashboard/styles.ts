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


li{
  list-style: none;
  margin: 32px 32px;
}


`;

export const ProductContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: red;
flex-direction: column;

svg {
  cursor: pointer;
}

h2{

text-align: center;
font-size: 16px;

}

`;

export const ProductImageContainer = styled.div`
display: flex;
width: 200px;
height: 200px;
justify-content: center;
align-items: center;

img {
  
}

`;



export const Cart = styled.div`
height: 200px;
width: 30%;
`;