import git from  '../icons/github.png'
import linkedin from '../icons/linkedin.png'
import insta from '../icons/instagram.png'
import { useTranslation } from 'react-i18next'


export default function Footer(){

    const { t } = useTranslation();

    return(
        <div className="bg-zinc-950 text-white text-center pt-8 pb-3 font-plus">
            <h1 className="text-xl font-medium font-logo">YASCODER</h1>
            <p className="">{t("Me acompanhe nas redes")}</p>
            <div className="mt-3 flex flex-row gap-4 place-content-center">
                <a target='_blank' href="https://github.com/Yasbarros"><img className="size-8" src={git}></img></a>
                <a target='_blank' href="https://www.linkedin.com/in/yasmim-barros-8b1491200/"><img className="size-8" src={linkedin}></img></a>
                <a target='_blank' href="https://www.instagram.com/yascoder"><img className="size-8" src={insta}></img></a>
            </div>
            <p className="mt-3 text-sm">{t("2024 © Todos os direitos reservados - Yasmim Barros")}</p>
            <p className="text-sm">{t("Site carinhosamente desenvolvido por mim ♡")}</p>
        </div>
    )
}