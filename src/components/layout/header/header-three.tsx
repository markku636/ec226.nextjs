'use client';
import { useAppDispatch, useAppSelector } from '@/redux/features/hooks';
import { openModal, openSidebar, selectUI, setDrawerView, setModalView } from '@/redux/features/ui/uiSlice';
import Link from '@comp@providers/ui-context/ui.context-provider';
import { UserLineIcon } from '@components/icons/UserLineIcon';
import SearchIcon from '@components/icons/search-icon';
import HeaderMenu from '@components/layout/header/header-menu';
import CategoryMenu from '@components/ui/category-menu';
import LanguageSwitcher from '@components/ui/language-switcher';
import Logo from '@components/ui/logo';
import WishButton from '@components/ui/wish-button';
import { siteSettings } from '@settings/site-settings';
import { addActiveScroll } from '@utils/add-active-scroll';
import { ROUTES } from '@utils/routes';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import React, { useRef } from 'react';
const AuthMenu = dynamic(() => import('@components/layout/header/auth-menu'), {
    ssr: false,
});
const CartButton = dynamic(() => import('@components/cart/cart-button'), {
    ssr: false,
});

type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const { site_header } = siteSettings;

export default function Header() {
    // const { openSidebar, setDrawerView, openModal, setModalView, isAuthorized } = useUI();
    const t = useTranslations('common');
    const siteHeaderRef = useRef() as DivElementRef;

    const dispatch = useAppDispatch();
    const { isAuthorized } = useAppSelector(selectUI);

    addActiveScroll(siteHeaderRef);
    function handleLogin() {
        dispatch(setModalView('LOGIN_VIEW'));
        dispatch(openModal());
    }
    function handleMobileMenu() {
        dispatch(setDrawerView('MOBILE_MENU'));
        dispatch(openSidebar());
    }
    return (
        <header
            id="siteHeader"
            ref={siteHeaderRef}
            className="headerThree relative z-20 h-16 w-full sm:h-20 lg:h-36 xl:h-40"
        >
            <div className="innerSticky body-font fixed z-20 h-16 w-full bg-white px-4 text-gray-700 transition duration-200 ease-in-out ltr:pl-4 ltr:pr-4 rtl:pl-4 rtl:pr-4 sm:h-20 md:px-8 ltr:md:pl-0 rtl:md:pr-0 lg:h-36 ltr:lg:pl-6 ltr:lg:pr-6 rtl:lg:pl-6 rtl:lg:pr-6 xl:h-40 2xl:px-16">
                <div className="relative mx-auto flex h-full w-full max-w-[1920px] items-center justify-center before:absolute before:bottom-0 before:h-px before:w-screen before:bg-[#F1F1F1] lg:h-20 xl:h-24">
                    <button
                        aria-label="Menu"
                        className="menuBtn hidden h-full flex-shrink-0 flex-col items-center justify-center px-5 outline-none focus:outline-none md:flex lg:hidden 2xl:px-7"
                        onClick={handleMobileMenu}
                    >
                        <span className="menuIcon">
                            <span className="bar" />
                            <span className="bar" />
                            <span className="bar" />
                        </span>
                    </button>
                    <div className="flex items-center ltr:2xl:mr-12 rtl:2xl:ml-12 ltr:3xl:mr-20 rtl:3xl:ml-20">
                        <Logo />
                        <div className="headerTopMenu hidden transition-all duration-100 ease-in-out ltr:ml-7 ltr:pr-2 rtl:mr-7 rtl:pl-2 lg:flex ltr:xl:ml-9 rtl:xl:mr-9">
                            {site_header.pagesMenu?.map((item: any) => (
                                <Link
                                    href={item.path}
                                    className="relative flex items-center px-3 py-0 text-sm font-normal text-heading hover:text-black lg:px-2.5 xl:px-6 xl:text-base"
                                    key={`pages-menu-${item.id}`}
                                >
                                    {t(`menu:${item.label}`)}
                                    {item.icon && (
                                        <span className="ltr:ml-1.5 rtl:mr-1.5 ltr:xl:ml-2 rtl:xl:mr-2">
                                            {item.icon}
                                        </span>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="relative hidden w-2/6 ltr:mr-auto rtl:ml-auto lg:block">
                        <form
                            className="relative w-full overflow-hidden rounded-md bg-borderBottom"
                            noValidate
                            role="search"
                        >
                            <label htmlFor="search" className="flex items-center">
                                <span className="absolute left-0 top-0 flex h-full w-12 flex-shrink-0 cursor-pointer items-center justify-center focus:outline-none md:w-14">
                                    <SearchIcon color="text-heading" className="h-[18px] w-[18px]" />
                                </span>
                                <input
                                    id="search"
                                    className="h-14 w-full rounded-md bg-transparent text-sm text-heading placeholder-gray-400 outline-none focus:border-2 focus:border-gray-600 ltr:pl-14 ltr:pr-4 rtl:pl-4 rtl:pr-14 lg:text-base"
                                    placeholder={'Search Anything...'}
                                    aria-label="Search"
                                    autoComplete="off"
                                />
                            </label>
                        </form>
                    </div>
                    <div className="languageSwitcher flex flex-shrink-0 transform transition-all duration-200 ease-in-out ltr:ml-auto ltr:mr-3 rtl:ml-3 rtl:mr-auto lg:hidden ltr:lg:mr-5 rtl:lg:ml-5 ltr:xl:mr-8 rtl:xl:ml-8 ltr:2xl:mr-10 rtl:2xl:ml-10">
                        <LanguageSwitcher />
                    </div>
                    <div className="flex flex-shrink-0 items-center justify-end">
                        <div className="wishlistShopping flex items-center gap-x-7 transition-all ltr:pl-3 rtl:pr-3 lg:gap-x-6 xl:gap-x-8 2xl:gap-x-10">
                            <div className="align-center flex md:gap-x-4 ">
                                <WishButton />
                                <span className="hidden cursor-pointer text-sm font-semibold text-heading transition-all duration-100 ease-in-out lg:block lg:font-normal xl:text-base">
                                    {t('menu:menu-wishlist')}
                                </span>
                            </div>
                            <div className="align-center hidden md:gap-x-4 lg:flex">
                                <CartButton />
                                <span className="hidden cursor-pointer text-sm font-semibold text-heading transition-all duration-100 ease-in-out lg:block lg:font-normal xl:text-base">
                                    {t('menu:menu-shopping')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="headerBottom mx-auto hidden max-w-[1920px] items-center lg:flex lg:h-16">
                    <div className="flex items-center">
                        <CategoryMenu className="hidden lg:block" categoryMenu={site_header?.categoryMenu} />
                        <HeaderMenu
                            data={site_header.menu}
                            className="hidden ltr:pl-3.5 rtl:pr-3.5 lg:flex ltr:xl:pl-5 rtl:xl:pr-5 "
                        />
                    </div>

                    <div className="flex flex-shrink-0 items-center gap-x-7 ltr:ml-auto rtl:mr-auto">
                        <AuthMenu
                            isAuthorized={isAuthorized}
                            href={ROUTES.ACCOUNT}
                            className="hidden flex-shrink-0 gap-x-3 text-sm text-heading focus:outline-none lg:flex xl:text-base"
                            btnProps={{
                                children: (
                                    <>
                                        <UserLineIcon className="h-auto w-4 text-black xl:w-[17px]" />
                                        {t('text-login')}
                                    </>
                                ),
                                onClick: handleLogin,
                            }}
                        />
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </header>
    );
}
