import React, { useState, useEffect, useCallback } from 'react';
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

    const removeFromCart = useCallback(
        async product => {
            const productAlreadyInCartIndex = cartProducts.findIndex(p => p.id === product.id);
            if (productAlreadyInCartIndex !== -1) {
                cartProducts.splice(productAlreadyInCartIndex, 1)
                setcartProducts([...cartProducts]);
            }

        }, [cartProducts]
    )


    return (
        <Container>
            <ProductsContainer>
                <ProductsHeader>
                    <h1>Games</h1>
                    <select>
                        <option value="Mais populares">Mais populares</option>
                        <option value="Mais populares">Maior preço</option>
                        <option value="Mais populares">Menor preço</option>
                        <option value="Mais populares">Ordem alfabética </option>
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
                </div>
            </Cart>

        </Container>
    );
}



export default Dashboard;
