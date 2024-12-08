'use client';
import { CheckoutItem } from '@components/checkout/checkout-card-item';
import usePrice from '@framework/product/use-price';
import { useTranslations } from 'next-intl';
import { useCart } from 'src/app/context/cart/cart.context';
import { CheckoutCardFooterItem } from './checkout-card-footer-item';

const CheckoutCard = () => {
    const { items, total, isEmpty } = useCart();
    const { price: subtotal } = usePrice({
        amount: total,
        currencyCode: 'USD',
    });
    const t = useTranslations('common');
    const checkoutFooter = [
        {
            id: 1,
            name: t('text-sub-total'),
            price: subtotal,
        },
        {
            id: 2,
            name: t('text-shipping'),
            price: t('text-free'),
        },
        {
            id: 3,
            name: t('text-total'),
            price: subtotal,
        },
    ];
    return (
        <div className="pt-12 md:pt-0 ltr:2xl:pl-4 rtl:2xl:pr-4">
            <h2 className="mb-6 text-lg font-bold text-heading md:text-xl xl:mb-8 xl:text-2xl">
                {t('text-your-order')}
            </h2>
            <div className="mt-6 flex rounded-md bg-gray-150 p-4 text-sm font-semibold text-heading md:mt-7 xl:mt-9">
                <span>{t('text-product')}</span>
                <span className="flex-shrink-0 ltr:ml-auto rtl:mr-auto">{t('text-sub-total')}</span>
            </div>
            {!isEmpty ? (
                items.map((item) => <CheckoutItem item={item} key={item.id} />)
            ) : (
                <p className="py-4 text-red-500 lg:px-3">{t('text-empty-cart')}</p>
            )}
            {checkoutFooter.map((item: any) => (
                <CheckoutCardFooterItem item={item} key={item.id} />
            ))}
        </div>
    );
};

export default CheckoutCard;
