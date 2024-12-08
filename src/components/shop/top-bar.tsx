'use client';

import usePageLocale from '@/hooks/use-locale';
import { useAppDispatch, useAppSelector } from '@/redux/reducer/hooks';
import { closeSidebar, selectUI } from '@/redux/reducer/ui/ui-slice';
import { Drawer } from '@components/common/drawer/drawer';
import motionProps from '@components/common/drawer/motion';
import FilterIcon from '@components/icons/filter-icon';
import FilterSidebar from '@components/shop/filter-sidebar';
import ListBox from '@components/ui/list-box';
import Text from '@components/ui/text';
import { getDirection } from '@utils/get-direction';
import { useTranslations } from 'next-intl';

export default function SearchTopBar() {
    // const { openFilter, displayFilter, closeFilter } = useUI();
    const t = useTranslations('common');

    const dir = getDirection(usePageLocale());
    const contentWrapperCSS = dir === 'ltr' ? { left: 0 } : { right: 0 };

    const { displaySidebar } = useAppSelector(selectUI);
    const dispatch = useAppDispatch();

    return (
        <div className="flex items-center justify-between mb-7">
            <Text variant="pageHeading" className="hidden pb-1 lg:inline-flex">
                {t('text-casual-wear')}
            </Text>
            <button
                className="flex items-center px-4 py-2 text-sm font-semibold transition duration-200 ease-in-out border border-gray-200 rounded-md text-heading hover:bg-gray-100 focus:outline-none lg:hidden"
                onClick={() => alert(' dispatch(openFilter())')}
            >
                <FilterIcon />
                <span className="ltr:pl-2.5 rtl:pr-2.5">{t('text-filters')}</span>
            </button>
            <div className="flex items-center justify-end">
                <div className="flex-shrink-0 hidden text-xs leading-4 text-body ltr:pl-2 ltr:pr-4 rtl:pl-4 rtl:pr-2 md:text-sm ltr:md:mr-6 rtl:md:ml-6 lg:block">
                    9,608 {t('text-items')}
                </div>
                <ListBox
                    options={[
                        { name: 'text-sorting-options', value: 'options' },
                        { name: 'text-newest', value: 'newest' },
                        { name: 'text-popularity', value: 'popularity' },
                        { name: 'text-price-low-high', value: 'low-high' },
                        { name: 'text-price-high-low', value: 'high-low' },
                    ]}
                />
            </div>
            {/* TODO: need to use just one drawer component */}
            <Drawer
                placement={dir === 'rtl' ? 'right' : 'left'}
                open={displaySidebar}
                onClose={() => dispatch(closeSidebar())}
                contentWrapperStyle={contentWrapperCSS}
                {...motionProps}
            >
                <FilterSidebar />
            </Drawer>
        </div>
    );
}
