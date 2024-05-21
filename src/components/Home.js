import linkedin from '../icons/linkedin.png'
import git from '../icons/github.png'
import instagram from '../icons/instagram.png'
import arrow from '../icons/flecha.png'
import cv from '../cv/curriculoPortifolio.pdf'
import audio1 from '../audio/audio1.mp3'
import audio2 from '../audio/audio2.mp3'
import { useRef, useState, useEffect } from 'react'
import gif from '../iconsAudio/icons8-audio-wave.gif'
import gifDark  from '../iconsAudio/icons8-audio-dark.gif'
import sound from '../iconsAudio/icons8-audio-wave-50.png'
import soundDark from '../iconsAudio/audioDark.png'
import React from 'react';
import { useTranslation } from 'react-i18next';
import cartoon from '../img/cartoon cortado.png'; 

export default function Home(){

    const { t } = useTranslation();

    const audioRef = useRef();
    const [playing, setPlaying] = useState(false);

    const toggleAudio = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setPlaying(true);
        } else {
            audioRef.current.pause();
            setPlaying(false);
        }
    };

    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const [theme, setTheme] = useState("ligth");

  useEffect(() => {
    if(theme === "dark"){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () =>{
    setTheme(theme === "dark" ? "ligth" : "dark");
  }
  
    


    return(
        <div id="home" className=" dark:bg-gray-950 dark:text-slate-300 font-plus text-slate-800 relative grid justify-items-stretch mt-16">
            
            <div className=" md:mt-20 mt-8 mx-8 md:flex-row flex-col flex justify-between">
                
                <div className=" flex md:flex-col flex-row md:gap-10  gap-5 items-center md:justify-start justify-center">

                    <div >

                    </div>

                    <button onClick={toggleAudio} className="w-10 h-8 md:w-16 md:h-16 ">
                        {playing ? 
                        (
                            theme === "ligth" ? (
                              <img src={gif} alt="gif" />
                            ) : (
                              <img src={gifDark} alt="gif" />
                            )
                          ) 
                        : 
                        (
                            theme === "ligth" ? (
                              <img src={sound} alt="sound" />
                            ) : (
                              <img src={soundDark} alt="sound" />
                            )
                          )}
                    </button>
                    <audio className="hidden" ref={audioRef} controls>
                        <source src={audio1} type="audio/mp3" />
                        {t("Your browser does not support the audio element.")}
                    </audio>

                    <button className="shadow-lg border dark:border-gray-900 dark:shadow-slate-700 shadow-gray-200 active:shadow-inner rounded-full w-16 h-7 md:w-12 md:h-28 dark:active:shadow-slate-700 text-sm md:text-lg" onClick={() => changeLanguage(i18n.language === 'en' ? 'pt' : 'en')}>
                        {i18n.language === 'en' ? 'PT' : 'EN'}
                    </button>



                    <button className={`shadow-lg border ${theme === "dark" ? 'dark:border-gray-900 dark:shadow-slate-700' : 'border-gray-200 shadow-gray-200'} active:shadow-inner dark:active:shadow-gray-700 rounded-full w-16 h-7 md:w-12 md:h-28 flex justify-center items-center`}onClick={handleThemeSwitch}>
                    {theme === "ligth" ? (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 md:w-6 md:h-6"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    ) : (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 md:w-6 md:h-6"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    )}
                    </button>
                </div>

                <div className="absolute flex justify-center items-center top-40 left-28 md:top-48 md:left-[12rem] z-0 md:w-[67rem] md:h-[25rem] w-48 h-60">
                    <div className="bg-gradient-to-r from-azul to-purpleLigth absolute inset-0 blur-3xl rounded-full opacity-45 md:opacity-20 transform rotate-12 origin-center"></div>
                </div> 

                <div className="z-10 flex flex-col-reverse md:flex-row gap-16 px-5 md:px-14">
                    <div className="md:my-36 mt-[-50px] md:mt-44 mb-0 text-center md:text-left md:ml-24">
                        <h1 className=" bg-clip-text text-transparent bg-gradient-to-r dark:from-teal-400 dark:to-fuchsia-600 from-teal-600 to-fuchsia-600 animate-pulse text-4xl  md:text-5xl mb-3">{t("Software Developer")}</h1>
                        <p className="font-semibold dark:text-gray-300 text-gray-700 text-base md:text-xl">{t("Sou a Yasmim e sou desenvolvedora de software e estudante de S.I.")}</p>
                        <p className="font-semibold dark:text-gray-300 text-gray-700 text-base md:text-xl mb-7">{t("Welcome to my portfolio!")}</p>
                        <a href={cv} target="_blank" className=" z-10 shadow-slate-400 dark:shadow-slate-400 font-semibold text-gray-600 dark:text-gray-400 shadow-inner-lg hover:shadow-inner-md rounded-full px-10 py-3">{t("Load CV")}</a>
                    </div>

                    <div className="z-10 mt-12 md:mt-2 grid justify-items-center">
                        <img className="md:w-[27rem] md:h-[30rem] w-[16rem] h-[18rem] md:mr-10" src={cartoon} alt='cartoon'></img>
                    </div>
                </div>

                

                <div className="flex md:flex-col md:my-32 mt-10 mb-24 fill-current dark:text-white items-center justify-center gap-6">
                    <div className="mb-8 ">
                        <div className="" >
                            <a target='_blank' href="https://www.instagram.com/yascoder">
                                <svg className="dark:text-slate-400"  width="40" height="40" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M25 6.25C19.9075 6.25 19.27 6.27125 17.27 6.3625C15.2738 6.45375 13.91 6.77125 12.7175 7.235C11.4675 7.705 10.3337 8.4425 9.39625 9.3975C8.44278 10.3339 7.70482 11.4669 7.23375 12.7175C6.7725 13.91 6.45375 15.275 6.3625 17.2713C6.2725 19.27 6.25 19.9062 6.25 25C6.25 30.0938 6.27125 30.73 6.3625 32.73C6.45375 34.7262 6.77125 36.09 7.235 37.2825C7.705 38.5325 8.4425 39.6662 9.3975 40.6037C10.3339 41.5572 11.4669 42.2951 12.7175 42.7663C13.91 43.2287 15.2738 43.5462 17.27 43.6375C19.27 43.7287 19.9075 43.75 25 43.75C30.0925 43.75 30.73 43.7287 32.73 43.6375C34.7262 43.5462 36.09 43.2287 37.2825 42.765C38.5325 42.295 39.6662 41.5575 40.6037 40.6025C41.5572 39.6661 42.2952 38.5331 42.7663 37.2825C43.2287 36.09 43.5462 34.7262 43.6375 32.73C43.7287 30.73 43.75 30.0925 43.75 25C43.75 19.9075 43.7287 19.27 43.6375 17.27C43.5462 15.2738 43.2287 13.91 42.765 12.7175C42.2943 11.4663 41.5563 10.3329 40.6025 9.39625C39.6661 8.44278 38.5331 7.70482 37.2825 7.23375C36.09 6.7725 34.725 6.45375 32.7288 6.3625C30.73 6.2725 30.0938 6.25 25 6.25ZM25 9.62875C30.0063 9.62875 30.6 9.6475 32.5775 9.7375C34.405 9.82125 35.3975 10.125 36.0588 10.3837C36.9338 10.7225 37.5588 11.13 38.215 11.785C38.8713 12.4412 39.2775 13.0662 39.6162 13.9412C39.8738 14.6025 40.1787 15.595 40.2625 17.4225C40.3525 19.4 40.3713 19.9937 40.3713 25C40.3713 30.0063 40.3525 30.6 40.2625 32.5775C40.1787 34.405 39.875 35.3975 39.6162 36.0588C39.3162 36.8732 38.8373 37.61 38.215 38.215C37.6101 38.8375 36.8733 39.3163 36.0588 39.6162C35.3975 39.8738 34.405 40.1787 32.5775 40.2625C30.6 40.3525 30.0075 40.3713 25 40.3713C19.9925 40.3713 19.4 40.3525 17.4225 40.2625C15.595 40.1787 14.6025 39.875 13.9412 39.6162C13.1268 39.3162 12.39 38.8373 11.785 38.215C11.1627 37.6099 10.6839 36.8731 10.3837 36.0588C10.1262 35.3975 9.82125 34.405 9.7375 32.5775C9.6475 30.6 9.62875 30.0063 9.62875 25C9.62875 19.9937 9.6475 19.4 9.7375 17.4225C9.82125 15.595 10.125 14.6025 10.3837 13.9412C10.7225 13.0662 11.13 12.4412 11.785 11.785C12.3899 11.1626 13.1268 10.6837 13.9412 10.3837C14.6025 10.1262 15.595 9.82125 17.4225 9.7375C19.4 9.6475 19.9937 9.62875 25 9.62875Z"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24.9998 31.2563C24.1782 31.2563 23.3647 31.0945 22.6056 30.7801C21.8466 30.4657 21.1569 30.0048 20.576 29.4239C19.995 28.8429 19.5342 28.1533 19.2198 27.3942C18.9054 26.6352 18.7436 25.8216 18.7436 25C18.7436 24.1785 18.9054 23.3649 19.2198 22.6059C19.5342 21.8468 19.995 21.1572 20.576 20.5762C21.1569 19.9953 21.8466 19.5344 22.6056 19.22C23.3647 18.9056 24.1782 18.7438 24.9998 18.7438C26.6591 18.7438 28.2504 19.4029 29.4236 20.5762C30.5969 21.7495 31.2561 23.3408 31.2561 25C31.2561 26.6593 30.5969 28.2506 29.4236 29.4239C28.2504 30.5972 26.6591 31.2563 24.9998 31.2563ZM24.9998 15.3625C22.4438 15.3625 19.9924 16.3779 18.1851 18.1853C16.3777 19.9927 15.3623 22.444 15.3623 25C15.3623 27.5561 16.3777 30.0074 18.1851 31.8148C19.9924 33.6222 22.4438 34.6375 24.9998 34.6375C27.5558 34.6375 30.0072 33.6222 31.8145 31.8148C33.6219 30.0074 34.6373 27.5561 34.6373 25C34.6373 22.444 33.6219 19.9927 31.8145 18.1853C30.0072 16.3779 27.5558 15.3625 24.9998 15.3625ZM37.441 15.1875C37.441 15.7917 37.201 16.3712 36.7738 16.7984C36.3466 17.2257 35.7671 17.4657 35.1629 17.4657C34.5587 17.4657 33.9793 17.2257 33.552 16.7984C33.1248 16.3712 32.8848 15.7917 32.8848 15.1875C32.8848 14.5834 33.1248 14.0039 33.552 13.5767C33.9793 13.1494 34.5587 12.9094 35.1629 12.9094C35.7671 12.9094 36.3466 13.1494 36.7738 13.5767C37.201 14.0039 37.441 14.5834 37.441 15.1875Z"/>
                                </svg>
                            </a>       
                        </div>
                    </div>

                    <div className="mb-8">
                        <div>
                            <a target='_blank' href="https://www.linkedin.com/in/yasmim-barros-8b1491200/">
                                <svg className="dark:text-slate-400" width="40" height="40" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M43.75 9.00735V40.9926C43.75 41.7239 43.4595 42.4253 42.9424 42.9424C42.4253 43.4595 41.7239 43.75 40.9926 43.75H9.00735C8.27606 43.75 7.57471 43.4595 7.05761 42.9424C6.54051 42.4253 6.25 41.7239 6.25 40.9926V9.00735C6.25 8.27606 6.54051 7.57471 7.05761 7.05761C7.57471 6.54051 8.27606 6.25 9.00735 6.25H40.9926C41.7239 6.25 42.4253 6.54051 42.9424 7.05761C43.4595 7.57471 43.75 8.27606 43.75 9.00735ZM17.2794 20.5882H11.7647V38.2353H17.2794V20.5882ZM17.7757 14.5221C17.7786 14.1049 17.6994 13.6913 17.5424 13.3048C17.3855 12.9183 17.1539 12.5665 16.861 12.2695C16.5681 11.9725 16.2195 11.7361 15.8352 11.5737C15.451 11.4114 15.0385 11.3264 14.6213 11.3235H14.5221C13.6738 11.3235 12.8602 11.6605 12.2604 12.2604C11.6605 12.8602 11.3235 13.6738 11.3235 14.5221C11.3235 15.3704 11.6605 16.1839 12.2604 16.7838C12.8602 17.3836 13.6738 17.7206 14.5221 17.7206C14.9392 17.7309 15.3543 17.6588 15.7437 17.5086C16.133 17.3584 16.4889 17.1329 16.791 16.8451C17.0932 16.5573 17.3357 16.2127 17.5046 15.8312C17.6736 15.4496 17.7657 15.0385 17.7757 14.6213V14.5221ZM38.2353 27.5147C38.2353 22.2096 34.8603 20.1471 31.5074 20.1471C30.4095 20.0921 29.3165 20.3259 28.3372 20.8252C27.358 21.3245 26.5268 22.0718 25.9265 22.9926H25.7721V20.5882H20.5882V38.2353H26.1029V28.8493C26.0232 27.888 26.326 26.9341 26.9456 26.1947C27.5651 25.4554 28.4514 24.9904 29.4118 24.9007H29.6213C31.375 24.9007 32.6765 26.0037 32.6765 28.7831V38.2353H38.1912L38.2353 27.5147Z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div>
                            <a target='_blank' href="https://github.com/Yasbarros">
                                <svg className=" dark:text-slate-400" width="33" height="33" viewBox="0 0 42 42" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M21.0171 0.513794C9.48725 0.513794 0.166504 9.90325 0.166504 21.5193C0.166504 30.8046 6.13862 38.6644 14.4235 41.4463C15.4594 41.6554 15.8388 40.9943 15.8388 40.4382C15.8388 39.9512 15.8046 38.282 15.8046 36.5428C10.0045 37.7951 8.7967 34.0389 8.7967 34.0389C7.86458 31.6044 6.48347 30.9787 6.48347 30.9787C4.5851 29.692 6.62176 29.692 6.62176 29.692C8.72756 29.8311 9.83252 31.8481 9.83252 31.8481C11.6963 35.0474 14.6997 34.1434 15.9079 33.5869C16.0804 32.2305 16.6331 31.2916 17.2199 30.77C12.5939 30.2831 7.72672 28.4747 7.72672 20.4062C7.72672 18.1109 8.5547 16.233 9.86667 14.7725C9.65967 14.251 8.93455 12.0944 10.0741 9.208C10.0741 9.208 11.8346 8.65147 15.8042 11.3642C17.5037 10.9044 19.2564 10.6705 21.0171 10.6685C22.7776 10.6685 24.5723 10.9122 26.2295 11.3642C30.1995 8.65147 31.9601 9.208 31.9601 9.208C33.0996 12.0944 32.374 14.251 32.1671 14.7725C33.5136 16.233 34.3074 18.1109 34.3074 20.4062C34.3074 28.4747 29.4403 30.2481 24.7797 30.77C25.5394 31.4307 26.1949 32.6825 26.1949 34.665C26.1949 37.4818 26.1608 39.7425 26.1608 40.4378C26.1608 40.9943 26.5406 41.6554 27.576 41.4467C35.861 38.664 41.8331 30.8046 41.8331 21.5193C41.8672 9.90325 32.5123 0.513794 21.0171 0.513794Z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="mb-4 md:block hidden">
                        <div className="mx-4  bottom-0 left-0 w-[3px] h-64 bg-gradient-to-t from-transparent to-gray-800 dark:to-gray-500">
                        </div>
                    </div>
                </div> 
            </div>                    
        </div>
    )
}
