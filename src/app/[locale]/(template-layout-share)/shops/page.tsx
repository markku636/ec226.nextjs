import Subscription from '@components/common/subscription';
import ShopsPageContent from '@components/shops/shops-page-content';
import Container from '@components/ui/container';

export default function ShopsPage() {
    return (
        <>
            <ShopsPageContent />
            <Container>
                <Subscription />
            </Container>
        </>
    );
}
