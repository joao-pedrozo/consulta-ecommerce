import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
height: 100vh;
margin: 50px 70px;
display: flex;
`

export const ProductsContainer = styled.div`
height: 200px;
width: 70%;
margin-right: 30px;

`;

export const ProductsHeader = styled.div`

display: flex;
justify-content: space-between;

select {
    padding-right: 120px;
}
`

const appearFromleft = keyframes`
from{
    opacity: 0;
}
to {
    opacity: 1;
}
`;

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
  margin: 32px 32px 60px 32px;
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

img {
  
}

`;



export const Cart = styled.div`
width: 262px;
height: 325px;
border: 3px solid #E1E1E1;
`;