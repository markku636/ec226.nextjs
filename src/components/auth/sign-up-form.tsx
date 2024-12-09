'use client';

import { useAppDispatch } from '@/redux/reducer/hooks';
import { closeModal, openModal, setModalView } from '@/redux/reducer/ui/ui-slice';
import Button from '@components/ui/button';
import Input from '@components/ui/input';
import Link from '@components/ui/link';
import Logo from '@components/ui/logo';
import PasswordInput from '@components/ui/password-input';
import { SignUpInputType, useSignUpMutation } from '@framework/auth/use-signup';
import { ROUTES } from '@utils/routes';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { ImFacebook2, ImGoogle2 } from 'react-icons/im';

const SignUpForm = () => {
    const t = useTranslations('common');
    const { mutate: signUp, isLoading } = useSignUpMutation();

    const dispatch = useAppDispatch();
    // const { setModalView, openModal, closeModal } = useUI();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpInputType>();

    function handleSignIn() {
        dispatch(setModalView('LOGIN_VIEW'));
        dispatch(openModal());
    }

    function onSubmit({ name, email, password }: SignUpInputType) {
        signUp({
            name,
            email,
            password,
        });
        console.log(name, email, password, 'sign form values');
    }
    return (
        <div className="mx-auto w-full rounded-lg border border-gray-200 bg-white px-5 py-5 sm:w-96 sm:px-8 md:w-450px">
            <div className="mb-6 pt-2.5 text-center">
                <div onClick={() => dispatch(closeModal())}>
                    <Logo />
                </div>
                <p className="mb-8 mt-2 text-sm text-body sm:mb-10 md:text-base">
                    {t('common:registration-helper')}{' '}
                    <Link href={ROUTES.TERMS} className="text-heading underline hover:no-underline focus:outline-none">
                        {t('common:text-terms')}
                    </Link>{' '}
                    &amp;{' '}
                    <Link href={ROUTES.POLICY} className="text-heading underline hover:no-underline focus:outline-none">
                        {t('common:text-policy')}
                    </Link>
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center" noValidate>
                <div className="flex flex-col space-y-4">
                    <Input
                        labelKey="forms:label-name"
                        type="text"
                        variant="solid"
                        {...register('name', {
                            required: 'forms:name-required',
                        })}
                        errorKey={errors.name?.message}
                    />
                    <Input
                        labelKey="forms:label-email"
                        type="email"
                        variant="solid"
                        {...register('email', {
                            required: `${t('forms:email-required')}`,
                            pattern: {
                                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: t('forms:email-error'),
                            },
                        })}
                        errorKey={errors.email?.message}
                    />
                    <PasswordInput
                        labelKey="forms:label-password"
                        errorKey={errors.password?.message}
                        {...register('password', {
                            required: `${t('forms:password-required')}`,
                        })}
                    />
                    <div className="relative">
                        <Button
                            type="submit"
                            loading={isLoading}
                            disabled={isLoading}
                            className="mt-2 h-11 w-full md:h-12"
                        >
                            {t('common:text-register')}
                        </Button>
                    </div>
                </div>
            </form>
            <div className="relative mb-3.5 mt-6 flex flex-col items-center justify-center text-sm text-heading">
                <hr className="w-full border-gray-200" />
                <span className="absolute -top-2.5 bg-white px-2">{t('common:text-or')}</span>
            </div>

            <Button
                type="submit"
                loading={isLoading}
                disabled={isLoading}
                className="mt-2.5 h-11 w-full bg-facebook hover:bg-facebookHover md:h-12"
            >
                <ImFacebook2 className="text-sm ltr:mr-1.5 rtl:ml-1.5 sm:text-base" />
                {t('common:text-login-with-facebook')}
            </Button>
            <Button
                type="submit"
                loading={isLoading}
                disabled={isLoading}
                className="mt-2.5 h-11 w-full bg-google hover:bg-googleHover md:h-12"
            >
                <ImGoogle2 className="text-sm ltr:mr-1.5 rtl:ml-1.5 sm:text-base" />
                {t('common:text-login-with-google')}
            </Button>
            <div className="mb-1 mt-5 text-center text-sm text-body sm:text-base">
                {t('common:text-have-account')}{' '}
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

export default SignUpForm;
