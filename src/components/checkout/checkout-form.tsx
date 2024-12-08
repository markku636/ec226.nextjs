'use client';

import Button from '@components/ui/button';
import { CheckBox } from '@components/ui/checkbox';
import Input from '@components/ui/input';
import TextArea from '@components/ui/text-area';
import { useCheckoutMutation } from '@framework/checkout/use-checkout';
import { ROUTES } from '@utils/routes';
import { useTranslations } from 'next-intl';
import Router from 'next/router';
import { useForm } from 'react-hook-form';

interface CheckoutInputType {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    zipCode: string;
    save: boolean;
    note: string;
}

const CheckoutForm = () => {
    const t = useTranslations('common');
    const { mutate: updateUser, isLoading } = useCheckoutMutation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CheckoutInputType>();

    function onSubmit(input: CheckoutInputType) {
        updateUser(input);
        Router.push(ROUTES.ORDER);
    }

    return (
        <>
            <h2 className="mb-6 text-lg font-bold text-heading md:text-xl xl:mb-8 xl:text-2xl">
                {t('text-shipping-address')}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto flex w-full flex-col justify-center " noValidate>
                <div className="flex flex-col space-y-4 lg:space-y-5">
                    <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0">
                        <Input
                            labelKey="forms:label-first-name"
                            {...register('firstName', {
                                required: 'forms:first-name-required',
                            })}
                            errorKey={errors.firstName?.message}
                            variant="solid"
                            className="w-full lg:w-1/2 "
                        />
                        <Input
                            labelKey="forms:label-last-name"
                            {...register('lastName', {
                                required: 'forms:last-name-required',
                            })}
                            errorKey={errors.lastName?.message}
                            variant="solid"
                            className="mt-2 w-full md:mt-0 lg:w-1/2 ltr:lg:ml-3 rtl:lg:mr-3"
                        />
                    </div>
                    <Input
                        labelKey="forms:label-address"
                        {...register('address', {
                            required: 'forms:address-required',
                        })}
                        errorKey={errors.address?.message}
                        variant="solid"
                    />
                    <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0">
                        <Input
                            type="tel"
                            labelKey="forms:label-phone"
                            {...register('phone', {
                                required: 'forms:phone-required',
                            })}
                            errorKey={errors.phone?.message}
                            variant="solid"
                            className="w-full lg:w-1/2 "
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
                            errorKey={errors.email?.message}
                            variant="solid"
                            className="mt-2 w-full md:mt-0 lg:w-1/2 ltr:lg:ml-3 rtl:lg:mr-3"
                        />
                    </div>
                    <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0">
                        <Input
                            labelKey="forms:label-city"
                            {...register('city')}
                            variant="solid"
                            className="w-full lg:w-1/2 "
                        />

                        <Input
                            labelKey="forms:label-postcode"
                            {...register('zipCode')}
                            variant="solid"
                            className="mt-2 w-full md:mt-0 lg:w-1/2 ltr:lg:ml-3 rtl:lg:mr-3"
                        />
                    </div>
                    <div className="relative flex items-center ">
                        <CheckBox labelKey="forms:label-save-information" />
                    </div>
                    <TextArea
                        labelKey="forms:label-order-notes"
                        {...register('note')}
                        placeholderKey="forms:placeholder-order-notes"
                        className="relative pt-3 xl:pt-6"
                    />
                    <div className="flex w-full">
                        <Button className="w-full sm:w-auto" loading={isLoading} disabled={isLoading}>
                            {t('common:button-place-order')}
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default CheckoutForm;
