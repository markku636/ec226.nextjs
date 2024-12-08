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
import { useTranslations } from 'use-intl';

export default function Products() {
    const t = useTranslations('common');

    return (
        <>
            <ShopDiscount />
            <Container>
                <div className={'flex pb-16 pt-8 lg:pb-20'}>
                    <div className="flex-shrink-0 hidden w-96 pe-24 lg:block">
                        <StickyBox offsetTop={50} offsetBottom={20}>
                            <div className="pb-7">
                                <BreadcrumbItems separator="/">
                                    <ActiveLink href={'/'} activeClassName="font-semibold text-heading">
                                        <div>{t('breadcrumb-home')}</div>
                                    </ActiveLink>
                                    <ActiveLink href={ROUTES.PRODUCT} activeClassName="font-semibold text-heading">
                                        <div className="capitalize">{t('breadcrumb-products')}</div>
                                    </ActiveLink>
                                </BreadcrumbItems>
                            </div>
                            <ShopFilters />
                        </StickyBox>
                    </div>

                    <div className="w-full lg:-ms-9">
                        <SearchTopBar />
                        <ProductGrid />
                    </div>
                </div>
                <Subscription />
            </Container>
        </>
    );
}
