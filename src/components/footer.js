import git from  '../icons/github.png'
import linkedin from '../icons/linkedin.png'
import insta from '../icons/instagram.png'
import { useTranslation } from 'react-i18next'


export default function Footer(){

    const { t } = useTranslation();

    return(
        <div className="bg-black text-slate-300 text-center pt-8 pb-3 font-plus">
            <h1 className="text-xl font-medium font-logo">YASCODER</h1>
            <p className="">{t("Me acompanhe nas redes")}</p>
            <div className="mt-3 flex flex-row gap-4 place-content-center">
                <a target='_blank' href="https://github.com/Yasbarros">
                    <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.0171 4.51379C13.4872 4.51379 4.1665 13.9033 4.1665 25.5193C4.1665 34.8046 10.1386 42.6644 18.4235 45.4463C19.4594 45.6554 19.8388 44.9943 19.8388 44.4382C19.8388 43.9512 19.8046 42.282 19.8046 40.5428C14.0045 41.7951 12.7967 38.0389 12.7967 38.0389C11.8646 35.6044 10.4835 34.9787 10.4835 34.9787C8.5851 33.692 10.6218 33.692 10.6218 33.692C12.7276 33.8311 13.8325 35.8481 13.8325 35.8481C15.6963 39.0474 18.6997 38.1434 19.9079 37.5869C20.0804 36.2305 20.6331 35.2916 21.2199 34.77C16.5939 34.2831 11.7267 32.4747 11.7267 24.4062C11.7267 22.1109 12.5547 20.233 13.8667 18.7725C13.6597 18.251 12.9346 16.0944 14.0741 13.208C14.0741 13.208 15.8346 12.6515 19.8042 15.3642C21.5037 14.9044 23.2564 14.6705 25.0171 14.6685C26.7776 14.6685 28.5723 14.9122 30.2295 15.3642C34.1995 12.6515 35.9601 13.208 35.9601 13.208C37.0996 16.0944 36.374 18.251 36.1671 18.7725C37.5136 20.233 38.3074 22.1109 38.3074 24.4062C38.3074 32.4747 33.4403 34.2481 28.7797 34.77C29.5394 35.4307 30.1949 36.6825 30.1949 38.665C30.1949 41.4818 30.1608 43.7425 30.1608 44.4378C30.1608 44.9943 30.5406 45.6554 31.576 45.4467C39.861 42.664 45.8331 34.8046 45.8331 25.5193C45.8672 13.9033 36.5123 4.51379 25.0171 4.51379Z" fill="#A2A2A2"/>
                    </svg>
                </a>
                <a target='_blank' href="https://www.linkedin.com/in/yasmim-barros-8b1491200/">
                    <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M43.75 9.00735V40.9926C43.75 41.7239 43.4595 42.4253 42.9424 42.9424C42.4253 43.4595 41.7239 43.75 40.9926 43.75H9.00735C8.27606 43.75 7.57471 43.4595 7.05761 42.9424C6.54051 42.4253 6.25 41.7239 6.25 40.9926V9.00735C6.25 8.27606 6.54051 7.57471 7.05761 7.05761C7.57471 6.54051 8.27606 6.25 9.00735 6.25H40.9926C41.7239 6.25 42.4253 6.54051 42.9424 7.05761C43.4595 7.57471 43.75 8.27606 43.75 9.00735V9.00735ZM17.2794 20.5882H11.7647V38.2353H17.2794V20.5882ZM17.7757 14.5221C17.7786 14.1049 17.6994 13.6913 17.5424 13.3048C17.3854 12.9183 17.1539 12.5665 16.861 12.2695C16.5681 11.9725 16.2195 11.7361 15.8352 11.5737C15.451 11.4114 15.0385 11.3264 14.6213 11.3235H14.5221C13.6738 11.3235 12.8602 11.6605 12.2604 12.2604C11.6605 12.8602 11.3235 13.6738 11.3235 14.5221C11.3235 15.3704 11.6605 16.1839 12.2604 16.7838C12.8602 17.3836 13.6738 17.7206 14.5221 17.7206V17.7206C14.9392 17.7309 15.3543 17.6588 15.7437 17.5086C16.133 17.3584 16.4889 17.1329 16.791 16.8451C17.0932 16.5573 17.3357 16.2127 17.5046 15.8312C17.6736 15.4496 17.7657 15.0385 17.7757 14.6213V14.5221ZM38.2353 27.5147C38.2353 22.2096 34.8603 20.1471 31.5074 20.1471C30.4095 20.0921 29.3165 20.3259 28.3372 20.8252C27.358 21.3245 26.5268 22.0718 25.9265 22.9926H25.7721V20.5882H20.5882V38.2353H26.1029V28.8493C26.0232 27.888 26.326 26.9341 26.9456 26.1947C27.5651 25.4554 28.4514 24.9904 29.4118 24.9007H29.6213C31.375 24.9007 32.6765 26.0037 32.6765 28.7831V38.2353H38.1912L38.2353 27.5147Z" fill="#A2A2A2"/>
                    </svg>
                </a>
                <a target='_blank' href="https://www.instagram.com/yascoder">
                    <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25 6.25C19.9075 6.25 19.27 6.27125 17.27 6.3625C15.2737 6.45375 13.91 6.77125 12.7175 7.235C11.4675 7.705 10.3337 8.4425 9.39625 9.3975C8.44278 10.3339 7.70482 11.4669 7.23375 12.7175C6.7725 13.91 6.45375 15.275 6.3625 17.2713C6.2725 19.27 6.25 19.9063 6.25 25C6.25 30.0937 6.27125 30.73 6.3625 32.73C6.45375 34.7263 6.77125 36.09 7.235 37.2825C7.705 38.5325 8.4425 39.6662 9.3975 40.6037C10.3339 41.5572 11.4669 42.2951 12.7175 42.7662C13.91 43.2287 15.2737 43.5462 17.27 43.6375C19.27 43.7287 19.9075 43.75 25 43.75C30.0925 43.75 30.73 43.7287 32.73 43.6375C34.7263 43.5462 36.09 43.2287 37.2825 42.765C38.5325 42.295 39.6662 41.5575 40.6037 40.6025C41.5572 39.6661 42.2952 38.5331 42.7662 37.2825C43.2287 36.09 43.5462 34.7263 43.6375 32.73C43.7287 30.73 43.75 30.0925 43.75 25C43.75 19.9075 43.7287 19.27 43.6375 17.27C43.5462 15.2737 43.2287 13.91 42.765 12.7175C42.2943 11.4663 41.5563 10.3329 40.6025 9.39625C39.6661 8.44278 38.5331 7.70482 37.2825 7.23375C36.09 6.7725 34.725 6.45375 32.7288 6.3625C30.73 6.2725 30.0937 6.25 25 6.25ZM25 9.62875C30.0063 9.62875 30.6 9.6475 32.5775 9.7375C34.405 9.82125 35.3975 10.125 36.0588 10.3837C36.9338 10.7225 37.5588 11.13 38.215 11.785C38.8713 12.4412 39.2775 13.0662 39.6163 13.9412C39.8738 14.6025 40.1787 15.595 40.2625 17.4225C40.3525 19.4 40.3713 19.9937 40.3713 25C40.3713 30.0063 40.3525 30.6 40.2625 32.5775C40.1787 34.405 39.875 35.3975 39.6163 36.0588C39.3162 36.8732 38.8373 37.61 38.215 38.215C37.6101 38.8375 36.8733 39.3163 36.0588 39.6163C35.3975 39.8738 34.405 40.1787 32.5775 40.2625C30.6 40.3525 30.0075 40.3713 25 40.3713C19.9925 40.3713 19.4 40.3525 17.4225 40.2625C15.595 40.1787 14.6025 39.875 13.9412 39.6163C13.1268 39.3162 12.39 38.8373 11.785 38.215C11.1627 37.6099 10.6839 36.8731 10.3837 36.0588C10.1262 35.3975 9.82125 34.405 9.7375 32.5775C9.6475 30.6 9.62875 30.0063 9.62875 25C9.62875 19.9937 9.6475 19.4 9.7375 17.4225C9.82125 15.595 10.125 14.6025 10.3837 13.9412C10.7225 13.0662 11.13 12.4412 11.785 11.785C12.3899 11.1626 13.1268 10.6837 13.9412 10.3837C14.6025 10.1262 15.595 9.82125 17.4225 9.7375C19.4 9.6475 19.9937 9.62875 25 9.62875V9.62875Z" fill="#A2A2A2"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.9998 31.2563C24.1782 31.2563 23.3647 31.0945 22.6056 30.7801C21.8466 30.4657 21.1569 30.0048 20.576 29.4239C19.995 28.8429 19.5342 28.1533 19.2198 27.3942C18.9054 26.6352 18.7436 25.8216 18.7436 25C18.7436 24.1785 18.9054 23.3649 19.2198 22.6059C19.5342 21.8468 19.995 21.1572 20.576 20.5762C21.1569 19.9953 21.8466 19.5344 22.6056 19.22C23.3647 18.9056 24.1782 18.7438 24.9998 18.7438C26.6591 18.7438 28.2504 19.4029 29.4236 20.5762C30.5969 21.7495 31.2561 23.3408 31.2561 25C31.2561 26.6593 30.5969 28.2506 29.4236 29.4239C28.2504 30.5972 26.6591 31.2563 24.9998 31.2563V31.2563ZM24.9998 15.3625C22.4438 15.3625 19.9924 16.3779 18.1851 18.1853C16.3777 19.9927 15.3623 22.444 15.3623 25C15.3623 27.5561 16.3777 30.0074 18.1851 31.8148C19.9924 33.6222 22.4438 34.6375 24.9998 34.6375C27.5558 34.6375 30.0072 33.6222 31.8145 31.8148C33.6219 30.0074 34.6373 27.5561 34.6373 25C34.6373 22.444 33.6219 19.9927 31.8145 18.1853C30.0072 16.3779 27.5558 15.3625 24.9998 15.3625V15.3625ZM37.441 15.1875C37.441 15.7917 37.201 16.3712 36.7738 16.7984C36.3466 17.2257 35.7671 17.4657 35.1629 17.4657C34.5587 17.4657 33.9793 17.2257 33.552 16.7984C33.1248 16.3712 32.8848 15.7917 32.8848 15.1875C32.8848 14.5834 33.1248 14.0039 33.552 13.5767C33.9793 13.1494 34.5587 12.9094 35.1629 12.9094C35.7671 12.9094 36.3466 13.1494 36.7738 13.5767C37.201 14.0039 37.441 14.5834 37.441 15.1875" fill="#A2A2A2"/>
                    </svg>
                </a>
            </div>
            <p className="mt-3 text-sm">{t("2024 © Todos os direitos reservados - Yasmim Barros")}</p>
            <p className="text-sm">{t("Site carinhosamente desenvolvido por mim ♡")}</p>
        </div>
    )
}