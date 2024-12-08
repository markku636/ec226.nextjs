import { generateDefaultMetadata } from '@/metadata-config';
import { fakeFetchLayout } from '@/services/mock-service';

import { ILayoutProps } from '@/typing/page-props';
import HeaderAuth from '@components/layout/header/header-auth';
import MultiLangClientProvider from '@providers/multi-language-provider';
import translateDeep from '@utils/muilti-language-translations/translate-deep';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { headers } from 'next/headers';
import { use } from 'react';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const params = await props.params;
    const locale = params.locale;

    const url = new URL((await headers()).get('x-url')!);

    return generateDefaultMetadata(locale, url.pathname);
}

export default function LocaleLayout(props: Readonly<ILayoutProps>) {
    const params = use(props.params);

    const { children } = props;

    const { locale } = params;

    const t = useTranslations('layout');
    const data = use(fakeFetchLayout());
    const { header } = translateDeep(data, t);

    return (
        <MultiLangClientProvider locale={locale}>
            <HeaderAuth header={header} />
            {children}
        </MultiLangClientProvider>
    );
}
