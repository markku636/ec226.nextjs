// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
// import http from "@framework/utils/http";
import { useAppDispatch } from '@/redux/features/hooks';
import { setUnauthorized } from '@/redux/features/ui/uiSlice';
import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import Router from 'next/router';

export interface LoginInputType {
    email: string;
    password: string;
    remember_me: boolean;
}
async function logout() {
    // return http.post(API_ENDPOINTS.LOGIN, input);
    return {
        ok: true,
        message: 'Logout Successful!',
    };
}
export const useLogoutMutation = () => {
    const dispatch = useAppDispatch();

    // const { unauthorize } = useUI();

    return useMutation(() => logout(), {
        onSuccess: (_data) => {
            Cookies.remove('auth_token');
            dispatch(setUnauthorized());
            Router.push('/');
        },
        onError: (data) => {
            console.log(data, 'logout error response');
        },
    });
};
