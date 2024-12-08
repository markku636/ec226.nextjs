'use client';

import usePageLocale from '@/hooks/use-locale';
import { Drawer } from '@components/common/drawer/drawer';
import motionProps from '@components/common/drawer/motion';
import Text from '@components/ui/text';
import { getDirection } from '@utils/get-direction';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { MdCollectionsBookmark } from 'react-icons/md';
import CollectionFilterSidebar from './collection-filter-sidebar';

const CollectionTopBar = () => {
    // const { openFilter, displayFilter, closeFilter } = useUI();
    const t = useTranslations('common');
    const { slug } = useParams();

    const collectionTitle = slug?.toString().split('-').join(' ');
    const dir = getDirection(usePageLocale());
    const contentWrapperCSS = dir === 'ltr' ? { left: 0 } : { right: 0 };

    return (
        <div className="flex items-center justify-between mb-7">
            <Text variant="pageHeading" className="hidden pb-1 capitalize lg:inline-flex">
                {collectionTitle}
            </Text>
            <button
                className="flex items-center px-4 py-2 text-sm font-semibold transition duration-200 ease-in-out border border-gray-300 rounded-md text-heading hover:bg-gray-200 focus:outline-none lg:hidden"
                onClick={() => alert(' => dispatch(openFilter())')}
            >
                <MdCollectionsBookmark className="text-lg" />
                <span className="ltr:pl-2 rtl:pr-2">{t('text-filters')}</span>
            </button>
            <div className="flex items-center justify-end">
                <div className="flex-shrink-0 text-xs leading-4 text-body md:text-sm">9,608 {t('text-items')}</div>
            </div>
            {/* TODO: need to use just one drawer component */}
            <Drawer
                placement={dir === 'rtl' ? 'right' : 'left'}
                open={true}
                onClose={() => alert(' dispatch(closeFilter())')}
                contentWrapperStyle={contentWrapperCSS}
                {...motionProps}
            >
                <CollectionFilterSidebar />
            </Drawer>
        </div>
    );
};

export default CollectionTopBar;
