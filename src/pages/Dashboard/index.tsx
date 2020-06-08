import React, { useState, useEffect, useCallback, useMemo } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {
    Container,
    ProductsContainer,
    Cart,
    ProductsHeader,
    ProductList,
    ProductContainer,
    ProductImageContainer,
} from './styles'


import { FiPlus, FiTrash2 } from 'react-icons/fi'
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
                console.log(cartProducts)
            }
            await AsyncStorage.setItem(
                '@ConsultaGames:cart',
                JSON.stringify(cartProducts),
            );

        }, [cartProducts]
    )


    const sortProducts = useCallback(
        async option => {
            let sortedProducts = [...products];
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
                    console.log(sortedProducts)
            setProducts(sortedProducts)
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
                            <li key={product.id}>
                                <ProductContainer>
                                    <ProductImageContainer>
                                        <img src={require(`../../assets/${product.image}`)} alt="" />
                                    </ProductImageContainer>
                                    <h2>{product.name}</h2>
                                    <h2>{formatValue(product.price)}</h2>
                                    <FiPlus onClick={() => { addToCart(product) }} />
                                    <FiTrash2 onClick={() => { removeFromCart(product) }} />
                                </ProductContainer>
                            </li>
                        ))}
                    </ul>
                </ProductList>
            </ProductsContainer>

            <Cart>
                <div>
                    {cartProducts.map(cartProduct => (
                        <h1 key={cartProduct.id}>{cartProduct.name}</h1>
                    ))}
                    <h1>SubTotal: {cartSubTotal}</h1>
                    <h1>Frete: {cartShippingPrice}</h1>
                    <h1>Subtotal: </h1>
                </div>
            </Cart>

        </Container>
    );
}



export default Dashboard;
