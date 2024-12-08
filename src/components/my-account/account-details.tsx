'use client';
import Button from '@components/ui/button';
import Input from '@components/ui/input';
import { RadioBox } from '@components/ui/radiobox';
import { UpdateUserType, useUpdateUserMutation } from '@framework/customer/use-update-customer';
import { fadeInTop } from '@utils/motion/fade-in-top';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

const defaultValues = {};
const AccountDetails = () => {
    const { mutate: updateUser, isLoading } = useUpdateUserMutation();
    const t = useTranslations('common');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UpdateUserType>({
        defaultValues,
    });
    function onSubmit(input: UpdateUserType) {
        updateUser(input);
    }

    return (
        <motion.div
            layout
            initial="from"
            animate="to"
            exit="from"
            //@ts-ignore
            variants={fadeInTop(0.35)}
            className={`flex w-full flex-col`}
        >
            <h2 className="mb-6 text-lg font-bold text-heading md:text-xl xl:mb-8 xl:text-2xl">
                {t('common:text-account-details')}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto flex w-full flex-col justify-center " noValidate>
                <div className="flex flex-col space-y-4 sm:space-y-5">
                    <div className="flex flex-col space-y-4 sm:flex-row sm:gap-x-3 sm:space-y-0">
                        <Input
                            labelKey="forms:label-first-name"
                            {...register('firstName', {
                                required: 'forms:first-name-required',
                            })}
                            variant="solid"
                            className="w-full sm:w-1/2"
                            errorKey={errors.firstName?.message}
                        />
                        <Input
                            labelKey="forms:label-last-name"
                            {...register('lastName', {
                                required: 'forms:last-name-required',
                            })}
                            variant="solid"
                            className="w-full sm:w-1/2"
                            errorKey={errors.lastName?.message}
                        />
                    </div>
                    <Input
                        labelKey="forms:label-display-name"
                        {...register('displayName', {
                            required: 'forms:display-name-required',
                        })}
                        variant="solid"
                        errorKey={errors.displayName?.message}
                    />
                    <div className="flex flex-col space-y-4 sm:flex-row sm:gap-x-3 sm:space-y-0">
                        <Input
                            type="tel"
                            labelKey="forms:label-phone"
                            {...register('phoneNumber', {
                                required: 'forms:phone-required',
                            })}
                            variant="solid"
                            className="w-full sm:w-1/2"
                            errorKey={errors.phoneNumber?.message}
                        />
                        <Input
                            type="email"
                            labelKey="forms:label-email-star"
                            {...register('email', {
                                required: 'forms:email-required',
                                pattern: {
                                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'forms:email-error',
                                },
                            })}
                            variant="solid"
                            className="w-full sm:w-1/2"
                            errorKey={errors.email?.message}
                        />
                    </div>
                    <div className="relative flex flex-col">
                        <span className="mt-2 block pb-1 text-sm font-semibold text-heading">
                            {t('common:text-gender')}
                        </span>
                        <div className="mt-2 flex items-center gap-x-6">
                            <RadioBox labelKey="forms:label-male" {...register('gender')} value="male" />
                            <RadioBox labelKey="forms:label-female" {...register('gender')} value="female" />
                        </div>
                    </div>
                    <div className="relative">
                        <Button
                            type="submit"
                            loading={isLoading}
                            disabled={isLoading}
                            className="mt-3 h-12 w-full sm:w-32"
                        >
                            {t('common:button-save')}
                        </Button>
                    </div>
                </div>
            </form>
        </motion.div>
    );
};

export default AccountDetails;
