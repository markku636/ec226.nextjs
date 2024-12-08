'use client';
import Button from '@components/ui/button';
import PasswordInput from '@components/ui/password-input';
import { ChangePasswordInputType, useChangePasswordMutation } from '@framework/customer/use-change-password';
import { fadeInTop } from '@utils/motion/fade-in-top';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

const defaultValues = {
    oldPassword: '',
    newPassword: '',
};

const ChangePassword = () => {
    const { mutate: changePassword, isLoading } = useChangePasswordMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ChangePasswordInputType>({
        defaultValues,
    });
    function onSubmit(input: ChangePasswordInputType) {
        changePassword(input);
    }
    const t = useTranslations('common');
    return (
        <>
            <h2 className="mb-6 text-lg font-bold text-heading md:text-xl xl:mb-8 xl:text-2xl">
                {t('common:text-change-password')}
            </h2>
            <motion.div
                layout
                initial="from"
                animate="to"
                exit="from"
                //@ts-ignore
                variants={fadeInTop(0.35)}
                className={`flex h-full  w-full flex-col lg:w-8/12`}
            >
                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto flex w-full flex-col justify-center ">
                    <div className="flex flex-col space-y-3">
                        <PasswordInput
                            labelKey="forms:label-old-password"
                            errorKey={errors.oldPassword?.message}
                            {...register('oldPassword', {
                                required: 'forms:password-old-required',
                            })}
                            className="mb-4"
                        />
                        <PasswordInput
                            labelKey="forms:label-new-password"
                            errorKey={errors.newPassword?.message}
                            {...register('newPassword', {
                                required: 'forms:label-new-password',
                            })}
                            className="mb-4"
                        />

                        <div className="relative">
                            <Button type="submit" loading={isLoading} disabled={isLoading} className="h-13 mt-3">
                                {t('common:text-change-password')}
                            </Button>
                        </div>
                    </div>
                </form>
            </motion.div>
        </>
    );
};

export default ChangePassword;
