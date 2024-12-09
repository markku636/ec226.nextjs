// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
// import http from "@framework/utils/http";
import { useMutation } from '@tanstack/react-query';
import Cookies from "js-cookie";

export interface ForgetPasswordType {
  email: string;
}
async function forgetPassword() {
  // return http.post(API_ENDPOINTS.LOGIN, input);
  return {
    ok: true,
    message: "Forget password Successful!",
  };
}
export const useForgetPasswordMutation = () => {
  return useMutation(() => forgetPassword(), {
    onSuccess: (_data) => {
      Cookies.remove("auth_token");
    },
    onError: (data) => {
      console.log(data, "forget password error response");
    },
  });
};
