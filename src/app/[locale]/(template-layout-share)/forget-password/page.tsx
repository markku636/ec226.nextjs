"use client"
import ForgetPasswordForm from '@components/auth/forget-password-form';
import Subscription from '@components/common/subscription';
import Container from '@components/ui/container';
import PageHeader from '@components/ui/page-header';


export default function ForgetPasswordPage() {
  return (
    <>
      <PageHeader pageHeader="Forget Password" />
      <Container>
        <div className="py-16 lg:py-20">
          <ForgetPasswordForm />
        </div>
        <Subscription />
      </Container>
    </>
  );
}
