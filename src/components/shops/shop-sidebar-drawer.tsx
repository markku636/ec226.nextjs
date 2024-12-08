'use client';
import { useAppDispatch } from '@/redux/features/hooks';
import { closeShop } from '@/redux/features/ui/uiSlice';
import Scrollbar from '@components/common/scrollbar';
import { getDirection } from '@utils/get-direction';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import ShopSidebar from './shop-sidebar';

interface Props {
    data: any;
}

const ShopSidebarDrawer: React.FC<Props> = ({ data }) => {
    const dispatch = useAppDispatch();
    // const { closeShop } = useUI();
    const router = useRouter();
    const dir = getDirection(router.locale);

    return (
        <div className="flex h-full w-full flex-col justify-between">
            <div className="relative flex w-full flex-shrink-0 items-center justify-between border-b border-gray-100 py-0.5 ltr:pr-5 rtl:pl-5 ltr:md:pr-7 rtl:md:pl-7">
                <button
                    className="flex items-center justify-center px-4 py-6 text-2xl text-gray-500 transition-opacity hover:opacity-60 focus:outline-none md:px-5 lg:py-8"
                    onClick={() => dispatch(closeShop())}
                    aria-label="close"
                >
                    {dir === 'rtl' ? <IoArrowForward className="text-black" /> : <IoArrowBack className="text-black" />}
                </button>
                <h2 className="m-0 w-full text-center text-xl font-bold text-heading ltr:pr-6 rtl:pl-6 md:text-2xl">
                    Details
                </h2>
            </div>

            <Scrollbar className="shop-sidebar-scrollbar mb-auto flex-grow">
                <ShopSidebar data={data} />
            </Scrollbar>
        </div>
    );
};

export default ShopSidebarDrawer;
