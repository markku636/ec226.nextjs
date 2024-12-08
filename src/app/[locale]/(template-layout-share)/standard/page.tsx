'use client';
import { useAppDispatch } from '@/redux/features/hooks';
import { openModal, setModalView } from '@/redux/features/ui/uiSlice';
import BannerCard from '@components/common/banner-card';
import DownloadApps from '@components/common/download-apps';
import Subscription from '@components/common/subscription';
import Support from '@components/common/support';
import BestSellerProductFeed from '@components/product/feeds/best-seller-product-feed';
import FlashSaleBlock from '@components/product/feeds/flash-sale-product-feed';
import NewArrivalsProductFeed from '@components/product/feeds/new-arrivals-product-feed';
import Container from '@components/ui/container';
import Divider from '@components/ui/divider';
import BannerCarouselBlock from '@containers/banner-carousel-block';
import BrandBlock from '@containers/brand-block';
import CategoryBlock from '@containers/category-block';
import CollectionBlock from '@containers/collection-block';
import FeatureBlock from '@containers/feature-block';
import HeroBlock from '@containers/hero-block';
import { homeOneBanner as banner, promotionBannerTwo as promotionBanners } from '@framework/static/banner';

import { collectionData as collection } from '@framework/static/collection';
import { ROUTES } from '@utils/routes';
import { useEffect } from 'react';

export default function Home() {
    const dispatch = useAppDispatch();
    // const { openModal, setModalView } = useUI();

    useEffect(() => {
        dispatch(setModalView('NEWSLETTER_VIEW'));

        setTimeout(() => {
            dispatch(openModal());
        }, 2000);
    }, []);
    return (
        <>
            <HeroBlock />
            <Container>
                <FlashSaleBlock />
                <BannerCarouselBlock bannerData={promotionBanners} />
                <CategoryBlock sectionHeading="text-shop-by-category" />
                <Divider />
                <BestSellerProductFeed />
                <BannerCard
                    key={`banner--key${banner.id}`}
                    banner={banner}
                    href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
                    className="mb-12 pb-0.5 lg:mb-14 lg:pb-1 xl:mb-16 xl:pb-0"
                    classNameInner="h-28 sm:h-auto"
                />
                <NewArrivalsProductFeed />
                <Divider />
                <BrandBlock sectionHeading="text-top-brands" />
                <CollectionBlock data={collection} />
                <FeatureBlock />
                <DownloadApps className="bg-linen" />
                <Support />
                <Subscription className="px-5 bg-linen sm:px-8 md:px-16 2xl:px-24" />
            </Container>
        </>
    );
}

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//     const queryClient = new QueryClient();

//     await queryClient.prefetchQuery([API_ENDPOINTS.FLASH_SALE_PRODUCTS, { limit: 10 }], fetchFlashSaleProducts);
//     await queryClient.prefetchQuery([API_ENDPOINTS.CATEGORIES, { limit: 10 }], fetchCategories);
//     await queryClient.prefetchQuery([API_ENDPOINTS.BEST_SELLER_PRODUCTS, { limit: 10 }], fetchBestSellerProducts);
//     await queryClient.prefetchQuery([API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS, { limit: 10 }], fetchNewArrivalProducts);
//     await queryClient.prefetchQuery([API_ENDPOINTS.BRANDS, { limit: 0 }], fetchBrands);

//     return {
//         props: {
//             dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//             ...(await (locale!, ['common', 'forms', 'menu', 'footer'])),
//         },
//         revalidate: 60,
//     };
// };
