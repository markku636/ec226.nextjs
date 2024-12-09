'use client';
import CheckoutCard from '@components/checkout/checkout-card';
import CheckoutForm from '@components/checkout/checkout-form';
import Subscription from '@components/common/subscription';
import Container from '@components/ui/container';
import PageHeader from '@components/ui/page-header';

export default function CheckoutPage() {
    return (
        <>
            <PageHeader pageHeader="text-page-checkout" />
            <Container>
                <div className="mx-auto flex w-full flex-col px-0 py-14 md:flex-row xl:max-w-screen-xl xl:py-20 2xl:max-w-screen-2xl">
                    <div className="-mt-1.5 flex h-full  flex-col md:w-full lg:w-3/5">
                        <CheckoutForm />
                    </div>
                    <div className="-mt-1.5 flex h-full flex-col md:w-full ltr:md:ml-7 rtl:md:mr-7 lg:w-2/5 ltr:lg:ml-10 rtl:lg:mr-10 ltr:xl:ml-14 rtl:xl:mr-14">
                        <CheckoutCard />
                    </div>
                </div>
                <Subscription />
            </Container>
        </>
    );
}
