'use client';

import useDelayRedirect from '@/hooks/use-countdown-redirect';
import { ROUTES } from '@utils/routes';

export default function Redirect() {
    console.log('Redirecting to home in 5 seconds');
    useDelayRedirect(ROUTES.Home, 5);

    return <></>;
}
