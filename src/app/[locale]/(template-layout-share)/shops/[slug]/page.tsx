import Subscription from '@components/common/subscription';
import Container from '@components/ui/container';

import ShopsSingleDetails from '@components/shops/shops-single-details';

export default function ShopDetailsPage() {
    return (
        <div className="border-t border-gray-200">
            <ShopsSingleDetails />
            <Container>
                <Subscription />
            </Container>
        </div>
    );
}
