'use client';
import ActiveLink from '@components/ui/active-link';
import { useCollectionsQuery } from '@framework/collection/get-all-collection';
import { ROUTES } from '@utils/routes';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export const CollectionFilters = () => {
    const t = useTranslations('common');
    const { data, isLoading } = useCollectionsQuery({
        limit: 15,
    });
    if (isLoading) return <p>Loading...</p>;

    const { slug } = useParams();
    const currentPath = slug;

    const items = data?.collections.data;
    return (
        <div className="pt-1">
            <div className="block pb-5 border-b border-gray-300 mb-7">
                <div className="mb-2.5 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-heading md:text-2xl">{t('text-collection-list')}</h2>
                </div>
            </div>
            <div className="block pb-7">
                <ul className="flex flex-col mt-2 space-y-5">
                    {items?.map((item: any) => (
                        <li key={item.id} className="cursor-pointer text-sm lg:text-[15px]">
                            <ActiveLink href={`${ROUTES.COLLECTIONS}/${item.slug}`}>
                                <div
                                    className={`block py-0.5 text-heading transition duration-300 ease-in-out hover:font-semibold ${
                                        currentPath === item.slug && 'font-semibold'
                                    }`}
                                >
                                    {item.name}
                                </div>
                            </ActiveLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
