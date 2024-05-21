import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function NavBar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
      <nav className={` dark:bg-gray-950 dark:text-slate-300 bg-white z-50 fixed top-0 flex justify-between py-6 text-lg font-mono font-plus text-slate-800 mb-14 w-full`}>
        <a href="#home" className="ml-8">
          <span>
            <h1 className="md:text-3xl text-2xl font-medium font-logo">YASCODER</h1>
          </span>
        </a>

        
        <div className={`block md:hidden mr-8 ${
            open ? 'absolute h-screen top-0 right-0' : ''
          }`}>
          <button onClick={toggleMenu}>
            
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            
          </button>
        </div>


        
        <ul
          className={`${
            open ? 'fixed h-full top-0 right-0 block w-72 bg-white dark:bg-gray-950 dark:text-slate-300' : 'hidden'
          } md:flex gap-8 md:gap-1 md:items-center md:mr-8 ml-5 text-center`}
        >
          <div className="w-full flex justify-start p-8">
            <button onClick={toggleMenu} className='md:hidden'>
            <svg
                className="h-7 w-7 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>


          <li className="mb-12 md:mb-0 mt-10 md:mt-0">
            <a
              href="#home"
              className="md:shadow-inner-lg dark:shadow-slate-400 hover:shadow-inner-lg rounded-full px-8 py-4"
            >
              {t('Inicio')}
            </a>
          </li>
          <li className="mb-12 md:mb-0">
            <a
              href="#about"
              className="hover:shadow-inner-lg dark:shadow-slate-400 px-8 py-4 hover:rounded-full hover:border-slate-300"
            >
              {t('Sobre')}
            </a>
          </li>
          <li className="mb-12 md:mb-0">
            <a
              href="#skills"
              className="hover:shadow-inner-lg dark:shadow-slate-400 px-8 py-4 hover:rounded-full hover:border-slate-300"
            >
              {t('Habilidades')}
            </a>
          </li>
          <li className="mb-12 md:mb-0">
            <a
              href="#services"
              className="hover:shadow-inner-lg dark:shadow-slate-400 px-8 py-4 hover:rounded-full hover:border-slate-300"
            >
              {t('Serviços')}
            </a>
          </li>
          <li className="mb-12 md:mb-0">
            <a
              href="#projects"
              className="hover:shadow-inner-lg dark:shadow-slate-400 px-8 py-4 hover:rounded-full hover:border-slate-300"
            >
              {t('Projetos')}
            </a>
          </li>
          <li className="mb-12 md:mb-0">
            <a
              href="#contact"
              className="hover:shadow-inner-lg dark:shadow-slate-400 px-8 py-4 hover:rounded-full hover:border-slate-300"
            >
              {t('Contato')}
            </a>
          </li>
        </ul>
      </nav>
    
  );
}
