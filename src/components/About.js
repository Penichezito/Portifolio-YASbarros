import React from 'react';
import { useTranslation } from 'react-i18next';
import eu from '../img/eu.jpg';

export default function About() {
    const { t } = useTranslation();

    return (
        <div id="about" className="flex-col container mx-auto dark:bg-gray-950 dark:text-slate-300 flex  text-slate-800 font-plus mb-10">

            <div>
                <div className="text-center flex flex-col  items-center mb-6">
                    <h1 className="text-3xl md:text-4xl mb-2">{t('About me')}</h1>
                    <div className="h-[3px] md:w-44 w-36 bg-gradient-to-l from-transparent via-roxo to-roxo"></div>
                    <p className="mt-2 mb-4 text-left text-sm md:text-lg text-slate-500">{t('Personal Presentation')}</p>
                </div>
            </div>


            

            <div className="md:flex-row flex flex-col items-center ">
                <div className="relative flex justify-center md:mx-20">
                    {/* <div className=" absolute z-0 left-20 top-7 bg-red-300 shadow-lg w-[20rem] h-[27rem] rounded-[10px]"></div> */}
                        <img className="shadow-lg rounded-[10px] z-10 md:w-[50rem] md:h-[32rem] w-[20rem] h-[27rem]" src={eu} alt={t('My Image')} />
                    
                </div>

                <div className="leading-6 text-justify font-medium p-6 mt-10">
                    <p className="font-medium ">
                        <span className="text-xl font-semibold text-slate-600">{t('Hello, my name is Yasmim Barros!')}</span>
                        <br/>
                        <br/>
                        {t('I am 22 years old, born in Bahia, born in the city of Salvador, but residing in Feira de Santana, the princess of the Bahia hinterland!')} <br /> <br /> 
                        {t('I am a Software developer and Information Systems student. I love learning new things and I am always on the move, whether developing a new project or exploring new technologies.')} <br /> <br />
                
                        {t('Below are some skills and projects I carried out.')}
                        <br></br>
                    </p>
                    <div className="flex-row flex gap-2 mt-10 justify-center items-center md:justify-start md:items-start">
                    <div className="w-40 h-32 bg-slate-200  dark:bg-slate-900  rounded-2xl flex justify-center items-center">
                        <div className="flex flex-col items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z"/>
                                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                            </svg>
                            <h1 className="text-center text-sm font-bold">{t('Sistemas de Informação')}</h1>
                            <p className="text-xs text-slate-500">{t('Em andamento')}</p>
                            
                        </div>
                    </div>
                    <div className="w-40 h-32 bg-slate-200 dark:bg-slate-900 dark:border-slate-950  rounded-2xl flex justify-center items-center">
                        <div className="flex flex-col items-center gap-2">
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clip-rule="evenodd" />
                                    <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
                                </svg>
                            </div>

                            <h1 className="text-center text-sm font-bold">{t('Téc. Desenv. de Sistemas')}</h1>
                            <p className="text-xs text-slate-500">{t('Concluído')}</p>
                            
                        </div>
                    </div>
                    </div>
                    <div className="flex md:justify-start md:items-start justify-center items-center">
                    <a href="#contact" className=" transition duration-500 text-overlay px-6 py-3 border-2 border-overlay rounded-3xl mt-8 font-bold hover:border-roxo hover:text-roxo dark:hover:border-mindaro dark:hover:text-mindaro">{t('Contato')}</a>
                    </div>
                </div>     
            
            </div>
   
        </div>
    );
}
