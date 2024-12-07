'use client';
import { BreadcrumbItems } from '@components/common/breadcrumb';
import Subscription from '@components/common/subscription';
import { ProductGrid } from '@components/product/product-grid';
import ShopDiscount from '@components/shop/discount';
import { ShopFilters } from '@components/shop/filters';
import SearchTopBar from '@components/shop/top-bar';
import ActiveLink from '@components/ui/active-link';
import Container from '@components/ui/container';
import StickyBox from 'react-sticky-box';

import { ROUTES } from '@utils/routes';
import { useTranslations } from 'next-intl';

export default function Shop() {
    const t = useTranslations('common');

    return (
        <>
            <ShopDiscount />
            <Container>
                <div className={`flex pt-8 pb-16 lg:pb-20`}>
                    <div className="flex-shrink-0 ltr:pr-24 rtl:pl-24 hidden lg:block w-96">
                        <StickyBox offsetTop={50} offsetBottom={20}>
                            <div className="pb-7">
                                <BreadcrumbItems separator="/">
                                    <ActiveLink href={'/'} activeClassName="font-semibold text-heading">
                                        <div>{t('breadcrumb-home')}</div>
                                    </ActiveLink>
                                    <ActiveLink href={ROUTES.SEARCH} activeClassName="font-semibold text-heading">
                                        <div className="capitalize">{t('breadcrumb-search')}</div>
                                    </ActiveLink>
                                </BreadcrumbItems>
                            </div>
                            <ShopFilters />
                        </StickyBox>
                    </div>

                    <div className="w-full ltr:lg:-ml-9 rtl:lg:-mr-9">
                        <SearchTopBar />
                        <ProductGrid />
                    </div>
                </div>
                <Subscription />
            </Container>
        </>
    );
}
