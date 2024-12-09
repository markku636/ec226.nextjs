'use client';
import axios from 'axios';
import https from 'https';
import {
    Dispatch,
    PropsWithChildren,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

// Hook
export const useAxiosStatus = () => {
    const context = useContext<IAxiosContext>(AxiosContext);

    if (context === undefined) {
        throw new Error('useAxios must be used within a AxiosProvider');
    }
    return context;
};

// AxiosInstance
export const Axios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
    timeout: process.env.NODE_ENV === 'development' ? 5000000 : 50000,
    headers: {
        'Content-Type': 'application/json',
    },
});

interface IAxiosContext {
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}
// Context and Provider
const AxiosContext = createContext<IAxiosContext>({
    isLoading: false,
    // eslint-disable-next-line no-empty-function
    setIsLoading: () => {},
});

export const AxiosContextProvider = ({ children }: PropsWithChildren<{ children?: ReactNode }>) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [count, setCount] = useState<number>(0);

    useMemo(() => {
        // when request send & request failed, do something
        const requestInterceptor = Axios.interceptors.request.use(
            (config) => {
                setCount((prev) => prev + 1);
                const agent = new https.Agent({
                    rejectUnauthorized: false,
                });

                // 開發環境，取消https證書校驗
                config.httpsAgent = agent;

                // const cookies = Cookies.get(AUTH_TOKEN_KEY);

                const token = '';

                // if (cookies) {
                //   token = JSON.parse(cookies).token;
                // }

                config.headers = {
                    ...config.headers,
                    // Authorization: `Bearer ${token}`,
                };
                return config;
            },
            (error) => {
                setCount((prev) => prev - 1);
            }
        );

        // when response back & response error, do something
        const responseInterceptor = Axios.interceptors.response.use(
            (config) => {
                setCount((prev) => prev - 1);
                return config;
            },
            (error) => {
                setCount((prev) => prev - 1);
                if (
                    (error.response && error.response.status === 401) ||
                    (error.response && error.response.status === 403) ||
                    (error.response && error.response.data.message === 'PICKBAZAR_ERROR.NOT_AUTHORIZED')
                ) {
                    // Cookies.remove(AUTH_TOKEN_KEY);
                    // Router.reload();
                }
                return Promise.reject(error);
            }
        );

        return () => {
            Axios.interceptors.request.eject(requestInterceptor);
            Axios.interceptors.response.eject(responseInterceptor);
        };
    }, []);

    useEffect(() => {
        // console.log('count ', count);
        if (count > 0) {
            setIsLoading(true);
        }
        if (count <= 0) {
            setIsLoading(false);
        }
    }, [count]);

    // useEffect(() => {
    //     console.log(isLoading);
    // }, [isLoading]);

    return <AxiosContext.Provider value={{ isLoading, setIsLoading }}>{children}</AxiosContext.Provider>;
};
