import laptop from '../icons/Laptop.png'
import web from '../icons/Web.png'
import { useTranslation } from 'react-i18next'


export default function Services(){
 
    const { t } = useTranslation();

    return(
        <div id="services" className=" font-plus overflow-hidden mt-36 bg-slate-900 text-center grid justify-items-center">
            {/* <div className="absolute  blur-[90px] top-3em] opacity-15 rounded-full bg-purpleLigth w-[65rem] h-[45rem]"></div> */}
            <div className="grid justify-items-center">
                <div className="mt-20">
                    <h1 className="text-slate-100 text-3xl md:text-4xl mb-4 ml-0">{t("Serviços Autonomos")}</h1>
                    <div class="h-[3px] w-64 bg-gradient-to-l from-transparent via-roxo to-roxo"></div>
                </div>
                <p className="text-slate-300 mt-2 md:w-[50rem] p-8 text-base md:text-lg"> 
                {t("Ofereço serviços de qualidade de desenvolvimento de sites e landing page pra quem deseja aumentar a presença online do seu negócio ou marca com muito mais personalidade e resultados. Vem mudar o futuro da seu negócio também! ")}</p>
            </div>
            <div className="flex flex-col md:flex-row items-center mt-8 gap-12 mb-24 px-2">
                <div className="bg-overlay bg-opacity-40  shadow-overlay shadow-inner-lg border-4 border-overlay md:w-[27rem] md:h-[35rem] w-[19rem] h-[25rem] rounded-3xl place-content-center grid justify-items-center">
                     <img className="md:size-32 size-24" src={laptop}></img>
                    <h1 className="mt-10 font-bold text-white text-xl md:text-2xl">{t("Sites")}</h1>
                    <button className="bg-mindaro font-bold  mt-10 rounded-full px-8 py-2 md:px-14 md:py-4 text-black hover:bg-overlay transition duration-500 hover:text-white" >{t("Contratar")}</button>
                </div>
                <div className="bg-overlay bg-opacity-40 shadow-overlay shadow-inner-lg  md:w-[27rem] md:h-[35rem] w-[19rem] h-[25rem] rounded-3xl place-content-center grid justify-items-center">
                    <img className="md:size-32 size-20" src={web}></img> 
                    <h1 className="mt-14 font-bold text-white  text-xl md:text-2xl">{t("Landing Pages")}</h1>
                    <button className=" bg-mindaro mt-10 font-bold rounded-full px-8 py-2 md:px-14 md:py-4 text-black hover:bg-overlay transition duration-500 hover:text-white" >{t("Contratar")}</button>
                </div>
            </div>
        </div>
    )
}