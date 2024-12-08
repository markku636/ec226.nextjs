import { SiteSchema } from '@/const/seo-schema';
import { generateDefaultMetadata } from '@/metadata-config';
import { fakeFetchLayout2 } from '@/services/mock-service';

import { ILayoutProps } from '@/typing/page-props';
import ManagedDrawer from '@components/common/drawer/managed-drawer';
import ManagedModal from '@components/common/modal/managed-modal';
import NewManageModal from '@components/common/modal/new-managed-modal';
import Search from '@components/common/search';
import Footer from '@components/layout/footer/footer';
import Header from '@components/layout/header/header';
import Mainbody from '@components/layout/main-body';
import MobileNavigation from '@components/layout/mobile-navigation/mobile-navigation';
import MultiLangClientProvider from '@providers/multi-language-provider';
import translateDeep from '@utils/muilti-language-translations/translate-deep';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { headers } from 'next/headers';
import { use } from 'react';

type Props = {
    params: Promise<{ locale: string }>;
};

// see /ancient, /checkout page
export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const params = await props.params;
    const locale = params.locale;

    const url = new URL((await headers()).get('x-url')!);

    return generateDefaultMetadata(locale, url.pathname);
}

export default function Layout(props: Readonly<ILayoutProps>) {
    const params = use(props.params);

    const { locale } = params;

    const { children } = props;

    const t = useTranslations('layout');

    const data = use(fakeFetchLayout2());
    const { header, footer } = translateDeep(data, t);

    return (
        <>
            <SiteSchema locale={locale} />

            <MultiLangClientProvider locale={locale}>
                <Header header={header} />
                <Mainbody locale={locale}>{children}</Mainbody>
                <Footer footer={footer} />
                <MobileNavigation header={header} />
                <Search />
                <NewManageModal />
                <ManagedModal />
                <ManagedDrawer />
                {/* <CookieBar /> */}
            </MultiLangClientProvider>
        </>
    );
}
