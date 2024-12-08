import usePageLocale from '@/hooks/use-locale';
import { getDirection } from '@utils/get-direction';
import Image from 'next/image';
import { useParams } from 'next/navigation';
interface CategoryBannerProps {
    className?: string;
}

const CategoryBanner: React.FC<CategoryBannerProps> = ({ className = 'mb-7' }) => {
    const dir = getDirection(usePageLocale());

    const params = useParams(); // 获取动态路由参数

    const { slug } = params; // 提取 slug 参数

    const categoryTitle = slug?.toString().split('-').join('');
    return (
        <div className={`bg-gray-100 rounded-md relative flex flex-row ${className}`}>
            <div className="hidden md:flex">
                <Image
                    src={
                        dir === 'rtl'
                            ? '/assets/images/category-banner-reverse.jpg'
                            : '/assets/images/category-banner.jpg'
                    }
                    alt="Category Banner"
                    width={1800}
                    height={570}
                    className="rounded-md"
                />
            </div>
            <div className="relative md:absolute top-0 ltr:left-0 rtl:right-0 h-auto md:h-full w-full md:w-2/5 flex items-center py-2 sm:py-3.5">
                <h2 className="w-full text-2xl font-bold text-center capitalize md:text-3xl lg:text-4xl xl:text-5xl text-heading p-7">
                    #{categoryTitle}
                </h2>
            </div>
        </div>
    );
};

export default CategoryBanner;
