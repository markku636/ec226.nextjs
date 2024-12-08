'use client';
import BannerCard from '@components/common/banner-card';
import DownloadApps from '@components/common/download-apps';
import Instagram from '@components/common/instagram';
import Subscription from '@components/common/subscription';
import Support from '@components/common/support';
import NewArrivalsProductFeed from '@components/product/feeds/new-arrivals-product-feed';
import Container from '@components/ui/container';
import Divider from '@components/ui/divider';
import BannerSliderBlock from '@containers/banner-slider-block';
import BannerWithProducts from '@containers/banner-with-products';
import BrandBlock from '@containers/brand-block';
import CategoryBlock from '@containers/category-block';
import CategoryGridBlock from '@containers/category-grid-block';
import ExclusiveBlock from '@containers/exclusive-block';
import HeroWithCategoryFlash from '@containers/hero-with-category-flash';
import ProductsFlashSaleBlock from '@containers/product-flash-sale-block';
import ProductsFeatured from '@containers/products-featured';

import { homeFourBanner as banner } from '@framework/static/banner';
import { ROUTES } from '@utils/routes';

export default function Home() {
    return (
        <>
            <Container>
                <HeroWithCategoryFlash />
            </Container>
            <BannerSliderBlock />
            <Container>
                <CategoryBlock sectionHeading="text-shop-by-category" />
                <BannerWithProducts
                    sectionHeading="text-on-selling-products"
                    categorySlug="/search"
                    variant="reverse"
                />
                <BannerCard
                    banner={banner[0]}
                    href={`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
                    className="mb-11 md:mb-12 lg:mb-14 2xl:mb-16"
                />
                <ProductsFeatured sectionHeading="text-featured-products" variant="center" />
                <BannerCard
                    banner={banner[1]}
                    href={`${ROUTES.COLLECTIONS}/${banner[1].slug}`}
                    className="mb-11 md:mb-12 lg:mb-14 2xl:mb-16"
                />
                <ProductsFlashSaleBlock date={'2023-03-01T01:02:03'} />
                <BrandBlock sectionHeading="text-top-brands" />
                <ExclusiveBlock />
                <NewArrivalsProductFeed />
                <BannerCard
                    banner={banner[2]}
                    href={`${ROUTES.COLLECTIONS}/${banner[2].slug}`}
                    className="mb-12 pb-0.5 lg:mb-14 lg:pb-1 xl:mb-16 xl:pb-0"
                />
                <CategoryGridBlock sectionHeading="text-featured-categories" />
                <DownloadApps />
                <Support />
                <Instagram />
                <Subscription className="bg-opacity-0 px-5 py-12 sm:px-16 md:py-14 xl:px-0 xl:py-16" />
            </Container>
            <Divider className="mb-0" />
        </>
    );
}

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await (locale!, ['common', 'forms', 'menu', 'footer'])),
//     },
//   };
// };
