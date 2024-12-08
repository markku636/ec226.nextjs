// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
// import http from "@framework/utils/http";
import { useAppDispatch } from '@/redux/features/hooks';
import { closeModal, setAuthorized } from '@/redux/features/ui/uiSlice';
import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';

export interface SignUpInputType {
    email: string;
    password: string;
    name: string;
}
async function signUp(input: SignUpInputType) {
    // return http.post(API_ENDPOINTS.LOGIN, input);
    return {
        token: `${input.email}.${input.name}`.split('').reverse().join(''),
    };
}
export const useSignUpMutation = () => {
    const dispatch = useAppDispatch();

    // const { authorize, closeModal } = useUI();

    return useMutation((input: SignUpInputType) => signUp(input), {
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
