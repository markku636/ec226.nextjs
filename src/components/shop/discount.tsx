'use client';
import Container from '@components/ui/container';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const ShopDiscount = () => {
    const [status, setStatus] = useState(false);
    const hide = () => {
        setStatus(true);
    };
    const t = useTranslations('common');

    return (
        <div
            className={`relative flex justify-center bg-borderBottom transition duration-200 ease-in ${
                status === true ? 'h-0.5' : 'py-4'
            }`}
        >
            <Container className={status === true ? 'invisible opacity-0' : 'w-full'}>
                <div className="relative px-8 text-center text-xs leading-6 text-heading md:text-sm md:leading-7">
                    {t('text-discount')} &nbsp;
                    <div className="underline" href="#">
                        {t('text-details')}
                    </div>
                    <button
                        className="absolute top-0 flex h-full items-center justify-center text-lg text-gray-500 opacity-50 transition-opacity hover:opacity-100 focus:outline-none ltr:right-0 rtl:left-0 md:text-2xl"
                        onClick={hide}
                        aria-label="close"
                    >
                        <IoClose className="text-black" />
                    </button>
                </div>
            </Container>
        </div>
    );
};

export default ShopDiscount;
