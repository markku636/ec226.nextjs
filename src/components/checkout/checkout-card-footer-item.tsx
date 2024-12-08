'use client';
type FooterItemProps = {
    id: string;
    name: string;
    price: string;
};
export const CheckoutCardFooterItem = ({ item }) => {
    return (
        <div className="flex w-full items-center border-b border-gray-300 py-4 text-sm font-semibold text-heading last:border-b-0 last:pb-0 last:text-base lg:px-3 lg:py-5">
            {item.name}
            <span className="flex-shrink-0 ltr:ml-auto rtl:mr-auto">{item.price}</span>
        </div>
    );
};
