'use client';
import { useAppDispatch } from '@/redux/features/hooks';
import Scrollbar from '@components/common/scrollbar';
import Link from '@components/ui/link';
import usePrice from '@framework/product/use-price';
import { fadeInOut } from '@utils/motion/fade-in-out';
import { ROUTES } from '@utils/routes';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { IoClose } from 'react-icons/io5';
import { useCart } from 'src/app/context/cart/cart.context';
import CartItem from './cart-item';
import EmptyCart from './empty-cart';

export default function Cart() {
    const t = useTranslations('common');
    const dispatch = useAppDispatch();

    // const { closeCart } = useUI();
    const { items, total, isEmpty } = useCart();
    const { price: cartTotal } = usePrice({
        amount: total,
        currencyCode: 'USD',
    });

    return (
        <div className="flex h-full w-full flex-col justify-between">
            <div className="relative flex w-full items-center justify-between border-b border-gray-100 py-0.5 ltr:pl-5 rtl:pr-5 ltr:md:pl-7 rtl:md:pr-7">
                <h2 className="m-0 text-xl font-bold text-heading md:text-2xl">
                    {/* @ts-ignore */}
                    {t('text-shopping-cart')}
                </h2>
                <button
                    className="flex items-center justify-center px-4 py-6 text-2xl text-gray-500 transition-opacity hover:opacity-60 focus:outline-none md:px-6 lg:py-8"
                    onClick={() => dispatch(closeCart())}
                    aria-label="close"
                >
                    <IoClose className="mt-1 text-black md:mt-0.5" />
                </button>
            </div>
            {!isEmpty ? (
                <Scrollbar className="cart-scrollbar w-full flex-grow">
                    <div className="w-full px-5 md:px-7">
                        {items?.map((item) => (
                            <CartItem item={item} key={item.id} />
                        ))}
                    </div>
                </Scrollbar>
            ) : (
                <motion.div
                    layout
                    initial="from"
                    animate="to"
                    exit="from"
                    variants={fadeInOut(0.25)}
                    className="flex flex-col items-center justify-center px-5 pb-5 pt-8 md:px-7"
                >
                    <EmptyCart />
                    <h3 className="pt-8 text-lg font-bold text-heading">
                        {/* @ts-ignore */}
                        {t('text-empty-cart')}
                    </h3>
                </motion.div>
            )}

            <div className="flex flex-col px-5 pb-5 pt-2 md:px-7 md:pb-7" onClick={() => dispatch(closeCart())}>
                <Link
                    href={isEmpty === false ? ROUTES.CHECKOUT : '/'}
                    className={cn(
                        'flex w-full items-center justify-center rounded-md px-5 py-3 text-sm text-white transition duration-300 focus:outline-none sm:text-base md:py-4 ',
                        isEmpty ? 'cursor-not-allowed bg-gray-400 hover:bg-gray-400' : 'bg-heading hover:bg-gray-600'
                    )}
                >
                    <span className="-mt-0.5 w-full py-0.5 ltr:pr-5 rtl:pl-5">
                        {/* @ts-ignore */}
                        {t('text-proceed-to-checkout')}
                    </span>
                    <span className="-mt-0.5 flex flex-shrink-0 py-0.5 ltr:ml-auto rtl:mr-auto">
                        <span className="border-white py-0.5 ltr:border-l ltr:pr-5 rtl:border-r rtl:pl-5" />
                        {cartTotal}
                    </span>
                </Link>
            </div>
        </div>
    );
}
