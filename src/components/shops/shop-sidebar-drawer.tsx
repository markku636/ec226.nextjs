'use client';

import usePageLocale from '@/hooks/use-locale';
import { useAppDispatch } from '@/redux/reducer/hooks';
import { closeShop } from '@/redux/reducer/ui/ui-slice';
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
    const dir = getDirection(usePageLocale());

    return (
        <div className="flex flex-col justify-between w-full h-full">
            <div className="relative flex w-full flex-shrink-0 items-center justify-between border-b border-gray-100 py-0.5 ltr:pr-5 rtl:pl-5 ltr:md:pr-7 rtl:md:pl-7">
                <button
                    className="flex items-center justify-center px-4 py-6 text-2xl text-gray-500 transition-opacity hover:opacity-60 focus:outline-none md:px-5 lg:py-8"
                    onClick={() => dispatch(closeShop())}
                    aria-label="close"
                >
                    {dir === 'rtl' ? <IoArrowForward className="text-black" /> : <IoArrowBack className="text-black" />}
                </button>
                <h2 className="w-full m-0 text-xl font-bold text-center text-heading ltr:pr-6 rtl:pl-6 md:text-2xl">
                    Details
                </h2>
            </div>

            <Scrollbar className="flex-grow mb-auto shop-sidebar-scrollbar">
                <ShopSidebar data={data} />
            </Scrollbar>
        </div>
    );
};

export default ShopSidebarDrawer;
