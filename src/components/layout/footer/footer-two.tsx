'use client';
import Copyright from './copyright';
import { footerContemporary } from './data';
import Widgets from './widgets';
const { widgets, payment } = footerContemporary;

const FooterTwo = () => {
    return (
        <footer className="mt-9 border-b-4 border-heading pt-2.5 md:mt-11 lg:mt-16 lg:pt-0 2xl:pt-2 3xl:mt-20">
            <Widgets widgets={widgets} variant="contemporary" />
            <Copyright payment={payment} variant="contemporary" />
        </footer>
    );
};

export default FooterTwo;
