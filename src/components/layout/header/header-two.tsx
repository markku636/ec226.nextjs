'use client';
import { useAppDispatch, useAppSelector } from '@/redux/features/hooks';
import { openModal, openSearch, openSidebar, selectUI, setDrawerView, setModalView } from '@/redux/features/ui/uiSlice';
import SearchIcon from '@components/icons/search-icon';
import LanguageSwitcher from '@components/ui/language-switcher';
import Logo from '@components/ui/logo';
import { addActiveScroll } from '@utils/add-active-scroll';
import { ROUTES } from '@utils/routes';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import { useRef } from 'react';
const AuthMenu = dynamic(() => import('./auth-menu'), { ssr: false });
const CartButton = dynamic(() => import('@components/cart/cart-button'), {
    ssr: false,
});

type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const HeaderTwo = () => {
    // const { openSidebar, setDrawerView, openSearch, openModal, setModalView, isAuthorized } = useUI();
    const t = useTranslations('common');
    const siteHeaderRef = useRef() as DivElementRef;

    addActiveScroll(siteHeaderRef);

    const dispatch = useAppDispatch();
    const { isAuthorized } = useAppSelector(selectUI);

    function handleLogin() {
        dispatch(setModalView('LOGIN_VIEW'));
        dispatch(openModal());
    }
    function handleMobileMenu() {
        dispatch(setDrawerView('MOBILE_MENU'));
        dispatch(openSidebar());
    }

    return (
        <header id="siteHeader" ref={siteHeaderRef} className="relative z-20 h-16 w-full sm:h-20 lg:h-24">
            <div className="innerSticky body-font fixed z-20 h-16 w-full bg-white px-4 text-gray-700 transition duration-200 ease-in-out sm:h-20 lg:h-24 ltr:lg:pr-6 rtl:lg:pl-6">
                <div className="mx-auto flex h-full w-full max-w-[1920px] items-center">
                    <button
                        aria-label="Menu"
                        className="menuBtn hidden h-full flex-shrink-0 flex-col items-center justify-center outline-none focus:outline-none ltr:pr-5 rtl:pl-5 md:flex ltr:2xl:pr-7 rtl:2xl:pl-7"
                        onClick={handleMobileMenu}
                    >
                        <span className="menuIcon">
                            <span className="bar" />
                            <span className="bar" />
                            <span className="bar" />
                        </span>
                    </button>
                    <Logo />

                    <div className="flex w-full items-center justify-end ltr:md:mr-5 rtl:md:ml-5 ltr:xl:mr-8 rtl:xl:ml-8 ltr:2xl:mr-10 rtl:2xl:ml-10">
                        <LanguageSwitcher />
                    </div>
                    <div className="hidden flex-shrink-0 items-center justify-end gap-x-6 ltr:ml-auto rtl:mr-auto md:flex lg:gap-x-5 xl:gap-x-8 2xl:gap-x-10">
                        <button
                            className="relative flex h-auto flex-shrink-0 transform items-center justify-center focus:outline-none"
                            onClick={() => dispatch(openSearch())}
                            aria-label="search-button"
                        >
                            <SearchIcon />
                        </button>
                        <div className="-mt-0.5 flex-shrink-0">
                            <AuthMenu
                                isAuthorized={isAuthorized}
                                href={ROUTES.ACCOUNT}
                                className="text-sm font-semibold text-heading xl:text-base"
                                btnProps={{
                                    className: 'text-sm xl:text-base text-heading font-semibold focus:outline-none',
                                    children: t('text-sign-in'),
                                    onClick: handleLogin,
                                }}
                            >
                                {t('text-account')}
                            </AuthMenu>
                        </div>
                        <CartButton />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderTwo;
