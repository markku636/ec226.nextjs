import { ILayoutProps } from '@/typing/page-props';
import MultiLangClientProvider from '@providers/multi-language-provider';

export default async function LocaleLayout(props: Readonly<ILayoutProps>) {
    const params = await props.params;

    const {
        children
    } = props;

    const { locale } = params;

    return <MultiLangClientProvider locale={locale}>{children}</MultiLangClientProvider>;
}
