'use client';
import Breadcrumb from '@components/common/breadcrumb';
import Subscription from '@components/common/subscription';
import ProductSingleDetails from '@components/product/product-single-details';
import Container from '@components/ui/container';
import Divider from '@components/ui/divider';
import RelatedProducts from '@containers/related-products';

export default function ProductPage() {
    return (
        <>
            <Divider className="mb-0" />
            <Container>
                <div className="pt-8">
                    <Breadcrumb />
                </div>
                <ProductSingleDetails />
                <RelatedProducts sectionHeading="text-related-products" />
                <Subscription />
            </Container>
        </>
    );
}
