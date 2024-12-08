'use client';
import Subscription from '@components/common/subscription';
import { ProductGrid } from '@components/product/product-grid';
import Container from '@components/ui/container';

import CategoryBanner from '@containers/category-banner';

export default function Category() {
    return (
        <div className="border-t-2 border-borderBottom">
            <Container>
                <CategoryBanner />
                <div className="pb-16 lg:pb-20">
                    <ProductGrid className="3xl:grid-cols-6" />
                </div>
                <Subscription />
            </Container>
        </div>
    );
}
