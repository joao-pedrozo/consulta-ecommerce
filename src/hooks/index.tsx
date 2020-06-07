import React from 'react';

import Dashboard from '../pages/Dashboard'
import GlobalStyles from '../styles/global'
import { CartProvider } from './cart'

const AppProvider: React.FC = ({ children }) => {

    return (
        <CartProvider>
            <Dashboard>
                {children}
            </Dashboard>
            <GlobalStyles />
        </CartProvider>
    )
}

export default AppProvider;