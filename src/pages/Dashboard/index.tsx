import React, { useState, useEffect } from 'react';

import {
    Container,
    ProductsContainer,
    Cart,
    ProductsHeader,
    ProductList,
    Product,
    ProductImage,
    ProductTitle
} from './styles'

import productList from '../../services/products.json'


interface Product {
    id: number;
    name: string;
    price: number;
    score: number;
    image: string;
}

const Dashboard: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function loadProducts(): Promise<void> {
            setProducts(productList)
        }

        loadProducts();
    }, [products]);

    function handleSortProducts() {
        console.log('a')
    }


    return (
        <Container>
            <ProductsContainer>
                <ProductsHeader>
                    <h1>Games</h1>
                    <select onChange={handleSortProducts}>
                        <option value="Mais populares">Mais populares</option>
                    </select>
                </ProductsHeader>
                <ProductList>
                    {products.map(product => (
                        <Product>
                            <ul>
                                <li>
                                    <li key={product.id}>
                                        <ProductImage src={require(`../../assets/${product.image}`)} />
                                    </li>
                                </li>
                            </ul>
                        </Product>
                    ))}
                </ProductList>
            </ProductsContainer>

            <Cart>

            </Cart>

        </Container>
    );
}



export default Dashboard;
