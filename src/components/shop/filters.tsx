'use client';
import isEmpty from 'lodash/isEmpty';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { BrandFilter } from './brand-filter';
import { CategoryFilter } from './category-filter';
import { ColorFilter } from './color-filter';
import { FilteredItem } from './filtered-item';
import { PriceFilter } from './price-filter';

export const ShopFilters = () => {
    const router = useRouter();
    const { pathname, query } = router;
    const t = useTranslations('common');

    return (
        <div className="pt-1">
            <div className="mb-7 block border-b border-gray-300 pb-7">
                <div className="mb-2.5 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-heading md:text-2xl">{t('text-filters')}</h2>
                    <button
                        className="mt-0.5 flex-shrink text-xs transition duration-150 ease-in hover:text-heading focus:outline-none"
                        aria-label="Clear All"
                        onClick={() => {
                            router.push(pathname);
                        }}
                    >
                        {t('text-clear-all')}
                    </button>
                </div>
                <div className="-m-1.5 flex flex-wrap pt-2">
                    {!isEmpty(query) &&
                        Object.values(query)
                            .join(',')
                            .split(',')
                            .map((v, idx) => (
                                <FilteredItem
                                    itemKey={Object.keys(query).find((k) => query[k]?.includes(v))!}
                                    itemValue={v}
                                    key={idx}
                                />
                            ))}
                </div>
            </div>

            <CategoryFilter />
            <BrandFilter />
            <PriceFilter />
            <ColorFilter />
        </div>
    );
};
