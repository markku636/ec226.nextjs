'use client';
import BannerCard from '@components/common/banner-card';
import DownloadApps from '@components/common/download-apps';
import Instagram from '@components/common/instagram';
import Subscription from '@components/common/subscription';
import Support from '@components/common/support';
import NewArrivalsProductFeed from '@components/product/feeds/new-arrivals-product-feed';
import Container from '@components/ui/container';
import Divider from '@components/ui/divider';
import BannerBlock from '@containers/banner-block';
import BannerSliderBlock from '@containers/banner-slider-block';
import BannerWithProducts from '@containers/banner-with-products';
import BrandGridBlock from '@containers/brand-grid-block';
import CategoryBlock from '@containers/category-block';
import ExclusiveBlock from '@containers/exclusive-block';
import ProductsFlashSaleBlock from '@containers/product-flash-sale-block';
import ProductsFeatured from '@containers/products-featured';
import { ROUTES } from '@utils/routes';

// All data file
import { homeFiveBanner as banner, bannerDataOne, bannerDataTwo } from '@framework/static/banner';

export default function Home() {
    return (
        <>
            <ExclusiveBlock className="mx-auto mb-12 max-w-[1920px] px-2.5 md:mb-14 xl:mb-16" />
            <Container>
                <CategoryBlock sectionHeading="text-shop-by-category" />
                <ProductsFeatured sectionHeading="text-featured-products" variant="center" />
            </Container>
            <BannerBlock data={bannerDataOne} />
            <Container>
                <BannerWithProducts sectionHeading="text-on-selling-products" categorySlug="/#" />
            </Container>
            <BannerSliderBlock />
            <Container>
                <ProductsFlashSaleBlock date={'2023-12-01T01:02:03'} />
            </Container>
            <BannerBlock data={bannerDataTwo} />
            <Container>
                <BrandGridBlock sectionHeading="text-top-brands" />
                <BannerCard
                    banner={banner}
                    href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
                    className="mb-11 md:mb-12 lg:mb-14 2xl:mb-16"
                    effectActive={true}
                />
                <NewArrivalsProductFeed />
                <DownloadApps />
                <Support />
                <Instagram />
                <Subscription className="bg-opacity-0 px-8 sm:px-16 xl:px-0" />
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
