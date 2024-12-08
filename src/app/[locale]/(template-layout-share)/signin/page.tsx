'use client';
import LoginForm from '@components/auth/login-form';
import Subscription from '@components/common/subscription';
import Container from '@components/ui/container';
import PageHeader from '@components/ui/page-header';

export default function SignInPage() {
    return (
        <>
            <PageHeader pageHeader="Sign In" />
            <Container>
                <div className="py-16 lg:py-20">
                    <LoginForm />
                </div>
                <Subscription />
            </Container>
        </>
    );
}
