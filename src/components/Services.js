import laptop from '../icons/Laptop.png'
import web from '../icons/Web.png'
import { useTranslation } from 'react-i18next'


export default function Services(){
 
    const { t } = useTranslation();

    return(
        <div id="services" className="font-plus overflow-hidden mt-20 bg-black text-center grid justify-items-center">
            {/* <div className="absolute  blur-[90px] top-3em] opacity-15 rounded-full bg-purpleLigth w-[65rem] h-[45rem]"></div> */}
            <div className="grid justify-items-center">
                <div className="mt-20">
                    <h1 className="text-slate-100 text-3xl md:text-4xl mb-4 ml-0">{t("Serviços Autonomos")}</h1>
                    <div className="h-[3px] w-64 bg-gradient-to-l from-transparent via-roxo to-roxo"></div>
                </div>
                <p className="text-slate-300 mt-2 md:w-[50rem] p-8 text-base md:text-lg text-justify md:text-center"> 
                {t("Ofereço serviços de desenvolvimento de sites e landing pages de qualidade, ideais para quem deseja fortalecer a presença online do seu negócio ou marca, agregando personalidade e resultados. Venha impulsionar o futuro do seu negócio! ")}</p>
            </div>
            <div className="flex flex-col md:flex-row items-center mt-8 gap-24 mb-24 px-2">
                <div className="relative bg-gradient-to-b from-roxo to-black md:w-[23rem] md:h-[28rem] w-[17rem] h-[23rem] rounded-2xl place-content-center grid justify-items-center">
                     <img className="md:size-28 size-24" src={laptop} alt='site'></img>
                    <h1 className="mt-8 font-bold text-white text-xl md:text-2xl">{t("Sites")}</h1>
                    <a href="#contact" className="absolute bg-purple-500 font-bold bottom-0 rounded-lg px-20 py-2 md:px-32 md:py-4 text-white hover:bg-teal-600 transition duration-500 " >{t("Contratar")}</a>
                </div>
                <div className="relative bg-gradient-to-b from-roxo to-black md:w-[23rem] md:h-[28rem] w-[17rem] h-[23rem] rounded-2xl place-content-center grid justify-items-center">
                    <img className="md:size-20 size-20" src={web} alt='landing'></img> 
                    <h1 className="mt-10 font-bold text-white  text-xl md:text-2xl">{t("Landing Pages")}</h1>
                    <a href="#contact" className=" absolute bg-purple-500 font-bold bottom-0 rounded-lg px-20 py-2 md:px-32 md:py-4 text-white hover:bg-teal-600 transition duration-500 " >{t("Contratar")}</a>
                </div>
            </div>
        </div>
    )
}