'use client';
import Container from '@components/ui/container';
import HeroSlider from '@containers/hero-slider';
import ProductsFeatured from '@containers/products-featured';

import BannerCard from '@components/common/banner-card';
import NewArrivalsProductFeedWithTabs from '@components/product/feeds/new-arrivals-product-feed-with-tabs';
import CategoryBlockIcon from '@containers/category-block-icon';
import CollectionBlock from '@containers/collection-block';
import TestimonialCarousel from '@containers/testimonial-carousel';
import { homeSevenBanner as banner } from '@framework/static/banner';
import { collectionContemporaryData as collection } from '@framework/static/collection';
import { ROUTES } from '@utils/routes';
// All data file
import Instagram from '@components/common/instagram';
import Subscription from '@components/common/subscription';
import RecentProductFeed from '@components/product/feeds/recent-product-feed';
import TrendingProductFeedWithTabs from '@components/product/feeds/trending-product-feed-with-tabs';
import BrandTimerBlock from '@containers/brand-timer-block';
import SaleBannerGrid from '@containers/sale-banner-grid';
import {
    bannerDataContemporary,
    homeContemporaryHeroSlider as banners,
    contemporaryBanner1,
    contemporaryBanner2,
} from '@framework/static/banner';
import dynamic from 'next/dynamic';
const DownloadApps = dynamic(() => import('@components/common/download-apps'));

export default function Home() {
    return (
        <>
            <HeroSlider
                data={banners}
                variantRounded="default"
                variant="fullWidth"
                prevNextButtons="none"
                className="!md:mb-14 !xl:mb-[60px] !mb-12"
            />
            <Container className="border[#E6E6E6] border-b-2">
                <CategoryBlockIcon sectionHeading="text-browse-categories" variant="list" />
                <SaleBannerGrid data={bannerDataContemporary} className="mb-12 md:mb-14 xl:mb-16" />
                <NewArrivalsProductFeedWithTabs />
                <BrandTimerBlock sectionHeading="text-top-brands-deal" className="mb-12 md:mb-14 xl:mb-16" />
                <ProductsFeatured limit={3} variant="modern" sectionHeading="text-featured-products" />
                <BannerCard
                    key={`banner--key${banner.id}`}
                    banner={contemporaryBanner1}
                    href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
                    className="mb-12 pb-0.5 md:-mt-2.5 md:mb-14 md:pb-0 lg:pb-1 xl:mb-16 xl:pb-0"
                />
                <TrendingProductFeedWithTabs />
                <BannerCard
                    key={`banner--key1${banner.id}`}
                    banner={contemporaryBanner2}
                    href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
                    className="mb-12 pb-0.5 md:-mt-2.5 md:mb-14 md:pb-0 lg:pb-1 xl:mb-16 xl:pb-0"
                />

                <CollectionBlock variant="trendy" data={collection} sectionHeading="text-trending-collection" />
                <RecentProductFeed />
                <DownloadApps className="mb-12 bg-app-pattern md:mb-14 xl:mb-16" variant="modern" />
                <TestimonialCarousel
                    sectionHeading="text-testimonial"
                    type="list"
                    className="relative mb-12 md:mb-14 xl:mb-16"
                />
                <Instagram className="mb-4 md:mb-5 xl:mb-16" variant="rounded" />
                <Subscription className="!md:py-0 !lg:py-0 mb-12 mt-12 bg-opacity-0 !py-0 px-5 sm:px-16 md:mb-14 lg:mt-16 xl:mb-16 xl:px-0" />
            </Container>
        </>
    );
}

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery([API_ENDPOINTS.FLASH_SALE_PRODUCTS, { limit: 10 }], fetchFlashSaleProducts);
//   await queryClient.prefetchQuery([API_ENDPOINTS.CATEGORIES, { limit: 10 }], fetchCategories);
//   await queryClient.prefetchQuery([API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS, { limit: 10 }], fetchNewArrivalProducts);
//   await queryClient.prefetchQuery([API_ENDPOINTS.BRANDS, { limit: 0 }], fetchBrands);

//   return {
//     props: {
//       dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//       ...(await (locale!, ['common', 'forms', 'menu', 'footer'])),
//     },
//     revalidate: 60,
//   };
// };
