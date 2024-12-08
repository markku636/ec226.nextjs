'use client';

import VendorCard from '@components/common/vendor-card';
import Alert from '@components/ui/alert';
import { useShopsQuery } from '@framework/shop/get-shops';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { BsGridFill, BsList } from 'react-icons/bs';

const ShopsPageContent = () => {
    const [gridView, setGridView] = useState(Boolean(false));
    const t = useTranslations('common');
    const { data, error } = useShopsQuery({
        limit: 9,
    });

    const listViewHandel = () => {
        setTimeout(() => {
            setGridView(false);
        }, 300);
    };

    const gridViewHandel = () => {
        setTimeout(() => {
            setGridView(true);
        }, 300);
    };

    if (error) {
        return <Alert message={error?.message} />;
    }

    return (
        <div className="border-t border-gray-200 px-4 pb-14 pt-10 md:px-8 lg:pb-16 lg:pt-12 xl:pb-20 xl:pt-14">
            <div className="mx-auto w-full xl:max-w-[1170px]">
                <div className="mb-6 flex items-center justify-between xl:mb-8">
                    <h2 className="text-lg font-bold text-heading md:text-xl lg:text-2xl xl:text-3xl">
                        {t('text-super-shop')}
                    </h2>
                    <div className="flex flex-shrink-0 items-center ltr:ml-2 rtl:mr-2">
                        <button
                            aria-label="list"
                            className={`relative top-[1px] text-2xl transition-all ${
                                gridView === false ? 'text-heading' : 'text-body'
                            }`}
                            onClick={listViewHandel}
                        >
                            <BsList className="" />
                        </button>
                        <button
                            aria-label="grid"
                            className={`text-lg transition-all ltr:ml-1.5 rtl:mr-1.5 ${
                                gridView === true ? 'text-heading' : 'text-body'
                            }`}
                            onClick={gridViewHandel}
                        >
                            <BsGridFill />
                        </button>
                    </div>
                </div>
                <div className="grid gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-5 xl:gap-6">
                    {data?.shop?.data?.map((item) => (
                        <VendorCard key={item.id} shop={item} variant={gridView === true ? 'grid' : 'list'} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopsPageContent;
