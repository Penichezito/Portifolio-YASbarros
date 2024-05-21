
import sp from '../img/setup.jpg';
import agencia from '../img/agencia.jpg';
import html from '../icons/html5.png';
import css from '../icons/css3.png';
import boots from '../icons/bootstrap5.png';
import js from '../icons/js.png';
import laravel from '../icons/laravel.png';
import tailwind from '../icons/tailwind.png';
import todolist from '../img/todolist.jpg';
import corretora from '../img/corretora.jpg';
import react from '../icons/reactjs.png';
import mysql from '../icons/mysql.png';
import php from '../icons/php.png';
import { React, useTranslation } from 'react-i18next';

export default function Projects(){

    const { t } = useTranslation();


    return(
     
        <div id="projects" className="relative dark:bg-gray-950  dark:text-slate-300 container mx-auto px-5 grid justify-items-center text-center mt-10 font-plus md:gap-32 gap-16">

            <div className="mt-5">
                <div className="">
                    <h1 className="text-4xl md:text-3xl mb-2 dark:text-white text-slate-700">Projetos</h1>
                    <div className="h-[3px] md:ml-6 md:w-32 ml-1 w-32 bg-gradient-to-l from-transparent via-roxo to-roxo"></div>
                </div>
                <p className="mt-3 text-slate-500 text-sm md:text-lg">Praticas & trabalhos</p>
            </div>

            <div className='flex flex-col md:flex-row-reverse md:gap-10'>
                <div>
                    <img className='md:w-[30rem] h-[14rem] md:h-[20rem] rounded-2xl shadow-slate-600 dark:shadow-black shadow-xl' src={corretora} alt="corretora"></img>
                </div>
                <div className='md:flex md:flex-col'>
                    <div className='text-right mt-5 md:mt-0'>
                        <h1 className="text-3xl font-medium mb-5">{t('Sistema de Imobiliária')}</h1>
                        <p className="mb-5  max-w-[500px]">{t('O sistema tem como objetivo aprimorar a experiência de compra dos clientes e otimizar a gestão dos profissionais do setor imobiliário. Ele centraliza todas as informações necessárias para facilitar o fechamento de negócios, permitindo que os corretores cadastrem, editem e removam imóveis. Adicionalmente, o sistema oferece uma seção dedicada ao status das listagens de propriedades, proporcionando uma visão clara e atualizada do catálogo da corretora.')}</p>
                    </div>
                    <div className="flex flex-row gap-2 mb-6 justify-end">
                        <div className="md:w-16 md:h-16 w-14 h-14  bg-gray-400 bg-opacity-30 rounded-full items-center flex justify-center">
                            <img className="md:size-10 size-8" src={react} alt='react'></img>
                        </div>
                        <div className="md:w-16 md:h-16 w-14 h-14 rounded-full bg-gray-400 bg-opacity-30 items-center flex justify-center">
                            <img className="md:size-10 size-8" src={laravel} alt='laravel'></img>
                        </div>
                        <div className="md:w-16 md:h-16 w-14 h-14 rounded-full bg-gray-400 bg-opacity-30 items-center flex justify-center">
                            <img className="w-10 h-7" src={tailwind} alt='tailwind'></img>
                        </div>
                        <div className="md:w-16 md:h-16 w-14 h-14 rounded-full bg-gray-400 bg-opacity-30 items-center flex justify-center">
                            <img className="md:size-10 size-8" src={mysql} alt='mysql'></img>
                        </div>
                        <div className="md:w-16 md:h-16 w-14 h-14 rounded-full bg-gray-400 bg-opacity-30 items-center flex justify-center">
                            <img className="w-11 h-6" src={php} alt='php'></img>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 justify-end">
                            <a href="https://agenciadigital.vercel.app/" className="transition hover:border-roxo duration-500  border-overlay hover:text-roxo border-2 rounded-full px-6 py-3 text-overlay">Deploy</a>
                            <a href="https://github.com/Yasbarros/Agencia-Digital" className="transition hover:border-roxo hover:text-roxo duration-500 border-overlay border-2 rounded-full px-6 py-3 text-overlay">GitHub</a>
                    </div>
                </div>
                


            </div>

            <div className='flex flex-col md:flex-row md:gap-10'>
                <div className="">
                    <img className='md:w-[30rem] rounded-2xl shadow-slate-600 dark:shadow-black shadow-xl' src={todolist} alt='todolist'></img>
                </div>
                <div className='md:flex md:flex-col'>
                    <div className='text-left mt-5 md:mt-0'>
                        <h1 className="text-3xl font-medium mb-5">ToDo List</h1>
                        <p className="mb-5 max-w-[500px]">{t('A Todo List é uma solução de gerenciamento de tarefas projetada para impulsionar a produtividade e a organização. Equipada com uma interface intuitiva, os usuários podem facilmente priorizar suas tarefas utilizando etiquetas inteligentes e acompanhar os prazos de conclusão de forma simplificada.')}</p>
                    </div>
                    <div className='flex flex-row gap-2 mb-6'>
                        <div className="md:w-16 md:h-16 w-14 h-14  bg-gray-400 bg-opacity-30 rounded-full items-center flex justify-center">
                            <img className="md:size-10 size-8" src={html} alt='html'></img>
                        </div>
                        <div className="md:w-16 md:h-16 w-14 h-14 bg-gray-400 bg-opacity-30 rounded-full items-center flex justify-center">
                            <img className="md:size-10 size-8" src={js} alt='js'></img>
                        </div>
                        <div className="md:w-16 md:h-16 w-14 h-14 rounded-full bg-gray-400 bg-opacity-30 items-center flex justify-center">
                            <img className="md:size-10 size-8" src={mysql} alt='mysql'></img>
                        </div>
                        <div className="md:w-16 md:h-16 w-14 h-14 rounded-full bg-gray-400 bg-opacity-30 items-center flex justify-center">
                            <img className="w-10 h-7" src={tailwind} alt='tailwind'></img>
                        </div>
                        <div className="md:w-16 md:h-16 w-14 h-14 rounded-full bg-gray-400 bg-opacity-30 items-center flex justify-center">
                            <img className="md:size-10 size-8" src={laravel} alt='laravel'></img>
                        </div>

                    </div>

                    <div className="flex flex-row gap-4">
                        <button className="transition hover:border-roxo hover:text-roxo duration-500 border-overlay border-2 rounded-full px-6 py-3 text-overlay">Deploy</button>
                        <a href='https://github.com/Yasbarros/ToDo-List' className="transition hover:border-roxo duration-500 border-overlay hover:text-roxo border-2 rounded-full px-6 py-3 text-overlay">GitHub</a>
                    </div>

                </div>

            </div>

            <div className='flex flex-col md:flex-row-reverse md:gap-10'>
                <div>
                    <img className='md:w-[30rem] h-[14rem] rounded-2xl shadow-slate-600 dark:shadow-black shadow-xl' src={agencia} alt="agencia"></img>
                </div>
                <div className='md:flex md:flex-col justify-end'>
                    <div className='text-right mt-5'>
                        <h1 className="text-3xl font-medium mb-5">{t('Agência de Marketing')}</h1>
                        <p className="mb-5  max-w-[500px]">{t('Landing page de agência digital de marketing, responsivo, desenvolvido para prática e aperfeiçoamento de conhecimentos')}</p>
                    </div>
                    <div className="flex flex-row gap-2 mb-6 justify-end">
                            <div className="md:w-16 md:h-16 w-14 h-14  bg-gray-400 bg-opacity-30 rounded-full items-center flex justify-center">
                                <img className="md:size-10 size-8" src={html} alt='html'></img>
                            </div>
                            <div className="md:w-16 md:h-16 w-14 h-14 rounded-full bg-gray-400 bg-opacity-30 items-center flex justify-center">
                                <img className="md:size-10 size-8" src={css} alt='css'></img>
                            </div>
                            <div className="md:w-16 md:h-16 w-14 h-14 rounded-full bg-gray-400 bg-opacity-30 items-center flex justify-center">
                                <img className="md:size-10 size-8" src={js} alt='js'></img>
                            </div>
                            <div className="md:w-16 md:h-16 w-14 h-14 rounded-full bg-gray-400 bg-opacity-30 items-center flex justify-center">
                                <img className="md:size-10 size-8" src={boots} alt='boots'></img>
                            </div>
                    </div>
                    <div className="flex flex-row gap-4 justify-end">
                            <a href="https://agenciadigital.vercel.app/" className="transition hover:border-roxo duration-500 hover:text-roxo border-overlay border-2 rounded-full px-6 py-3 text-overlay">Deploy</a>
                            <a href="https://github.com/Yasbarros/Agencia-Digital" className="transition hover:border-roxo hover:text-roxo duration-500 border-overlay border-2 rounded-full px-6 py-3 text-overlay">GitHub</a>
                    </div>
                </div>
                


            </div>

        


        </div>
    )
}