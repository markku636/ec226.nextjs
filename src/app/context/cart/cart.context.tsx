'use client';
import { useCustomLocalStorage } from '@/hooks/use-custom-localStorage';
import React from 'react';
import { State, cartReducer, initialState } from './cart.reducer';
import { Item, getItem } from './cart.utils';
interface CartProviderState extends State {
    addItemToCart: (item: Item, quantity: number) => void;
    removeItemFromCart: (id: Item['id']) => void;
    // updateItem: (id: Item["id"], payload: object) => void;
    // updateItemQuantity: (id: Item["id"], quantity: number) => void;
    clearItemFromCart: (id: Item['id']) => void;
    getItemFromCart: (id: Item['id']) => any | undefined;
    isInCart: (id: Item['id']) => boolean;
    // updateCartMetadata: (metadata: Metadata) => void;
}

export const cartContext = React.createContext<CartProviderState | undefined>(undefined);

cartContext.displayName = 'CartContext';

export const useCart = () => {
    const context = React.useContext(cartContext);

    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [savedCart, saveCart] = useCustomLocalStorage('CoolPC-cart', JSON.stringify(initialState));
    const [state, dispatch] = React.useReducer(cartReducer, JSON.parse(savedCart!));

    React.useEffect(() => {
        saveCart(JSON.stringify(state));
    }, [state, saveCart]);

    const addItemToCart = (item: Item, quantity: number) =>
        dispatch({ type: 'ADD_ITEM_WITH_QUANTITY', item, quantity });
    const removeItemFromCart = (id: Item['id']) => dispatch({ type: 'REMOVE_ITEM_OR_QUANTITY', id });
    const clearItemFromCart = (id: Item['id']) => dispatch({ type: 'REMOVE_ITEM', id });
    const isInCart = (id: Item['id']) => !!getItem(state.items, id);
    const getItemFromCart = (id: Item['id']) => getItem(state.items, id);
    // const inStock=()=>{}
    const value = React.useMemo(
        () => ({
            ...state,
            addItemToCart,
            removeItemFromCart,
            clearItemFromCart,
            getItemFromCart,
            isInCart,
        }),
        [state]
    );

    return <cartContext.Provider value={value}> {children}</cartContext.Provider>;
};