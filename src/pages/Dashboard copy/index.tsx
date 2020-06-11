import React, { useState, useEffect, useCallback, useMemo } from 'react';

import {
    Container,
    ProductsContainer,
    Cart,
    ProductsHeader,
    ProductList,
    ProductContainer,
    ProductImageContainer,
    CartHeaderText,
    EmptyCart,
    EmptyCartText,
    EmptylessCart,
    ProductCartIconArea,
    ProductCartImage,
    ProductCartImageContainer,
    ProductCartInfo,
    } from './styles'


import { FiPlus, FiTrash2, FiShoppingCart} from 'react-icons/fi'
import productList from '../../services/products.json'
import formatValue from '../../utils/formatValue'


interface Product {
    id: number;
    name: string;
    price: number;
    score: number;
    image: string;
}


const Dashboard: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cartProducts, setcartProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function loadProducts(): Promise<void> {
            setProducts(productList)
        }

        loadProducts();
    }, [products]);

    const cartSubTotal = useMemo(() => {
        const total = cartProducts.reduce((acomulator, cartProduct) => {
            return acomulator + cartProduct.price;
        }, 0);

        return total;
    }, [cartProducts]);

    const cartTotal = useMemo(() => {
        const total = cartProducts.reduce((acomulator, cartProduct) => {
            return acomulator + cartProduct.price;
        }, 0);

        return total;
    }, [cartProducts]);

    const cartShippingPrice = useMemo(() => {
        const total = cartProducts.reduce((acomulator) => {
            return acomulator + 10;
        }, 0);

        return cartTotal > 250 ? 0 : total;
    }, [cartProducts, cartTotal]);

    const addToCart = useCallback(
        async product => {
            const productAlreadyInCart = cartProducts.find(p => p.id === product.id)

            if (!productAlreadyInCart) {
                setcartProducts([...cartProducts, product])
            }
        }, [cartProducts]
    )

    const sortProducts = useCallback(
        async option => {
            let sortedProducts = products;
            function sortByPopularity(product1: Product, product2: Product) {
                return product1.score > product2.score ? -1 : 1;
            }

            function sortByLowestPrice(product1: Product, product2: Product) {
                return product1.price > product2.price ? 1 : -1;
            }

            function sortByHighestPrice(product1: Product, product2: Product) {
                return product1.price > product2.price ? -1 : 1;
            }

            function sortByAlphabeticOrder(product1: Product, product2: Product) {
                const comparableProduct1 = product1.name.toLocaleUpperCase();
                const comparableProduct2 = product2.name.toLocaleUpperCase();
                return comparableProduct1 > comparableProduct2 ? 1 : -1;
            }

            if (option === 'Maior preço') {
                sortedProducts.sort(sortByHighestPrice)
            }
            else
                if (option === 'Menor preço') {
                    sortedProducts.sort(sortByLowestPrice)

                }
                else
                    if (option === 'Ordem alfabética') {
                        sortedProducts.sort(sortByAlphabeticOrder)
                    } else {
                        sortedProducts.sort(sortByPopularity)
                    }
            setProducts([...sortedProducts])
        }, [products]
    )

    const removeFromCart = useCallback(async product => {
        setcartProducts(products => products.filter(p => p.id !== product.id));
    }, []);


    return (
        <Container>
            <ProductsContainer>
                <ProductsHeader>
                    <h1>Games</h1>
                    <select onChange={e => sortProducts(e.target.value)}>
                        <option value="Mais populares">Mais populares</option>
                        <option value="Maior preço">Maior preço</option>
                        <option value="Menor preço">Menor preço</option>
                        <option value="Ordem alfabética">Ordem alfabética</option>
                    </select>
                </ProductsHeader>
                <ProductList>
                    <ul>
                        {products.map(product => (
                            <li key={product.id} onClick={() => {console.log(cartProducts.length)}}>
                                <ProductContainer>
                                    <ProductImageContainer>
                                        <img src={require(`../../assets/${product.image}`)} alt="" />
                                    </ProductImageContainer>
                                    <h2>{product.name}</h2>
                                    <h2>{formatValue(product.price)}</h2>
                                    <h2 onClick={() => { addToCart(product) }}>comprar</h2>
                                    <FiTrash2 onClick={() => { removeFromCart(product) }} />
                                </ProductContainer>
                            </li>
                        ))}
                    </ul>
                </ProductList>
            </ProductsContainer>
            
            <Cart>
             <CartHeaderText>Carrinho</CartHeaderText>
             {/* <EmptyCart>
               <FiShoppingCart size={80}/>
               <EmptyCartText>Até o momento, o seu carrinho está vazio.</EmptyCartText>
             </EmptyCart> */}

             <EmptylessCart>
                 <ul>
                     <li>
                     <ProductCartImageContainer>
                     <ProductCartImage src={require('../../assets/fifa-18.png')}/>
                     </ProductCartImageContainer>
                     
                     <ProductCartInfo>
                         <p>FIFA 18</p>
                         <b>R$ 230,50</b>
                     </ProductCartInfo>
                     </li>
                     <li>
                     <ProductCartImageContainer>
                     <ProductCartImage src={require('../../assets/fifa-18.png')}/>
                     </ProductCartImageContainer>
                     
                     <ProductCartInfo>
                         <p>FIFA 18</p>
                         <b>R$ 230,50</b>
                     </ProductCartInfo>
                     </li>
                     <li>
                     <ProductCartImageContainer>
                     <ProductCartImage src={require('../../assets/fifa-18.png')}/>
                     </ProductCartImageContainer>
                     
                     <ProductCartInfo>
                         <p>FIFA 18</p>
                         <b>R$ 230,50</b>
                     </ProductCartInfo>
                     </li>
                     <li>
                     <ProductCartImageContainer>
                     <ProductCartImage src={require('../../assets/fifa-18.png')}/>
                     </ProductCartImageContainer>
                     
                     <ProductCartInfo>
                         <p>FIFA 18</p>
                         <b>R$ 230,50</b>
                     </ProductCartInfo>
                     </li> 
                     <li>
                     <ProductCartImageContainer>
                     <ProductCartImage src={require('../../assets/fifa-18.png')}/>
                     </ProductCartImageContainer>
                     
                     <ProductCartInfo>
                         <p>FIFA 18</p>
                         <b>R$ 230,50</b>
                     </ProductCartInfo>
                     </li> 
                     <li>
                     <ProductCartImageContainer>
                     <ProductCartImage src={require('../../assets/fifa-18.png')}/>
                     </ProductCartImageContainer>
                     
                     <ProductCartInfo>
                         <p>FIFA 18</p>
                         <b>R$ 230,50</b>
                     </ProductCartInfo>
                     </li> 
                     
                     
                 </ul>
             </EmptylessCart>
            </Cart>
        </Container>
    );
}



export default Dashboard;
