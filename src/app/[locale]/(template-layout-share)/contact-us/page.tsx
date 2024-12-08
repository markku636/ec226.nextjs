'use client';
import ContactForm from '@components/common/form/contact-form';
import Subscription from '@components/common/subscription';
import Container from '@components/ui/container';
import PageHeader from '@components/ui/page-header';
import ContactInfoBlock from '@containers/contact-info';
import { useTranslations } from 'next-intl';

export default function ContactUsPage() {
    const t = useTranslations('common');

    return (
        <>
            <PageHeader pageHeader="text-page-contact-us" />
            <Container>
                <div className="lg: mx-auto my-14 flex w-full flex-col px-0 pb-2 md:flex-row lg:my-16 xl:my-20 xl:max-w-screen-xl">
                    <div className="flex h-full flex-col md:w-full lg:w-2/5 2xl:w-2/6">
                        <ContactInfoBlock />
                    </div>
                    <div className="flex h-full flex-col md:w-full ltr:md:ml-7 rtl:md:mr-7 lg:w-3/5 ltr:lg:pl-7 rtl:lg:pr-7 2xl:w-4/6">
                        <div className="mt-7 flex pb-7 md:-mt-1.5 md:pb-9">
                            <h4 className="text-2xl font-bold text-heading 2xl:text-3xl">{t('text-get-in-touch')}</h4>
                        </div>
                        <ContactForm />
                    </div>
                </div>
                <Subscription />
            </Container>
        </>
    );
}
