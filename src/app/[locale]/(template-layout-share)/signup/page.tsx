"use client"
import SignUpForm from '@components/auth/sign-up-form';
import Subscription from '@components/common/subscription';
import Container from '@components/ui/container';
import PageHeader from '@components/ui/page-header';


export default function SignUpPage() {
  return (
    <>
      <PageHeader pageHeader="Register" />
      <Container>
        <div className="py-16 lg:py-20">
          <SignUpForm />
        </div>
        <Subscription />
      </Container>
    </>
  );
}
