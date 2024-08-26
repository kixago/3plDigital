import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Transition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // Toggle dropdown menu
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Handle language change
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);

    // Update URL based on selected language
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(en|he)/, `/${lang}`);
    navigate(newPath); // Use navigate to redirect to new path

    setIsOpen(false);
  };

  // Get the currently active language
  const activeLanguage = i18n.language;

  return (
    <div className="relative">
      <button
        className="flex items-center px-4 py-2 text-gray-500 hover:text-blue-900"
        onClick={toggleDropdown}
      >
        {t('navbar.language')}
        <svg
          className={`ml-2 h-4 w-4 fill-current transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M6 9l6 6 6-6H6z" />
        </svg>
      </button>
      <Transition
        in={isOpen}
        timeout={200}
        unmountOnExit
        onEnter={() => document.body.classList.add('no-scroll')}
        onExit={() => document.body.classList.remove('no-scroll')}
      >
        {(state) => (
          <div
            className={`absolute top-full right-0 w-48 mt-2 bg-white shadow-lg rounded-lg overflow-hidden transition-opacity duration-300 ease-in-out ${state === 'entering' ? 'opacity-0' : state === 'entered' ? 'opacity-100' : 'opacity-0'}`}
          >
            <button
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${activeLanguage === 'en' ? 'bg-gray-200' : ''}`}
              onClick={() => handleLanguageChange('en')}
            >
              English
            </button>
            <button
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${activeLanguage === 'he' ? 'bg-gray-200' : ''}`}
              onClick={() => handleLanguageChange('he')}
            >
              עברית
            </button>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default LanguageSwitcher;
