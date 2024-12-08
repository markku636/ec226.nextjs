'use client';
import usePrice from '@framework/product/use-price';
import { generateCartItemName } from '@utils/generate-cart-item-name';
import { Item } from 'src/app/context/cart/cart.utils';

export const CheckoutItem: React.FC<{ item: Item }> = ({ item }) => {
    const { price } = usePrice({
        amount: item.itemTotal,
        currencyCode: 'USD',
    });
    return (
        <div className="flex items-center border-b border-gray-300 py-4 lg:px-3">
            <div className="flex h-16 w-16 flex-shrink-0 rounded-md border border-gray-300">
                <img
                    src={item.image ?? '/assets/placeholder/order-product.svg'}
                    width="64"
                    height="64"
                    className="object-cover"
                />
            </div>
            <h6 className="font-regular text-sm text-heading ltr:pl-3 rtl:pr-3">
                {generateCartItemName(item.name, item.attributes)}
            </h6>
            <div className="flex flex-shrink-0 text-sm text-heading ltr:ml-auto ltr:pl-2 rtl:mr-auto rtl:pr-2">
                {price}
            </div>
        </div>
    );
};
