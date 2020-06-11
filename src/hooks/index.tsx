import React from 'react';

import Dashboard from '../pages/Dashboard'
import GlobalStyles from '../styles/global'
import { CartProvider } from './cart'

const AppProvider: React.FC = ({ children }) => {

    return (
           <>
            <Dashboard>
                {children}
            </Dashboard>
            <GlobalStyles />
           </>
    )
}

export default AppProvider;