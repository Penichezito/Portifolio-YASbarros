import html5 from '../icons/html5.png'
import css3 from '../icons/css3.png'
import tailwind from '../icons/tailwind.png'
import react from '../icons/reactjs.png'
import bootstrap from '../icons/bootstrap5.png'
import js from '../icons/js.png'
import python from '../icons/python.png'
import java from '../icons/java.png'
import php from '../icons/php.png'
import mysql from '../icons/mysql.png'
import git from '../icons/git.png'
import figma from '../icons/figma.png'
import laravel from '../icons/laravel.png'
import vscode from '../icons/vscode.png'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Skills(){

    const { t } = useTranslation();

    return(
        <div id="skills" className="overflow-hidden relative font-plus py-12 grid justify-items-center text-center bg-gray-950 gap-8">
            {/* <div className="absolute  blur-[90px] bottom-[200px] left-[-150px] right-[70rem] top-[-200px] opacity-15 rounded-full bg-purple-700 w-[15rem] h-[15rem]"></div>
            <div className="absolute  blur-[90px] left-[60rem] rigth-0 bottom-0 top-[25rem] opacity-15 rounded-full bg-indigo-400 w-[15rem] h-[15rem]"></div> */}

            <div className="mb-8">
                <div className="">
                    <h1 className="text-4xl mb-4 ml-0  text-slate-300">{t("Habilidades")}</h1>
                    <div class="h-[3px] w-40 bg-gradient-to-l from-transparent via-roxo to-roxo"></div>
                </div>
                <p className="mt-5 text-slate-400">{t("Conhecimentos Técnicos")}</p>
            </div>
            <div className="flex flex-col mb-5">
                <div className="grid justify-items-center gap-8">
                    <div className="flex md:flex-row flex-col gap-8">
                        <div className="flex flex-row gap-8">
                            <div id='icon_html' className="flex flex-col">
                                <div className=" flex items-center justify-center rounded-full w-40 h-20 bg-white bg-opacity-5 shadow shadow-slate-900">
                                    <img className=" w-15 h-14 " src={html5}></img>
                                </div>
                                <p className="text-slate-400">{t("HTML5")}</p>
                            </div>
                            <div id='icon_css' className="flex flex-col">
                                <div className="flex items-center justify-center rounded-full w-40 h-20 bg-white bg-opacity-5 shadow shadow-slate-900">
                                    <img className=" w-15 h-14 " src={css3}></img>
                                </div>
                                <p className="text-slate-400">{t("CSS3")}</p>
                            </div>
                        </div>  

                        <div className="flex flex-row gap-8">
                            <div id='icon_tailwind' className="flex flex-col">
                                <div className="flex items-center justify-center rounded-full w-40 h-20 bg-white bg-opacity-5 shadow shadow-slate-900">
                                    <img className=" w-15 h-12 " src={tailwind}></img>
                                </div>
                                <p className="text-slate-400">{t("Tailwind")}</p>
                            </div>
                            <div id='icon_react' className="flex flex-col">
                                <div className="flex items-center justify-center rounded-full w-40 h-20 bg-white bg-opacity-5 shadow shadow-slate-900">
                                    <img className=" w-15 h-14 p-0" src={react}></img>
                                </div>
                                <p className="text-slate-400">{t("ReactJs")}</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-8">
                            <div id='icon_laravel' className="flex flex-col">
                                <div className="flex items-center justify-center rounded-full w-40 h-20 bg-white bg-opacity-5 shadow shadow-slate-900">
                                    <img className=" w-15 h-14 " src={laravel}></img>
                                </div>
                                <p className="text-slate-400">{t("Laravel")}</p>
                            </div>
                            <div id='icon_bootstrap' className="flex flex-col">
                                <div className="flex items-center justify-center rounded-full w-40 h-20 bg-white bg-opacity-5 shadow shadow-slate-900">
                                    <img className=" w-15 h-14 " src={bootstrap}></img>
                                </div>
                                <p className="text-slate-400">{t("Bootstrap")}</p>
                            </div>
                        </div>
                        
                        
                        
                    </div>
                    <div className="flex md:flex-row flex-col gap-8">

                        <div className="flex flex-row gap-8">
                            <div id='icon_javaScript' className="flex flex-col">
                                <div className="flex items-center justify-center rounded-full w-40 h-20 bg-white bg-opacity-5 shadow shadow-slate-900">
                                    <img className=" w-15 h-14 " src={js}></img>
                                </div>
                                <p className="text-slate-400">{t("JavaScript")}</p>
                            </div>
                            <div id='icon_python' className="flex flex-col">
                                <div className="flex items-center justify-center rounded-full w-40 h-20 bg-white bg-opacity-5 shadow shadow-slate-900">
                                    <img className=" w-15 h-14 " src={python}></img>
                                </div>
                                <p className="text-slate-400">{t("Python")}</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-8">
                            <div id='icon_java' className="flex flex-col">
                                <div className="flex items-center justify-center rounded-full w-40 h-20 bg-white bg-opacity-5 shadow shadow-slate-900">
                                    <img className=" w-15 h-14 " src={java}></img>
                                </div>
                                <p className="text-slate-400">{t("Java")}</p>
                            </div>
                            <div id='icon_php' className="flex flex-col">
                                <div className="flex items-center justify-center rounded-full w-40 h-20 bg-white bg-opacity-5 shadow shadow-slate-900">
                                    <img className=" w-15 h-14 " src={php}></img>
                                </div>
                                <p className="text-slate-400">{t("Php")}</p>
                            </div>
                        </div>


                        <div id='icon_mysql' className="flex flex-col hidden md:block">
                                <div className="flex items-center justify-center rounded-full w-40 h-20 bg-white bg-opacity-5 shadow shadow-slate-900">
                                    <img className=" w-15 h-14 " src={mysql}></img>
                                </div>
                            <p className="text-slate-400">{t("MySQL")}</p>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-8">

                        <div className="flex flex-row gap-8">
                            <div id='icon_mysql' className="flex flex-col md:hidden">
                                <div className="flex items-center justify-center rounded-full w-40 h-20 bg-white bg-opacity-5 shadow shadow-slate-900">
                                    <img className=" w-15 h-14 " src={mysql}></img>
                                </div>
                                <p className="text-slate-400">{t("MySQL")}</p>
                            </div>
                            <div id='icon_git' className="flex flex-col">
                                <div className="flex items-center justify-center rounded-full w-40 h-20 bg-white bg-opacity-5 shadow shadow-slate-900">
                                    <img className=" w-15 h-14 " src={git}></img>
                                </div>
                                <p className="text-slate-400">{t("Gi")}t</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-row gap-8">
                            <div id='icon_figma' className="flex flex-col">
                                <div className="flex items-center justify-center rounded-full w-40 h-20 bg-white bg-opacity-5 shadow shadow-slate-900">
                                    <img className=" w-15 h-14 " src={figma}></img>
                                </div>
                                <p className="text-slate-400">{t("Figma")}</p>
                            </div>
                            <div id='icon_vscode'className="flex flex-col">
                                <div className="flex items-center justify-center rounded-full w-40 h-20 bg-white bg-opacity-5 shadow shadow-slate-900">
                                    <img className=" w-15 h-14 " src={vscode}></img>
                                </div>
                                <p className="text-slate-400">{t("Vscode")}</p>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                
            </div>    
        </div>
    )
}