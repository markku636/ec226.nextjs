'use client';
import Counter from '@components/common/counter';
import Link from '@components/ui/link';
import usePrice from '@framework/product/use-price';
import { generateCartItemName } from '@utils/generate-cart-item-name';
import { fadeInOut } from '@utils/motion/fade-in-out';
import { ROUTES } from '@utils/routes';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { IoIosCloseCircle } from 'react-icons/io';
import { useCart } from 'src/app/context/cart/cart.context';

type CartItemProps = {
    item: any;
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const t = useTranslations('common');
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useCart();
    const { price } = usePrice({
        amount: item.price,
        currencyCode: 'USD',
    });
    const { price: totalPrice } = usePrice({
        amount: item.itemTotal,
        currencyCode: 'USD',
    });

    return (
        <motion.div
            layout
            initial="from"
            animate="to"
            exit="from"
            variants={fadeInOut(0.25)}
            className={`group relative flex h-auto w-full items-center justify-start border-b border-gray-100 bg-white py-4 last:border-b-0 md:py-7`}
            title={item?.name}
        >
            <div className="relative flex h-24 w-24 flex-shrink-0 cursor-pointer overflow-hidden rounded-md bg-gray-100 ltr:mr-4 rtl:ml-4 md:h-28 md:w-28">
                <Image
                    src={item?.image ?? '/assets/placeholder/cart-item.svg'}
                    width={112}
                    height={112}
                    loading="eager"
                    alt={item.name || 'Product Image'}
                    className="bg-gray-300 object-cover"
                />
                <div
                    className="absolute top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-30 transition duration-200 ease-in-out ltr:left-0 rtl:right-0 md:bg-opacity-0 md:group-hover:bg-opacity-30"
                    onClick={() => clearItemFromCart(item.id)}
                    role="button"
                >
                    <IoIosCloseCircle className="relative transform text-2xl text-white transition duration-300 ease-in-out md:scale-0 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100" />
                </div>
            </div>

            <div className="flex w-full flex-col overflow-hidden">
                <Link href={`${ROUTES.PRODUCT}/${item?.slug}`} className="-mt-1 mb-1.5 truncate text-sm text-heading">
                    {generateCartItemName(item.name, item.attributes)}
                </Link>
                {/* @ts-ignore */}
                <span className="mb-2.5 text-sm text-gray-400">
                    {t('text-unit-price')} : &nbsp; {price}
                </span>

                <div className="flex items-end justify-between">
                    <Counter
                        quantity={item.quantity}
                        onIncrement={() => addItemToCart(item, 1)}
                        onDecrement={() => removeItemFromCart(item.id)}
                        variant="dark"
                    />
                    <span className="text-sm font-semibold leading-5 text-heading md:text-base">{totalPrice}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default CartItem;
