'use client';
import BannerCard from '@components/common/banner-card';
import Instagram from '@components/common/instagram';
import SubscriptionWithBg from '@components/common/subscription-with-bg';
import NewArrivalsProductFeed from '@components/product/feeds/new-arrivals-product-feed';
import Container from '@components/ui/container';
import BannerBlock from '@containers/banner-block';
import BrandBlock from '@containers/brand-block';
import CategoryBlockIcon from '@containers/category-block-icon';
import CollectionBlock from '@containers/collection-block';
import HeroWithCategory from '@containers/hero-with-category';
import ProductsFlashSaleCarousel from '@containers/product-flash-sale-carousel';
import ProductsFeatured from '@containers/products-featured';
import ProductsTopBlock from '@containers/products-top-block';
import SaleBannerWithProducts from '@containers/sale-banner-with-products';
import TestimonialCarousel from '@containers/testimonial-carousel';
import {
    homeEightCoupons as banner,
    bannerDataFour,
    bannerDataFourMobile,
    homeEightWinterBanner as bannerWinter,
    homeEightHeroBanner as heroBanner,
} from '@framework/static/banner';
import { collectionModernData as collection } from '@framework/static/collection';
import { ROUTES } from '@utils/routes';

export default function Home() {
    return (
        <>
            <Container>
                <HeroWithCategory
                    bannerData={heroBanner}
                    paginationPosition="left"
                    className="hero-slider-pagination-area mb-12 md:mb-14 xl:mb-16"
                />
                <BrandBlock sectionHeading="text-top-brands" />
                <SaleBannerWithProducts
                    sectionHeading="text-on-selling-products"
                    categorySlug="/search"
                    variant="center"
                />
                <ProductsFeatured variant="flat" sectionHeading="text-featured-products" limit={8} />
                <BannerBlock data={bannerDataFour} className="mb-12 hidden sm:flex md:mb-14 xl:mb-16" />
                <BannerBlock data={bannerDataFourMobile} className="mb-12 sm:hidden md:mb-14 xl:mb-16" />
                <CategoryBlockIcon sectionHeading="text-browse-categories" variant="circle" />
                <NewArrivalsProductFeed />
                <BannerCard
                    banner={bannerWinter}
                    href={`${ROUTES.COLLECTIONS}/${bannerWinter.slug}`}
                    className="mb-12 pb-0.5 lg:mb-14 lg:pb-1 xl:mb-16 xl:pb-0"
                />
                <ProductsFlashSaleCarousel />
                <ProductsTopBlock sectionHeading="text-top-products" />
                <CollectionBlock variant="modern" data={collection} />
                <BannerCard
                    banner={banner}
                    href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
                    className="mb-12 pb-0.5 lg:mb-14 lg:pb-1 xl:mb-16 xl:pb-0"
                />
                <TestimonialCarousel sectionHeading="text-testimonial" />
                <Instagram className="mb-12 md:mb-14 xl:mb-16" />
                <SubscriptionWithBg />
            </Container>
        </>
    );
}
