// 'use client';
// import { IMenu } from '@/typing/layout';
// import ListMenu from '@components/ui/list-menu';
// import Link from 'next/link';
// import { FaChevronDown } from 'react-icons/fa';

// interface MenuProps {
//     menu: IMenu[];
//     className?: string;
// }

// export default function Menu({ menu }: Readonly<MenuProps>) {
//     return (
//         <nav className="hidden headerMenu md:ml-6 lg:flex">
//             {menu.map((item) => (
//                 <>
//                     <Link
//                         key={item.id}
//                         href={item.link}
//                         className="flex items-center px-3 py-2 text-sm cursor-pointer text-heading group-hover:text-black xl:px-4 xl:text-base"
//                     >
//                         {item.titleLang}
//                         {(item?.columns || item.subMenu) && (
//                             <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
//                                 <FaChevronDown className="transition duration-300 ease-in-out transform group-hover:-rotate-180" />
//                             </span>
//                         )}
//                     </Link>
//                     {/* {item?.columns && Array.isArray(item.columns) && <MegaMenu columns={item.columns} />} */}

//                     {item?.subMenu && Array.isArray(item.subMenu) && (
//                         <div className="absolute invisible bg-gray-200 opacity-0 group-hover:visible subMenu shadow-header ltr:left-0 rtl:right-0 group-hover:opacity-100">
//                             <ul className="py-5 text-sm text-body">
//                                 {item.subMenu.map((menu: any, index: number) => {
//                                     const dept: number = 1;
//                                     const menuName: string = `sidebar-menu-${dept}-${index}`;

//                                     return (
//                                         <ListMenu
//                                             dept={dept}
//                                             data={menu}
//                                             hasSubMenu={menu.subMenu}
//                                             menuName={menuName}
//                                             key={menuName}
//                                             menuIndex={index}
//                                         />
//                                     );
//                                 })}
//                             </ul>
//                         </div>
//                     )}
//                 </>
//             ))}
//         </nav>
//     );
// }
'use client';
import { IMenu } from '@/typing/layout';
import Link from '@components/ui/link';
import ListMenu from '@components/ui/list-menu';
import MegaMenu from '@components/ui/mega-menu';
import classNames from 'classnames';
import { FaChevronDown } from 'react-icons/fa';

interface MenuProps {
    menu: IMenu[];
}

export default function Menu({ menu }: Readonly<MenuProps>) {
    return (
        <nav className={classNames(`headerMenu flex w-full relative`)}>
            {menu?.map((item: any) => (
                <div
                    className={`menuItem group cursor-pointer relative  ${item.subMenu ? 'relative' : ''}`}
                    key={item.id}
                >
                    <Link
                        href={item.link}
                        className="relative inline-flex items-center px-3 py-2 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black"
                    >
                        {item.titleLang}
                        {(item?.columns || item.subMenu) && (
                            <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
                                <FaChevronDown className="transition duration-300 ease-in-out transform group-hover:-rotate-180" />
                            </span>
                        )}
                    </Link>

                    {item?.columns && Array.isArray(item.columns) && <MegaMenu columns={item.columns} />}

                    {item?.subMenu && Array.isArray(item.subMenu) && (
                        <div className="absolute invisible bg-gray-200 opacity-0 group-hover:visible subMenu shadow-header ltr:left-0 rtl:right-0 group-hover:opacity-100">
                            <ul className="py-5 text-sm text-body">
                                {item.subMenu.map((menu: any, index: number) => {
                                    const dept: number = 1;
                                    const menuName: string = `sidebar-menu-${dept}-${index}`;

                                    return (
                                        <ListMenu
                                            dept={dept}
                                            data={menu}
                                            hasSubMenu={menu.subMenu}
                                            menuName={menuName}
                                            key={menuName}
                                            menuIndex={index}
                                        />
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </nav>
    );
}
