import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
}

interface CartContext {
  cartProducts: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [cartProducts, setcartProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const storagedProducts = await AsyncStorage.getItem(
        '@ConsultaGames:cart',
      );

      if (storagedProducts) {
        setcartProducts([...JSON.parse(storagedProducts)]);
      }
    }

    loadProducts();
  }, [cartProducts]);

  const addToCart = useCallback(

    async product => {
      const productAlreadyInCart = cartProducts.findIndex(p => p.id === product.id)

      if (!productAlreadyInCart) {
        setcartProducts([product])
        console.log(cartProducts)
      }
      await AsyncStorage.setItem(
        '@ConsultaGames:cart',
        JSON.stringify(cartProducts),
      );

    }, [cartProducts]
  )


  const value = React.useMemo(
    () => ({ addToCart, cartProducts }),
    [cartProducts, addToCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
