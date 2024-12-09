// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
// import http from "@framework/utils/http";

import { useAppDispatch } from '@/redux/reducer/hooks';
import { closeModal, setAuthorized } from '@/redux/reducer/ui/ui-slice';
import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';

export interface LoginInputType {
    email: string;
    password: string;
    remember_me: boolean;
}
async function login(input: LoginInputType) {
    // return http.post(API_ENDPOINTS.LOGIN, input);
    return {
        token: `${input.email}.${input.remember_me}`.split('').reverse().join(''),
    };
}

export const useLoginMutation = () => {
    const dispatch = useAppDispatch();

    // const { authorize, closeModal } = useUI();

    return useMutation((input: LoginInputType) => login(input), {
        onSuccess: (data) => {
            Cookies.set('auth_token', data.token);
            dispatch(setAuthorized());
            dispatch(closeModal());
        },
        onError: (data) => {
            console.log(data, 'login error response');
        },
    });
};
