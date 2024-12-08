'use client';
import { getDirection } from '@utils/get-direction';
import { useLocale } from 'next-intl';
import { useEffect } from 'react';

const Ltr = () => {
    const locale = useLocale();
    const dir = getDirection(usePageLocale());

    useEffect(() => {
        document.documentElement.dir = dir;
    }, [dir]);

    return <></>;
};

export default Ltr;
