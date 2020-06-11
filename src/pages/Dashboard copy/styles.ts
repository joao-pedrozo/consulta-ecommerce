import styled, {keyframes, css} from 'styled-components';

export const Container = styled.div`
height: 100vh;
margin: 50px 70px;
display: flex;
font-family: Arial, Helvetica, sans-serif;
`

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
}
`

export const ProductList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  ul{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

li{
 
  list-style: none;
  margin: 32px 32px 80px 32px;
  height: 230px;
  width: 260px;

  h2:nth-child(4){
    display: none;
  }

  &:hover{
    h2:nth-child(4){
    display: block;
  }
  h2:nth-child(3), h2:nth-child(2){
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
width: 262px;
border: 3px solid #E1E1E1;
/* height: 230px; */
height: 50%;
display: block;
`;

export const CartHeaderText = styled.p`
display: block;
font-weight: bold;
font-size: 22px;
margin: 15px; 
`;

export const EmptyCart = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
opacity: 0.5;
margin-top: 50px;
`;

export const EmptyCartText = styled.p`
font-size: 14px;
text-align: center;
margin: 16px 40px;
`;

export const EmptylessCart = styled.div`
display: flex;
flex-direction: row;

ul{
  list-style: none;
}

li {
  display: flex;
}

`;

export const ProductCartImageContainer = styled.div`
margin-left: 15px;
background-color: #EEEEEE;
width: 60px;
display: flex;
justify-content: center;
padding: 5px;
`;

export const ProductCartImage = styled.img`
height: 50px;
width: 50px;
`;

export const ProductCartInfo = styled.div`
display: flex;
flex-direction: column;
`;

export const ProductCartIconArea = styled.div``;