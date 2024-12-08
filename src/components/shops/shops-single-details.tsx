'use client';
import usePageLocale from '@/hooks/use-locale';
import { useAppDispatch, useAppSelector } from '@/redux/reducer/hooks';
import { closeShop, openShop, selectUI } from '@/redux/reducer/ui/ui-slice';

import { Drawer } from '@components/common/drawer/drawer';
import motionProps from '@components/common/drawer/motion';
import { ProductGrid } from '@components/product/product-grid';
import ShopSidebar from '@components/shops/shop-sidebar';
import ShopSidebarDrawer from '@components/shops/shop-sidebar-drawer';
import Container from '@components/ui/container';
import Text from '@components/ui/text';
import { useShopQuery } from '@framework/shop/get-shop';

import { getDirection } from '@utils/get-direction';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import StickyBox from 'react-sticky-box';

export default function ShopsSingleDetails() {
    const { slug } = useParams();
    const t = useTranslations('common');
    const { data, isLoading } = useShopQuery(slug as string);

    const dispatch = useAppDispatch();
    const { displayShop } = useAppSelector(selectUI);

    // const { openShop, displayShop, closeShop } = useUI();

    const dir = getDirection(usePageLocale());
    const contentWrapperCSS = dir === 'ltr' ? { left: 0 } : { right: 0 };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className="flex items-center px-8 py-4 mb-4 border-b border-gray-200 lg:hidden">
                <div className="flex flex-shrink-0">
                    <Image src={data?.logo?.original!} alt={data?.name} width={62} height={62} className="rounded-md" />
                </div>
                <div className="ltr:pl-4 rtl:pr-4">
                    <Text variant="heading">{data?.name}</Text>
                    <button
                        className="text-sm font-semibold transition-all text-heading opacity-80 hover:opacity-100"
                        onClick={() => dispatch(openShop())}
                    >
                        {t('text-more-info')}
                    </button>
                </div>
            </div>
            <Container>
                <div className="flex flex-col pb-16 lg:flex-row lg:pb-20 lg:pt-7">
                    <div className="flex-shrink-0 hidden border border-gray-200 rounded-lg lg:block lg:w-80 xl:w-96">
                        <StickyBox offsetTop={50} offsetBottom={20}>
                            <ShopSidebar data={data} />
                        </StickyBox>
                    </div>

                    <div className="w-full ltr:lg:pl-7 rtl:lg:pr-7">
                        <div className="flex mb-5 lg:mb-7">
                            <Image
                                src={data?.cover_image?.original!}
                                alt={data?.name}
                                width={2760}
                                height={1020}
                                className="bg-gray-200 rounded-xl"
                            />
                        </div>
                        <ProductGrid />
                    </div>
                </div>
            </Container>
            {/* TODO: need to use just one drawer component */}
            <Drawer
                placement={dir === 'rtl' ? 'right' : 'left'}
                open={displayShop}
                onClose={() => dispatch(closeShop())}
                contentWrapperStyle={contentWrapperCSS}
                {...motionProps}
            >
                <ShopSidebarDrawer data={data} />
            </Drawer>
        </>
    );
}
