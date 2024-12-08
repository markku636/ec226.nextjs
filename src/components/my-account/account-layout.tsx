'use client';
import Subscription from '@components/common/subscription';
import AccountNav from '@components/my-account/account-nav';
import Container from '@components/ui/container';
import PageHeader from '@components/ui/page-header';

const AccountLayout = ({ children }) => {
    return (
        <>
            <PageHeader pageHeader="text-page-my-account" />
            <Container>
                <div className="mx-auto flex w-full px-0 py-16 md:flex-row  lg:py-20 xl:max-w-screen-xl">
                    <div className="flex w-full flex-col md:flex-row">
                        <AccountNav />
                        <div className="mt-4 md:mt-0 md:w-4/6 2xl:w-8/12">{children}</div>
                    </div>
                </div>

                <Subscription />
            </Container>
        </>
    );
};

export default AccountLayout;
