'use client';
import Container from '@components/ui/container';
import HeroSlider from '@containers/hero-slider';
import ProductsFeatured from '@containers/products-featured';

import BannerCard from '@components/common/banner-card';
import SubscriptionWithBg from '@components/common/subscription-with-bg';
import NewArrivalsProductFeed from '@components/product/feeds/new-arrivals-product-feed';
import BrandGridBlock from '@containers/brand-grid-block';
import CategoryBlockIcon from '@containers/category-block-icon';
import ProductsFlashSaleCarousel from '@containers/product-flash-sale-carousel';
import SaleBannerGrid from '@containers/sale-banner-grid';
import SaleBannerWithProducts from '@containers/sale-banner-with-products';
import TestimonialCarousel from '@containers/testimonial-carousel';
import { homeSixCoupons as banner, homeSixHeroSlider as banners } from '@framework/static/banner';
import { ROUTES } from '@utils/routes';

export default function Home() {
    return (
        <>
            <Container>
                <HeroSlider data={banners} buttonGroupClassName="hidden" />
                <SaleBannerGrid />
                <CategoryBlockIcon sectionHeading="text-featured-categories" />
                <ProductsFeatured limit={4} variant="combined" sectionHeading="text-featured-products" />
                <ProductsFlashSaleCarousel />
                <BannerCard
                    key={`banner--key${banner.id}`}
                    banner={banner}
                    href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
                    className="mb-12 pb-0.5 lg:mb-14 lg:pb-1 xl:mb-16 xl:pb-0"
                />
                <NewArrivalsProductFeed />
                <SaleBannerWithProducts sectionHeading="text-on-selling-products" categorySlug="/search" />
                <BrandGridBlock sectionHeading="text-top-brands" limit={12} variant="6column" />
                <TestimonialCarousel sectionHeading="text-testimonial" />
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
