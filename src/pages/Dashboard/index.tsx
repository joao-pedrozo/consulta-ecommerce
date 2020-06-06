import React, { useState, useEffect } from 'react';

import {
    Container,
    ProductsContainer,
    Cart,
    ProductsHeader,
    ProductList,
    ProductContainer,
    ProductImageContainer,
} from './styles'

import { useCart } from '../../hooks/cart'

import { FiPlus } from 'react-icons/fi'
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
    console.log('aqui')
    const { addToCart } = useCart();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function loadProducts(): Promise<void> {
            setProducts(productList)
        }

        loadProducts();
    }, [products]);

    function handleSortProducts() {

    }

    function handleAddToCart(item: Product): void {
        addToCart(item)
    }


    return (
        <Container>
            <ProductsContainer>
                <ProductsHeader>
                    <h1>Games</h1>
                    <select onChange={handleSortProducts}>
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
                                    <FiPlus onClick={() => handleAddToCart(product)} />
                                </ProductContainer>
                            </li>
                        ))}
                    </ul>
                </ProductList>
            </ProductsContainer>

            <Cart>

            </Cart>

        </Container>
    );
}



export default Dashboard;
