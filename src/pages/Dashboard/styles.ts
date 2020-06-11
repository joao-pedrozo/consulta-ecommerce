import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`

from {
  opacity: 0
}
to {
  opacity: 1;
}

`


export const Container = styled.div`
display: flex;
margin-top: 32px;
animation: ${fadeIn} 1s;
`;

export const ProductsContainer = styled.div`
margin-left: 150px;
width: 1000px;
margin-right: 30px;

`;

export const ProductsHeader = styled.div`
display: flex;
justify-content: space-between;

select {
    padding-right: 120px;
    padding-left: 12px;
    border-color: #E1E1E1;
}
`

export const ProductList = styled.ul`
  display: flex;
  justify-content: initial;
  align-items: flex-start;

  ul{
    display: flex;
    flex-wrap: wrap;
    align-items: initial;
  }

li{
 
  list-style: none;
  margin: 32px 32px 80px 32px;
  height: 230px;
  width: 260px;
  cursor: pointer;

  span:nth-child(2){
    margin-top: 20px;
    color: #746A6A;
  }

  span:nth-child(3),span:nth-child(4){
    color: #3486e6;
    font-weight: bold;
  }

  span:nth-child(4){
    visibility: hidden;
    margin-top: 20px;

  }

  &:hover{
    span:nth-child(4){
visibility: visible;
  }
  span:nth-child(3), span:nth-child(2){
    display: none;
    
  }
  }
}
`;

export const ProductContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
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
background-color: #EEEEEE;
padding: 120px 150px;
justify-content: center;
align-items: center;
`;

export const Cart = styled.div`
width: 300px;
`;

export const EmptyCart = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const EmptyCartContent = styled.div`
width: 300px;
border: 1px solid #E1E1E1;
border-radius: 3px;
display: flex;
flex-direction: column;
  align-items: center;
  justify-content: center;
padding: 90px 45px;
`

export const EmptyCartText = styled.p`
font-size: 14px;
text-align: center;
margin: 16px 40px;
opacity: 0.5;
`;

export const CartTitle = styled.strong`
font-size: 24px;
font-weight: bold;
`;

export const CartHeader = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin: 20px 30px;
`;

export const CartDescription = styled.p`
color: grey;
margin-left: 5px;
margin-top: 3px;
`

export const CartList = styled.ul`
display: flex;
flex-direction: column;
margin-left: 30px;
`;

export const CartProduct = styled.li`

display: flex;
align-items: center;
animation: ${fadeIn} 1s;

svg {
  cursor: pointer;
  visibility: hidden;
  margin-right: 20px;
}

&:hover{
  svg {
    visibility: visible;
    animation: ${fadeIn} 0.5s;
  }
}

margin-bottom: 15px;
`

export const ProductCartImageContainer = styled.div`
background-color: #EEEEEE;
width: 60px;
display: flex;
justify-content: center;
padding: 5px;
margin-right: 10px;
`;

export const ProductCartImage = styled.img`
height: 50px;
width: 50px;
`;

export const ProductCartInfo = styled.div`
display: flex;
flex-direction: column;
margin-right: 30px;
`;

export const ProductCartIconArea = styled.div``;

export const CartPaymentDetailsArea = styled.div`
display: flex;
flex-direction: column;
div:nth-child(3){
  strong {
    font-size: 21px;
  }
}
`;

export const CartPaymentDetailsData = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-left: 30px;
margin-bottom: 12px;
margin-right: 30px;
`;

export const CartPaymentButton = styled.a`
display: flex;
background-color: #54A3FF;
color: #fff;
font-weight: bold;
justify-content: center;
align-items: center;
padding: 10px 25px;
margin: 5px;
border-radius: 3px;
cursor: pointer;
transition: opacity 0.2s;

&:hover{
  opacity: 0.8;
}
`;

export const CartContentContainer = styled.div`
border: 1px solid #E1E1E1;
border-radius: 3px;
`