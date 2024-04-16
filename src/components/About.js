import React from 'react';
import { useTranslation } from 'react-i18next';
import eu from '../img/eu.jpg';

export default function About() {
    const { t } = useTranslation();

    return (
        <div id="about" className="flex-col container mx-auto dark:bg-black dark:text-slate-300 flex  text-slate-800 font-plus mb-10">

            <div className="text-center flex flex-col items-center mb-6">
                <h1 className="text-3xl md:text-4xl mb-2">{t('About me')}</h1>
                <div className="h-[3px] w-32 bg-gradient-to-l from-transparent via-roxo to-roxo"></div>
                <p className="mt-2 mb-4 text-left text-sm md:text-lg text-slate-500">{t('Personal Presentation')}</p>
            </div>

            <div className="md:flex-row flex flex-col">
                <div className="relative flex justify-center md:mx-20">
                {/* <div className=" shadow-inner-lg shadow-zinc-300 absolute top-[-30px] left-[105px] mr-24 rounded-[40px] md:w-[24rem] md:h-[20rem] w-64 h-72 "></div> */}
                <img className="shadow-lg rounded-[20px] z-10 md:w-[50rem] md:h-[32rem] w-[20rem] h-[27rem]" src={eu} alt={t('My Image')} />
                {/* <div className=" shadow-inner-lg shadow-zinc-300 absolute top-44 left-[230px] right-[50rem] mr-24 rounded-[40px] md:w-[24rem] md:h-[30rem] w-64 h-72 "></div> */}
                {/* <div className=" shadow-inner-lg shadow-zinc-300 absolute top-32 left-[-60px] right-[20rem] mr-24 rounded-[40px] w-[24rem] h-[30rem] "></div> */}
                </div>

                <div className="leading-6 text-justify font-medium p-8">
                {/* <div className="">
                    <h1 className="text-4xl mb-2">{t('About me')}</h1>
                    <div className="h-[3px] w-32 bg-gradient-to-l from-transparent via-roxo to-roxo"></div>
                </div> */}

                {/* <p className="mt-2 mb-10 text-left text-slate-500">{t('Personal Presentation')}</p> */}

                <p className="font-semibold text-gray-600">
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
            
        </div>
    );
}
