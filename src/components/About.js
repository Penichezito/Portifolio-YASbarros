import React from 'react';
import { useTranslation } from 'react-i18next';
import eu from '../img/eu.jpg';

export default function About() {
    const { t } = useTranslation();

    return (
        <div id="about" className="Container mx-auto dark:bg-black dark:text-slate-300 mt-16  flex  text-slate-800 font-plus">
            {/* <div className="w-[50rem] h-[60rem] ml-32 relative">
                <div className=" shadow-inner-lg shadow-zinc-300 absolute top-[-40px] left-[50px] mr-24 rounded-[40px] w-[24rem] h-[20rem] "></div>
                <img className=" shadow-lg rounded-[40px] z-10 absolute" src={eu} alt={t('My Image')} />
                <div className=" shadow-inner-lg shadow-zinc-300 absolute top-24 left-[-30px] right-[50rem] mr-24 rounded-[40px] w-[24rem] h-[30rem] "></div>
                <div className=" shadow-inner-lg shadow-zinc-300 absolute top-32 left-[-60px] right-[20rem] mr-24 rounded-[40px] w-[24rem] h-[30rem] "></div>
            </div> */}

            <div className="px-40 mt-7 leading-6 text-justify font-medium">
                <div className="">
                    <h1 className="text-4xl mb-2">{t('About me')}</h1>
                    <div className="h-[3px] w-32 bg-gradient-to-l from-transparent via-roxo to-roxo"></div>
                </div>

                <p className="mt-2 mb-10 text-left text-slate-500">{t('Personal Presentation')}</p>

                <p>
                    {t('My name is Yasmim, but you can call me Yas!')} <br />
                    <br />
                    {t('I am 22 years old, born in Bahia, born in the city of Salvador, but residing in Feira de Santana, the princess of the Bahia hinterland!')} <br /> <br />
                    {t('I am a web programmer and freelance developer. I love creating beautiful, responsive websites with great user experience, however, I also have a strong interest in backend development.')} <br /> <br />
                    {t('Undergraduate student in Information Systems at IFBA and graduated in Systems Development Technician by Senai/BA.')} <br /> <br />
                    {t('Passion for technology and the significant transformations it can promote. Below are some skills and web projects I have done.')}
                    <br></br>
                    <button className="text-gray-500 px-6 py-3 rounded-xl mt-8 bg-mindaro font-bold">Contactar</button>
                </p>
            </div>
        </div>
    );
}
