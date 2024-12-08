'use client';
import { useAppDispatch } from '@/redux/features/hooks';
import { closeModal, openModal, setModalView } from '@/redux/features/ui/uiSlice';
import Button from '@components/ui/button';
import Input from '@components/ui/input';
import Logo from '@components/ui/logo';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

type FormValues = {
    email: string;
};

const defaultValues = {
    email: '',
};

const ForgetPasswordForm = () => {
    const t = useTranslations('common');
    const dispatch = useAppDispatch();
    // const { setModalView, openModal, closeModal } = useUI();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues,
    });

    function handleSignIn() {
        dispatch(setModalView('LOGIN_VIEW'));
        dispatch(openModal());
    }

    const onSubmit = (values: FormValues) => {
        console.log(values, 'token');
    };

    return (
        <div className="mx-auto w-full rounded-lg border border-gray-200 bg-white px-5 py-6 sm:w-96 sm:p-8 md:w-450px">
            <div className="mb-9 pt-2.5 text-center">
                <div onClick={() => dispatch(closeModal())}>
                    <Logo />
                </div>
                <p className="mb-8 mt-3 text-sm text-body sm:mb-10 sm:mt-4 md:text-base">
                    {t('common:forgot-password-helper')}
                </p>
            </div>
            <form onSubmit={handleSubmit((data) => onSubmit(data))} className="flex flex-col justify-center" noValidate>
                <Input
                    labelKey="forms:label-email"
                    type="email"
                    variant="solid"
                    className="mb-4"
                    {...register('email', {
                        required: `${t('forms:email-required')}`,
                        pattern: {
                            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: t('forms:email-error'),
                        },
                    })}
                    errorKey={errors.email?.message}
                />

                <Button type="submit" className="mt-2 h-11 w-full md:h-12">
                    {t('common:text-reset-password')}
                </Button>
            </form>
            <div className="relative mb-6 mt-8 flex flex-col items-center justify-center text-sm text-heading sm:mb-7 sm:mt-10">
                <hr className="w-full border-gray-200" />
                <span className="absolute -top-2.5 bg-white px-2">{t('common:text-or')}</span>
            </div>
            <div className="text-center text-sm text-body sm:text-base">
                {t('common:text-back-to')}{' '}
                <button
                    type="button"
                    className="text-sm font-bold text-heading underline hover:no-underline focus:outline-none sm:text-base"
                    onClick={handleSignIn}
                >
                    {t('common:text-login')}
                </button>
            </div>
        </div>
    );
};

export default ForgetPasswordForm;
