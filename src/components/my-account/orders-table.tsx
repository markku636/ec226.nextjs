'use client';
import Link from '@components/ui/link';
import { fadeInTop } from '@utils/motion/fade-in-top';
import { useSsrCompatible } from '@utils/use-ssr-compatible';
import { useWindowSize } from '@utils/use-window-size';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const OrdersTable = () => {
    const { width } = useSsrCompatible(useWindowSize(), { width: 0, height: 0 });
    const t = useTranslations('common');
    return (
        <>
            <h2 className="mb-6 text-lg font-bold text-heading md:text-xl xl:mb-8 xl:text-2xl">{t('text-orders')}</h2>
            <motion.div
                layout
                initial="from"
                animate="to"
                exit="from"
                //@ts-ignore
                variants={fadeInTop(0.35)}
                className={`flex w-full flex-col`}
            >
                {width >= 1025 ? (
                    <table>
                        <thead className="text-sm lg:text-base">
                            <tr>
                                <th className="bg-gray-100 p-4 font-semibold text-heading ltr:text-left ltr:first:rounded-tl-md rtl:text-right rtl:first:rounded-tr-md">
                                    {t('text-order')}
                                </th>
                                <th className="bg-gray-100 p-4 font-semibold text-heading ltr:text-left rtl:text-right lg:text-center">
                                    {t('text-date')}
                                </th>
                                <th className="bg-gray-100 p-4 font-semibold text-heading ltr:text-left rtl:text-right lg:text-center">
                                    {t('text-status')}
                                </th>
                                <th className="bg-gray-100 p-4 font-semibold text-heading ltr:text-left rtl:text-right lg:text-center">
                                    {t('text-total')}
                                </th>
                                <th className="bg-gray-100 p-4 font-semibold text-heading ltr:text-left ltr:last:rounded-tr-md rtl:text-right rtl:last:rounded-tl-md ltr:lg:text-right rtl:lg:text-left">
                                    {t('text-actions')}
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm lg:text-base">
                            <tr className="border-b border-gray-200 last:border-b-0">
                                <td className="px-4 py-5 ltr:text-left rtl:text-right">
                                    <Link
                                        href="/my-account/orders/3203"
                                        className="text-body underline hover:no-underline"
                                    >
                                        #3203
                                    </Link>
                                </td>
                                <td className="px-4 py-5 text-heading ltr:text-left rtl:text-right lg:text-center">
                                    March 18, 2021
                                </td>
                                <td className="px-4 py-5 text-heading ltr:text-left rtl:text-right lg:text-center">
                                    Completed
                                </td>
                                <td className="px-4 py-5 text-heading ltr:text-left rtl:text-right lg:text-center">
                                    $16,950.00 for 93 items
                                </td>
                                <td className="px-4 py-5 text-heading ltr:text-right rtl:text-left">
                                    <Link
                                        href="/my-account/orders/3203"
                                        className="inline-block rounded-md bg-heading px-4 py-2.5 text-sm leading-4 text-white hover:bg-gray-600 hover:text-white"
                                    >
                                        {t('button-view')}
                                    </Link>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 last:border-b-0">
                                <td className="px-4 py-5 ltr:text-left rtl:text-right">
                                    <Link
                                        href="/my-account/orders/3204"
                                        className="text-body underline hover:no-underline"
                                    >
                                        #3204
                                    </Link>
                                </td>
                                <td className="px-4 py-5 text-heading ltr:text-left rtl:text-right lg:text-center">
                                    March 18, 2021
                                </td>
                                <td className="px-4 py-5 text-heading ltr:text-left rtl:text-right lg:text-center">
                                    Completed
                                </td>
                                <td className="px-4 py-5 text-heading ltr:text-left rtl:text-right lg:text-center">
                                    $16,950.00 for 93 items
                                </td>
                                <td className="px-4 py-5 text-heading ltr:text-right rtl:text-left">
                                    <Link
                                        href="/my-account/orders/3204"
                                        className="inline-block rounded-md bg-heading px-4 py-2.5 text-sm leading-4 text-white hover:bg-gray-600 hover:text-white"
                                    >
                                        {t('button-view')}
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                ) : (
                    <div className="w-full space-y-4">
                        <ul className="flex flex-col space-y-5 rounded-md border border-gray-200 px-4 pb-6 pt-5 text-sm font-semibold text-heading">
                            <li className="flex items-center justify-between">
                                {t('text-order')}
                                <span className="font-normal">
                                    <Link
                                        href="/my-account/orders/3203"
                                        className="text-body underline hover:no-underline"
                                    >
                                        #3203
                                    </Link>
                                </span>
                            </li>
                            <li className="flex items-center justify-between">
                                {t('text-date')}
                                <span className="font-normal">March 18, 2021</span>
                            </li>
                            <li className="flex items-center justify-between">
                                {t('text-status')}
                                <span className="font-normal">Completed</span>
                            </li>
                            <li className="flex items-center justify-between">
                                {t('text-total')}
                                <span className="font-normal">$16,950.00 for 93 items</span>
                            </li>
                            <li className="flex items-center justify-between">
                                {t('text-actions')}
                                <span className="font-normal">
                                    <Link
                                        href="/my-account/orders/3203"
                                        className="inline-block rounded-md bg-heading px-4 py-2.5 text-sm leading-4 text-white hover:bg-gray-600 hover:text-white"
                                    >
                                        {t('button-view')}
                                    </Link>
                                </span>
                            </li>
                        </ul>
                        <ul className="flex flex-col space-y-5 rounded-md border border-gray-200 px-4 pb-6 pt-5 text-sm font-semibold text-heading">
                            <li className="flex items-center justify-between">
                                {t('text-order')}
                                <span className="font-normal">
                                    <Link
                                        href="/my-account/orders/3204"
                                        className="text-body underline hover:no-underline"
                                    >
                                        #3204
                                    </Link>
                                </span>
                            </li>
                            <li className="flex items-center justify-between">
                                {t('text-date')}
                                <span className="font-normal">March 18, 2021</span>
                            </li>
                            <li className="flex items-center justify-between">
                                {t('text-status')}
                                <span className="font-normal">Completed</span>
                            </li>
                            <li className="flex items-center justify-between">
                                {t('text-total')}
                                <span className="font-normal">$16,950.00 for 93 items</span>
                            </li>
                            <li className="flex items-center justify-between">
                                {t('text-actions')}
                                <span className="font-normal">
                                    <Link
                                        href="/my-account/orders/3204"
                                        className="inline-block rounded-md bg-heading px-4 py-2.5 text-sm leading-4 text-white hover:bg-gray-600 hover:text-white"
                                    >
                                        {t('button-view')}
                                    </Link>
                                </span>
                            </li>
                        </ul>
                    </div>
                )}
            </motion.div>
        </>
    );
};

export default OrdersTable;
