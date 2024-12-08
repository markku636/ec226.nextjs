import Container from '@components/ui/container';
import Link from '@components/ui/link';
import { siteSettings } from '@settings/site-settings';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import { AiOutlineArrowUp } from 'react-icons/ai';

interface CopyrightProps {
    payment?: {
        id: string | number;
        path?: string;
        name: string;
        image: string;
        width: number;
        height: number;
    }[];
    variant?: 'contemporary';
}
const year = new Date().getFullYear();
const Copyright: React.FC<CopyrightProps> = ({ payment, variant }) => {
    const t = useTranslations('footer');

    return (
        <div className="mb-2 border-t border-gray-200 pb-16 pt-5 sm:mb-0 sm:pb-20 md:pb-5">
            <Container
                className={cn('flex flex-col-reverse text-center md:flex-row md:justify-between', {
                    'items-center': variant === 'contemporary',
                })}
            >
                <p
                    className={cn('text-xs leading-6 text-body lg:text-sm', {
                        'm-0 p-0': variant === 'contemporary',
                    })}
                >
                    {t('text-copyright')} &copy; {year}&nbsp;
                    <div
                        className="font-semibold text-gray-700 transition-colors duration-200 ease-in-out hover:text-body"
                        href={siteSettings.author.websiteUrl}
                    >
                        {siteSettings.author.name}
                    </div>
                    &nbsp; {t('text-all-rights-reserved')}
                </p>

                {payment && (
                    <ul className="xs:gap-x-5 mx-auto mb-1 hidden flex-wrap items-center justify-center gap-x-4 md:mx-0 md:mb-0 md:flex lg:gap-x-7">
                        {payment?.map((item) => (
                            <li
                                className="mb-2 transition hover:opacity-80 md:mb-0"
                                key={`payment-list--key${item.id}`}
                            >
                                <div href={item.path ? item.path : '/#'} target="_blank">
                                    <img
                                        src={item.image}
                                        alt={t(`${item.name}`)}
                                        height={item.height}
                                        width={item.width}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

                {variant === 'contemporary' && (
                    <p className="cursor-pointer text-sm font-semibold leading-[19px] text-[#212121]">
                        <Link href="#siteHeader">Scroll to top</Link>

                        <AiOutlineArrowUp className="inline ltr:ml-3 rtl:mr-3" />
                    </p>
                )}
            </Container>
        </div>
    );
};

export default Copyright;
