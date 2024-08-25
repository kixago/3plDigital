import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

const NavLinks = () => {
  const { i18n } = useTranslation();
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#about">
                {i18n.t('navbar.about')}
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#services">
                {i18n.t('navbar.services')}
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth offset={-100}  to="/#portfolio">
                {i18n.t('navbar.portfolio')}
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact#contact">
                {i18n.t('navbar.contactUs')}
            </HashLink>
            <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo">
                {i18n.t('navbar.actionButton')}
            </HashLink>
        </>
    )
}

export default NavLinks;
