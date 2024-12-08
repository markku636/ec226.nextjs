'use client';
import { BreadcrumbItems } from '@components/common/breadcrumb';
import Subscription from '@components/common/subscription';
import ActiveLink from '@components/ui/active-link';
import Container from '@components/ui/container';
import StickyBox from 'react-sticky-box';

import { CollectionFilters } from '@components/collection/collection-filters';
import CollectionTopBar from '@components/collection/collection-top-bar';
import { ProductGrid } from '@components/product/product-grid';
import { ROUTES } from '@utils/routes';
import { useTranslations } from 'next-intl';

export default function Collections() {
    const t = useTranslations('common');

    return (
        <div className="border-t-2 border-borderBottom">
            <Container>
                <div className={'flex pb-16 pt-8 lg:pb-20'}>
                    <div className="flex-shrink-0 hidden w-96 pe-24 lg:block">
                        <StickyBox offsetTop={50} offsetBottom={20}>
                            <div className="pb-7">
                                <BreadcrumbItems separator="/">
                                    <ActiveLink href={'/'} activeClassName="font-semibold text-heading">
                                        <div>{t('breadcrumb-home')}</div>
                                    </ActiveLink>
                                    <ActiveLink href={ROUTES.SEARCH} activeClassName="font-semibold text-heading">
                                        <div className="capitalize">{t('breadcrumb-collection')}</div>
                                    </ActiveLink>
                                </BreadcrumbItems>
                            </div>
                            <CollectionFilters />
                        </StickyBox>
                    </div>

                    <div className="w-full lg:-ms-9">
                        <CollectionTopBar />
                        <ProductGrid />
                    </div>
                </div>
                <Subscription />
            </Container>
        </div>
    );
}
