'use client';
import AccountLayout from '@components/my-account/account-layout';
import Link from '@components/ui/link';
import { ROUTES } from '@utils/routes';
import { useTranslations } from 'use-intl';

export default function AccountPage() {
    const t = useTranslations('common');

    return (
        <AccountLayout>
            <h2 className="mb-3 text-lg font-bold text-heading md:text-xl xl:mb-5 xl:text-2xl">
                {t('text-dashboard')}
            </h2>
            <p className="text-sm leading-7 lowercase  md:text-base md:leading-loose">
                {t('text-account-dashboard')}{' '}
                <Link href={ROUTES.ORDERS} className="font-semibold underline text-heading">
                    {t('text-recent-orders')}
                </Link>
                , {t('text-manage-your')}{' '}
                <Link href={ROUTES.ACCOUNT_DETAILS} className="font-semibold underline text-heading">
                    {t('text-account-details')}
                </Link>{' '}
                {t('text-and')}{' '}
                <Link href={ROUTES.CHANGE_PASSWORD} className="font-semibold underline text-heading">
                    {t('text-change-your-password')}
                </Link>
                .
            </p>
        </AccountLayout>
    );
}
