'use client';
import Link from '@components/ui/link';
import React from 'react';

interface MenuItem {
    id: number | string;
    link: string;
    titleLang: string;
    columnItemItems?: MenuItem[];
}
type MegaMenuProps = {
    columns: {
        id: number | string;
        columnItems: MenuItem[];
    }[];
};

const MegaMenu: React.FC<MegaMenuProps> = ({ columns }) => {
    return (
        <div className="absolute bg-gray-100 megaMenu py-7 shadow-header ltr:-left-28 rtl:-right-28 ltr:xl:left-0 rtl:xl:right-0 ">
            <div className="grid grid-cols-5">
                {columns?.map((column) => (
                    <ul className="pt-6 pb-7 even:bg-gray-150 2xl:pb-8 2xl:pt-7" key={column.id}>
                        {column?.columnItems?.map((columnItem) => (
                            <React.Fragment key={columnItem.id}>
                                <li className="mb-1.5">
                                    <Link
                                        href={columnItem.link}
                                        className="block px-5 py-1.5 text-sm font-semibold text-heading hover:bg-gray-300 hover:text-heading xl:px-8 2xl:px-10"
                                    >
                                        {columnItem.titleLang}
                                    </Link>
                                </li>
                                {columnItem?.columnItemItems?.map((item: any) => (
                                    <li
                                        key={item.id}
                                        className={
                                            columnItem?.columnItemItems?.length === item.id
                                                ? 'mb-3 border-b border-gray-300 pb-3.5'
                                                : ''
                                        }
                                    >
                                        <Link
                                            href={item.link}
                                            className="block px-5 py-1.5 text-sm text-body hover:bg-gray-300 hover:text-heading xl:px-8 2xl:px-10"
                                        >
                                            {item.titleLang}
                                        </Link>
                                    </li>
                                ))}
                            </React.Fragment>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default MegaMenu;
