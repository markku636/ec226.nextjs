'use client';

import { useAppDispatch } from '@/redux/features/hooks';
import { openCart } from '@/redux/features/ui/uiSlice';
import CartIcon from '@components/icons/cart-icon';

// import { useAppDispatch } from '@/redux/features/hooks';
// import { openCart } from '@/redux/features/ui/uiSlice';
// import CartIcon from '@components/icons/cart-icon';
import { useCart } from 'src/app/context/cart/cart.context';

export default function CartButton() {
    const dispatch = useAppDispatch();

    // const { openCart } = useUI();

    const { totalItems } = useCart();

    function handleCartOpen() {
        dispatch(openCart());
        // return openCart();
    }
    return (
        <button
            className="relative flex h-auto flex-shrink-0 transform items-center justify-center focus:outline-none"
            onClick={handleCartOpen}
            aria-label="cart-button"
        >
            <CartIcon />
            <span className="cart-counter-badge absolute -top-2.5 flex items-center justify-center rounded-full bg-heading font-bold text-white ltr:-right-2.5 rtl:-left-2.5 xl:-top-3 ltr:xl:-right-3 rtl:xl:-left-3">
                {totalItems}
            </span>
        </button>
    );
}
