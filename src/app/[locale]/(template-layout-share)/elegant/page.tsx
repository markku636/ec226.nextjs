'use client';
import Container from '@components/ui/container';
import HeroSlider from '@containers/hero-slider';
import ProductsFeatured from '@containers/products-featured';

import BannerCard from '@components/common/banner-card';
import SubscriptionWithBg from '@components/common/subscription-with-bg';
import NewArrivalsProductFeed from '@components/product/feeds/new-arrivals-product-feed';
import BannerBlock from '@containers/banner-block';
import BrandGridBlock from '@containers/brand-grid-block';
import CategoryBlockIcon from '@containers/category-block-icon';
import CollectionBlock from '@containers/collection-block';
import ExclusiveBlock from '@containers/exclusive-block';
import ProductsFlashSaleCarousel from '@containers/product-flash-sale-carousel';
import TestimonialCarousel from '@containers/testimonial-carousel';
import { homeSevenBanner as banner } from '@framework/static/banner';
import { collectionModernData as collection } from '@framework/static/collection';
import { ROUTES } from '@utils/routes';

// All data file
import ProductsTopBlock from '@containers/products-top-block';
import { bannerDataThree, homeElegantHeroSlider as banners } from '@framework/static/banner';

export default function Home() {
    return (
        <>
            <HeroSlider data={banners} variantRounded="default" variant="fullWidth" />
            <Container>
                <BannerBlock data={bannerDataThree} className="mb-12 md:mb-14 xl:mb-16" />
                <CategoryBlockIcon sectionHeading="text-browse-categories" variant="modern" />
                <ProductsFeatured limit={4} variant="combined" sectionHeading="text-featured-products" />
                <ProductsFlashSaleCarousel />
                <BannerCard
                    key={`banner--key${banner.id}`}
                    banner={banner}
                    href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
                    className="mb-12 pb-0.5 md:-mt-2.5 md:mb-14 md:pb-0 lg:pb-1 xl:mb-16 xl:pb-0"
                />
                <BrandGridBlock sectionHeading="text-top-brands" limit={12} variant="6column" />
                <ProductsTopBlock sectionHeading="text-top-products" />
                <ExclusiveBlock variant="modern" />
                <NewArrivalsProductFeed />
                <TestimonialCarousel sectionHeading="text-testimonial" />
                <CollectionBlock variant="modern" data={collection} />
                <SubscriptionWithBg />
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
