import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';

type FooterColumnProps = {
    title: string;
    children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
    return (
        <>
            <div className='flex flex-col gap-5'>
                <h4 className='bold-18 whitespace-nowrap'>
                    {title}
                </h4>
                {children}
            </div>        
        </>
    )
};

const Footer = () => {
    return (
        <div>Footer</div>
    );
};

export default Footer;