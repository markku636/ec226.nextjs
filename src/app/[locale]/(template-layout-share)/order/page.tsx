"use client"
import Subscription from '@components/common/subscription';
import OrderInformation from '@components/order/order-information';
import Container from '@components/ui/container';
import PageHeader from '@components/ui/page-header';


export default function Order() {
  return (
    <>
      <PageHeader pageHeader="text-page-order" />
      <Container>
        <OrderInformation />
        <Subscription />
      </Container>
    </>
  );
}
