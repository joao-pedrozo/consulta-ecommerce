import React, { useState, useEffect, useCallback, useMemo } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import {
    Container,
    Cart,
    CartDescription,
    CartList,
    CartProduct,
    CartTitle,
    ProductCartIconArea,
    ProductCartImage,
    ProductCartImageContainer,
    ProductCartInfo,
    CartHeader,
    CartPaymentDetailsArea,
    CartPaymentDetailsData,
    CartPaymentButton,
    ProductContainer,
    ProductImageContainer,
    ProductList,
    ProductsContainer,
    ProductsHeader,
    CartContentContainer,
    EmptyCart,
    EmptyCartText,
    EmptyCartContent
} from './styles'


import { FiPlus, FiTrash2, FiShoppingCart, FiXCircle } from 'react-icons/fi'
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

    const removeFromCart = useCallback(async product => {
        setcartProducts(products => products.filter(p => p.id !== product.id));
    }, []);

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
                            <li key={product.id} onClick={() => { console.log(cartProducts.length) }}>
                                <ProductContainer>
                                    <ProductImageContainer>
                                        <img src={require(`../../assets/${product.image}`)} alt="" />
                                    </ProductImageContainer>
                                    <span>{product.name}</span>
                                    <span>{formatValue(product.price)}</span>
                                    <span onClick={() => { addToCart(product) }}>Adicionar ao carrinho</span>
                                </ProductContainer>
                            </li>
                        ))}
                    </ul>
                </ProductList>
            </ProductsContainer>

            {
                cartProducts.length === 0 ?
                  <EmptyCart>
                      
                      <EmptyCartContent>
                <FiShoppingCart size={80} color={'#E1E1E1'}/>
                <EmptyCartText>Até o momento, o seu carrinho está vazio.</EmptyCartText>
                </EmptyCartContent>
              </EmptyCart> 
              :
                <Cart>
                <CartContentContainer>
                    <CartHeader>
                        <CartTitle>Carrinho</CartTitle>
                        <CartDescription>{cartProducts.length===1 ? `(${cartProducts.length} produto)` : `(${cartProducts.length} produtos)`} </CartDescription>
                    </CartHeader>
                    <CartList>
                        {cartProducts.map(cartProduct => (
                            <CartProduct>
                            <ProductCartImageContainer>
                                <ProductCartImage src={require(`../../assets/${cartProduct.image}`)} />
                            </ProductCartImageContainer>
                            <ProductCartInfo>
                        <p>{cartProduct.name}</p>
                        <strong>{formatValue(cartProduct.price)}</strong>
                            </ProductCartInfo>
                            <ProductCartIconArea>
                                <FiXCircle color={'#54A3FF'} onClick={() => {removeFromCart(cartProduct)}}/>
                            </ProductCartIconArea>
                        </CartProduct>
                        ))}
                    </CartList>
                    <CartPaymentDetailsArea>
                        <CartPaymentDetailsData>
                            <p>Subtotal</p>
                        <strong>{formatValue(cartSubTotal)}</strong>
                        </CartPaymentDetailsData>
                        <CartPaymentDetailsData>
                            <p>Frete</p>
                            <strong> {formatValue(cartShippingPrice)}</strong>
                        </CartPaymentDetailsData>
                        <CartPaymentDetailsData>
                            <p>Total</p>
                            <strong> {formatValue(cartTotal+ cartShippingPrice)}</strong>
                        </CartPaymentDetailsData>
                        <CartPaymentButton>
                            Finalizar compra
                    </CartPaymentButton>
                    </CartPaymentDetailsArea>
                </CartContentContainer>
            </Cart>
            }

           
        </Container>

    );
}



export default Dashboard;
