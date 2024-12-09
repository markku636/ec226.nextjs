'use client';

import { useAppDispatch } from '@/redux/reducer/hooks';
import { closeModal, openModal, setModalView } from '@/redux/reducer/ui/ui-slice';
import Button from '@components/ui/button';
import Input from '@components/ui/input';
import Logo from '@components/ui/logo';
import PasswordInput from '@components/ui/password-input';
import { LoginInputType, useLoginMutation } from '@framework/auth/use-login';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { ImFacebook2, ImGoogle2 } from 'react-icons/im';

const LoginForm = () => {
    const t = useTranslations('common');

    const dispatch = useAppDispatch();

    // const { setModalView, openModal, closeModal } = useUI();
    const { mutate: login, isLoading } = useLoginMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInputType>();

    function onSubmit({ email, password, remember_me }: LoginInputType) {
        login({
            email,
            password,
            remember_me,
        });
        console.log(email, password, remember_me, 'data');
    }
    function handelSocialLogin() {
        login({
            email: 'demo@demo.com',
            password: 'demo',
            remember_me: true,
        });
    }
    function handleSignUp() {
        dispatch(setModalView('SIGN_UP_VIEW'));
        dispatch(openModal());
    }
    function handleForgetPassword() {
        dispatch(setModalView('FORGET_PASSWORD'));
        dispatch(openModal());
    }
    return (
        <div className="mx-auto w-full overflow-hidden rounded-lg border border-gray-200 bg-white px-5 py-5 sm:w-96 sm:px-8 md:w-450px">
            <div className="mb-6 pt-2.5 text-center">
                <div onClick={() => dispatch(closeModal())}>
                    <Logo />
                </div>
                <p className="mb-8 mt-2 text-sm text-body sm:mb-10 md:text-base">{t('common:login-helper')}</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center" noValidate>
                <div className="flex flex-col space-y-3.5">
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
                    <div className="flex items-center justify-center">
                        <div className="flex flex-shrink-0 items-center">
                            <label className="switch relative inline-block w-10 cursor-pointer">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    className="h-0 w-0 opacity-0"
                                    {...register('remember_me')}
                                />
                            </label>
                            <label
                                htmlFor="remember"
                                className="flex-shrink-0 cursor-pointer text-sm text-heading ltr:pl-3 rtl:pr-3"
                            >
                                {t('forms:label-remember-me')}
                            </label>
                        </div>
                        <div className="flex ltr:ml-auto rtl:mr-auto">
                            <button
                                type="button"
                                onClick={handleForgetPassword}
                                className="text-sm text-heading underline hover:no-underline focus:outline-none ltr:pl-3 ltr:text-right rtl:pr-3 rtl:text-left"
                            >
                                {t('common:text-forgot-password')}
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <Button
                            type="submit"
                            loading={isLoading}
                            disabled={isLoading}
                            className="mt-1.5 h-11 w-full md:h-12"
                        >
                            {t('common:text-login')}
                        </Button>
                    </div>
                </div>
            </form>
            <div className="relative mb-3.5 mt-6 flex flex-col items-center justify-center text-sm text-heading">
                <hr className="w-full border-gray-200" />
                <span className="absolute -top-2.5 bg-white px-2">{t('common:text-or')}</span>
            </div>
            <Button
                loading={isLoading}
                disabled={isLoading}
                className="mt-2.5 h-11 w-full !bg-facebook !hover:bg-facebookHover md:h-12"
                onClick={handelSocialLogin}
            >
                <ImFacebook2 className="text-sm ltr:mr-1.5 rtl:ml-1.5 sm:text-base" />
                {t('common:text-login-with-facebook')}
            </Button>
            <Button
                loading={isLoading}
                disabled={isLoading}
                className="mt-2.5 h-11 w-full !bg-google !hover:bg-googleHover md:h-12"
                onClick={handelSocialLogin}
            >
                <ImGoogle2 className="text-sm ltr:mr-1.5 rtl:ml-1.5 sm:text-base" />
                {t('common:text-login-with-google')}
            </Button>
            <div className="mb-1 mt-5 text-center text-sm text-body sm:text-base">
                {t('common:text-no-account')}{' '}
                <button
                    type="button"
                    className="text-sm font-bold text-heading underline hover:no-underline focus:outline-none sm:text-base"
                    onClick={handleSignUp}
                >
                    {t('common:text-register')}
                </button>
            </div>
        </div>
    );
};

export default LoginForm;
