'use client';

import usePageLocale from '@/hooks/use-locale';
import Scrollbar from '@components/common/scrollbar';
import { ShopFilters } from '@components/shop/filters';
import { getDirection } from '@utils/get-direction';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

const FilterSidebar = () => {
    // const { closeFilter } = useUI();
    const router = useRouter();
    const t = useTranslations('common');
    const dir = getDirection(usePageLocale());

    return (
        <div className="flex flex-col justify-between w-full h-full">
            <div className="relative flex w-full flex-shrink-0 items-center justify-between border-b border-gray-100 py-0.5 ltr:pr-5 rtl:pl-5 ltr:md:pr-7 rtl:md:pl-7">
                <button
                    className="flex items-center justify-center px-4 py-6 text-2xl text-gray-500 transition-opacity hover:opacity-60 focus:outline-none md:px-5 lg:py-8"
                    onClick={() => alert(' dispatch(closeFilter())')}
                    aria-label="close"
                >
                    {dir === 'rtl' ? <IoArrowForward className="text-black" /> : <IoArrowBack className="text-black" />}
                </button>
                <h2 className="w-full m-0 text-xl font-bold text-center text-heading ltr:pr-6 rtl:pl-6 md:text-2xl">
                    {t('text-filters')}
                </h2>
            </div>

            <Scrollbar className="flex-grow mb-auto menu-scrollbar">
                <div className="flex flex-col px-5 py-7 text-heading md:px-7">
                    <ShopFilters />
                </div>
            </Scrollbar>

            <div className="flex items-center justify-center flex-shrink-0 text-sm leading-4 text-white h-14 bg-heading px-7 md:text-base">
                9,608 {t('text-items')}
            </div>
        </div>
    );
};

export default FilterSidebar;
