import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function NavBar(){

    const {t} = useTranslation();


    return(
      <div className="font-plus text-slate-800 relative mb-14">
      <nav className="w-full  dark:bg-black dark:text-slate-300   bg-white z-50 fixed top-0 flex justify-between py-6 text-lg font-mono">
        <a href="#home" className="ml-8">
          <span><h1 className="text-3xl font-medium font-logo ">YASCODER</h1></span>
        </a>

        <ul className="flex gap-3">
          <li><a href="#home" className="shadow-inner-lg dark:shadow-slate-400 hover:shadow-inner-md rounded-full px-8 py-4">{t('Inicio')}</a></li>
          <li><a href="#about" className="hover:shadow-inner-lg px-8 py-4 hover:rounded-full hover:border-slate-300">{t('Sobre')}</a></li>
          <li><a href="#skills" className="hover:shadow-inner-lg px-8 py-4 hover:rounded-full hover:border-slate-300">{t('Habilidades')}</a></li>
          <li><a href="#services" className="hover:shadow-inner-lg px-8 py-4 hover:rounded-full hover:border-slate-300">{t('Serviços')}</a></li>
          <li><a href="#projects" className="hover:shadow-inner-lg px-8 py-4 hover:rounded-full hover:border-slate-300">{t('Projetos')}</a></li>
          <li><a href="#contact" className="hover:shadow-inner-lg px-8 py-4 hover:rounded-full hover:border-slate-300">{t('Contato')}</a></li>
        </ul>
      </nav>
    </div>
        
    )
}