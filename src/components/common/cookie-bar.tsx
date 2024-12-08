'use client';

import Button from '@components/ui/button';
import { useAcceptCookies } from '@utils/use-accept-cookies';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

interface CookieBarProps {
    description?: string;
}

const CookieBar: FC<CookieBarProps> = ({ description }) => {
    const { acceptedCookies, onAcceptCookies } = useAcceptCookies();
    const t = useTranslations('common');

    return (
        <div
            className={cn(
                'fixed bottom-0 z-30 w-full flex-row items-center justify-center bg-white p-5 text-center text-sm font-medium shadow-cookies transition-all duration-300 ease-out',
                {
                    transform: true,
                    'translate-y-0 opacity-100': !acceptedCookies,
                    'translate-y-full opacity-0': acceptedCookies,
                }
            )}
        >
            <span className="mb:block mb-3.5 inline-block leading-6">{t('text-cookies-title')}</span>
            <span className="inline-block ltr:md:ml-3 rtl:md:mr-3">{description}</span>
            <Button onClick={() => onAcceptCookies()} variant="slim">
                {t('text-accept-cookies')}
            </Button>
        </div>
    );
};

export default CookieBar;
