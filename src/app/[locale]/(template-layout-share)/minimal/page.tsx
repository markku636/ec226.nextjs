'use client';
import BannerCard from '@components/common/banner-card';
import DownloadApps from '@components/common/download-apps';
import Subscription from '@components/common/subscription';
import Support from '@components/common/support';
import BestSellerProductFeed from '@components/product/feeds/best-seller-product-feed';
import NewArrivalsProductFeed from '@components/product/feeds/new-arrivals-product-feed';
import Container from '@components/ui/container';
import Divider from '@components/ui/divider';
import BannerGridBlock from '@containers/banner-grid-block';
import BrandBlock from '@containers/brand-block';
import CategoryGridBlock from '@containers/category-grid-block';
import CollectionBlock from '@containers/collection-block';
import FeatureBlock from '@containers/feature-block';
import HeroWithCategory from '@containers/hero-with-category';
import ProductsWithFlashSale from '@containers/products-with-flash-sale';
import { homeOneBanner as banner, homeTwoHeroBanner as heroBanner } from '@framework/static/banner';
import { collectionData as collection } from '@framework/static/collection';
import { ROUTES } from '@utils/routes';

const flashSaleCarouselBreakpoint = {
    '1280': {
        slidesPerView: 1,
        spaceBetween: 28,
    },
    '768': {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    '0': {
        slidesPerView: 1,
        spaceBetween: 12,
    },
};

export default function Home() {
    return (
        <Container>
            <HeroWithCategory bannerData={heroBanner} />
            <ProductsWithFlashSale carouselBreakpoint={flashSaleCarouselBreakpoint} />
            <BannerGridBlock />
            <CategoryGridBlock sectionHeading="text-featured-categories" />
            <Divider />
            <BestSellerProductFeed />
            <BannerCard
                key={`banner--key${banner.id}`}
                banner={banner}
                href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
                className="mb-12 pb-0.5 lg:mb-14 lg:pb-1 xl:mb-16 xl:pb-0"
            />
            <NewArrivalsProductFeed />
            <Divider />
            <BrandBlock sectionHeading="text-top-brands" />
            <FeatureBlock />
            <CollectionBlock data={collection} />
            <DownloadApps />
            <Support />
            <Subscription />
        </Container>
    );
}
