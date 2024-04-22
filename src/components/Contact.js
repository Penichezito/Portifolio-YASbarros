import React, { useState, useRef } from 'react';
import email from '../icons/Email.png';
import whats from '../icons/whatsapp.png';
import git from '../icons/gitWhite.png';
import linkedin from '../icons/linkedinWhite.png';
import { useTranslation } from 'react-i18next';
import emailJs from '@emailjs/browser';


export default function Contact(){

    const {t} = useTranslation();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [msg,setMsg] = useState("");
    const [tell,setTell] = useState("");

    function sendEmail(e){
        e.preventDefault();

        if(name === '' || email === '' || msg === '' || tell === ''){
            alert("Por favor preencha todos os campos!");
            return;
        }

        const templateParams = {
            from_name: name,
            email: email,
            message: msg,
            tell: tell,
        }

        emailJs.send("service_3hc07wi","template_i54xg3j",templateParams,"7ED6TRaOip2eY29om").then((response)=> {
            console.log("Email enviado", response.status, response.text)
            setName('')
            setEmail('')
            setTell('')
            setMsg('')
        }, (err)=>{
            console.log("Erro", err)
        })

    }

    
    return(
        <div id="contact" className="relative dark:bg-gray-950 dark:text-slate-300 container mx-auto my-20 font-plus">
            
            <div id="title" className="text-center grid justify-items-center md:justify-items-start">
                <h1 className="mt-4 mb-2 text-3xl md:text-4xl text-slate-700 dark:text-slate-300 ">{t("Contato")}</h1>
                <div className="h-[3px] w-28 bg-gradient-to-l from-transparent via-roxo to-roxo"></div>
                <p className="mt-3 w-72 md:w-auto mb-20 text-sm md:text-lg text-slate-500 dark:text-slate-300">{t("E ai, ficou interessado? Entre em contato e vamos conversar!")}</p>
            </div>

            <div className="flex flex-col md:flex-row gap-24 items-center">
                <div id="form" >
                    <form className="flex flex-col gap-5 md:w-[35rem] w-[20rem] text-slate-700 dark:text-slate-300 " onSubmit={sendEmail}>
                        <label htmlFor="name">{t("Nome")}</label>
                        <input id="name" type="text" value={name} onChange={(e)=>setName(e.target.value)} className="border-b-2 dark:border-slate-300 border-black focus:outline-none bg-transparent"/>

                        <label htmlFor="email">{t("Email")}</label>
                        <input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="border-b-2 dark:border-slate-300 border-black  focus:outline-none bg-transparent"/>

                        <label htmlFor="tell">{t("Telefone")}</label>
                        <input id="tell" type="tel" value={tell} onChange={(e)=>setTell(e.target.value)} className="border-b-2 dark:border-slate-300 border-black focus:outline-none bg-transparent"/>

                        <label htmlFor="msg">{t("Mensagem")}</label>
                        <textarea id="msg" value={msg} onChange={(e)=>setMsg(e.target.value)} className="border-b-2 dark:border-slate-300 border-black focus:outline-none leading-normal bg-transparent" />

                        <button className="bg-sky-600  transition duration-500 hover:bg-blue-800 rounded-2xl w-full h-14 text-white shadow-xl">{t("Enviar")}</button>
                    </form>
                </div>

                <div id="buttons" className="flex flex-col place-content-center gap-8">
                    <a href="mailto:barrosyasmim13@gmail.com" className=" flex items-center justify-center relative transition duration-500 bg-sky-600  hover:bg-blue-800 rounded-2xl w-72 md:w-80 h-20 md:h-20 shadow-xl text-white">
                        <span className="flex flex-col gap-2 w-40 items-center justify-center">
                            <svg className="" width="27" height="27" viewBox="0 0 53 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M48.7222 1.05566H4.27778C2.74365 1.05566 1.5 2.29932 1.5 3.83344V37.1668C1.5 38.7009 2.74365 39.9445 4.27778 39.9445H48.7222C50.2563 39.9445 51.5 38.7009 51.5 37.1668V3.83344C51.5 2.29932 50.2563 1.05566 48.7222 1.05566Z" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                                <path d="M1.5 5.22266L26.5 20.5004L51.5 5.22266" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                            </svg>
                            <p className="">{t("Email")}</p>
                        </span>
                    </a>
                    <a target='_blank' href="https://api.whatsapp.com/send?phone=5575983588457" className="flex items-center justify-center relative transition duration-500 bg-sky-600  hover:bg-blue-800 rounded-2xl w-72 md:w-80 h-20 md:h-20 shadow-xl text-white">
                        <span className="flex flex-col gap-2 items-center justify-center w-40">
                            <svg className="" width="27" height="27" viewBox="0 0 61 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.6258 0.467773C14.1587 0.467773 0.757419 13.3755 0.751613 29.2387C0.747742 34.3116 2.12581 39.2626 4.73871 43.6233L0.5 58.5323L16.3381 54.5316C20.7436 56.8362 25.6423 58.0383 30.6142 58.0349H30.6258C47.0929 58.0349 60.4942 45.1252 60.5 29.262C60.5039 21.5781 57.3993 14.3452 51.7574 8.90842C46.1174 3.46971 38.6174 0.469709 30.6258 0.467773ZM30.6258 53.1749H30.6161C26.1606 53.1749 21.7903 52.0213 17.9774 49.842L17.0677 49.3233L7.6729 51.6962L10.1813 42.8704L9.59097 41.9665C7.11143 38.1848 5.79148 33.7608 5.79355 29.2387C5.79935 16.0523 16.94 5.32777 30.6355 5.32777C37.2664 5.32971 43.5006 7.82068 48.1903 12.34C52.88 16.8594 55.46 22.8691 55.4561 29.26C55.4503 42.4465 44.3116 53.1749 30.6239 53.1749H30.6258ZM44.2458 35.262C43.4987 34.9039 39.829 33.1639 39.1439 32.922C38.4606 32.6839 37.9632 32.56 37.4658 33.28C36.9703 34 35.5381 35.62 35.1045 36.0981C34.6671 36.5781 34.2316 36.6362 33.4845 36.2781C32.7374 35.9181 30.3316 35.1594 27.4826 32.7091C25.2626 30.8045 23.7645 28.451 23.329 27.7291C22.8935 27.011 23.2826 26.622 23.6561 26.2639C23.991 25.9445 24.4032 25.4258 24.7748 25.0058C25.1464 24.5858 25.2703 24.2858 25.5219 23.8058C25.7697 23.3278 25.6458 22.9058 25.4581 22.5478C25.2703 22.1858 23.78 18.6478 23.1548 17.2097C22.551 15.8084 21.9355 15.9962 21.4768 15.9729C21.0413 15.9536 20.5458 15.9478 20.0445 15.9478C19.551 15.9478 18.74 16.1278 18.0548 16.8478C17.3716 17.5678 15.4419 19.3058 15.4419 22.8439C15.4419 26.3839 18.1168 29.802 18.4903 30.282C18.8639 30.76 23.7548 38.0239 31.2432 41.14C33.0239 41.8774 34.4135 42.3207 35.4994 42.6536C37.2877 43.2013 38.9155 43.122 40.2006 42.9381C41.6329 42.731 44.6174 41.2 45.2368 39.522C45.86 37.8439 45.86 36.4039 45.6742 36.1039C45.4923 35.8039 44.9929 35.6239 44.2458 35.262V35.262Z" fill="white"/>
                            </svg>
                            <p className="">{t("WhatsApp")}</p>
                        </span>
                    </a>
                    <a target='_blank' href="https://www.linkedin.com/in/yasmim-barros-8b1491200/" className="flex items-center justify-center relative transition duration-500 bg-sky-600 hover:bg-blue-800 rounded-2xl w-72 md:w-80 h-20 md:h-20 shadow-xl text-white">
                        <span className="flex flex-col gap-2 w-40 items-center justify-center ">
                            <svg className="" width="27" height="27" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M60.5 4.91176V56.0882C60.5 57.2583 60.0352 58.3805 59.2078 59.2078C58.3805 60.0352 57.2583 60.5 56.0882 60.5H4.91176C3.74169 60.5 2.61954 60.0352 1.79218 59.2078C0.96481 58.3805 0.5 57.2583 0.5 56.0882L0.5 4.91176C0.5 3.74169 0.96481 2.61954 1.79218 1.79218C2.61954 0.96481 3.74169 0.5 4.91176 0.5L56.0882 0.5C57.2583 0.5 58.3805 0.96481 59.2078 1.79218C60.0352 2.61954 60.5 3.74169 60.5 4.91176ZM18.1471 23.4412H9.32353V51.6765H18.1471V23.4412ZM18.9412 13.7353C18.9458 13.0679 18.819 12.4061 18.5678 11.7877C18.3167 11.1693 17.9462 10.6064 17.4776 10.1312C17.0089 9.65593 16.4512 9.27768 15.8364 9.01799C15.2215 8.7583 14.5615 8.62227 13.8941 8.61765H13.7353C12.378 8.61765 11.0763 9.15683 10.1166 10.1166C9.15683 11.0763 8.61765 12.378 8.61765 13.7353C8.61765 15.0926 9.15683 16.3943 10.1166 17.354C11.0763 18.3138 12.378 18.8529 13.7353 18.8529C14.4028 18.8694 15.0669 18.7541 15.6899 18.5138C16.3128 18.2734 16.8822 17.9127 17.3657 17.4522C17.8491 16.9916 18.2371 16.4404 18.5074 15.8299C18.7778 15.2194 18.9251 14.5616 18.9412 13.8941V13.7353ZM51.6765 34.5235C51.6765 26.0353 46.2765 22.7353 40.9118 22.7353C39.1553 22.6473 37.4064 23.0215 35.8396 23.8203C34.2728 24.6192 32.9428 25.8149 31.9824 27.2882H31.7353V23.4412H23.4412V51.6765H32.2647V36.6588C32.1372 35.1208 32.6216 33.5945 33.6129 32.4116C34.6042 31.2287 36.0222 30.4847 37.5588 30.3412H37.8941C40.7 30.3412 42.7824 32.1059 42.7824 36.5529V51.6765H51.6059L51.6765 34.5235Z" fill="white"/>
                            </svg>

                            <p>{t("Linkedin")}</p>
                        </span>
                    </a>
                    <a target='_blank' href="https://github.com/Yasbarros" className="flex items-center justify-center relative transition duration-500 bg-sky-600  hover:bg-blue-800 rounded-2xl w-72 md:w-80 h-20 md:h-20 shadow-xl text-white">
                        <span className="flex flex-col gap-2  w-40 items-center justify-center ">
                            <svg className="" width="30" height="30" viewBox="0 0 70 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M35.029 0.0830078C15.6588 0.0830078 0 15.8573 0 35.3722C0 50.9716 10.0332 64.1761 23.9518 68.8496C25.692 69.2009 26.3294 68.0903 26.3294 67.156C26.3294 66.3379 26.2721 63.5336 26.2721 60.6118C16.5279 62.7155 14.4987 56.4051 14.4987 56.4051C12.9328 52.3153 10.6125 51.2641 10.6125 51.2641C7.42324 49.1023 10.8448 49.1023 10.8448 49.1023C14.3826 49.3361 16.2389 52.7247 16.2389 52.7247C19.3701 58.0994 24.4157 56.5808 26.4456 55.6458C26.7353 53.3671 27.6638 51.7897 28.6497 50.9135C20.878 50.0954 12.7012 47.0574 12.7012 33.5023C12.7012 29.6462 14.0922 26.4913 16.2963 24.0377C15.9485 23.1615 14.7303 19.5384 16.6447 14.6893C16.6447 14.6893 19.6024 13.7543 26.2714 18.3116C29.1266 17.5392 32.0711 17.1462 35.029 17.1429C37.9866 17.1429 41.0017 17.5523 43.7858 18.3116C50.4555 13.7543 53.4132 14.6893 53.4132 14.6893C55.3276 19.5384 54.1087 23.1615 53.7609 24.0377C56.0231 26.4913 57.3568 29.6462 57.3568 33.5023C57.3568 47.0574 49.1799 50.0366 41.3501 50.9135C42.6264 52.0234 43.7278 54.1264 43.7278 57.457C43.7278 62.1892 43.6704 65.9873 43.6704 67.1553C43.6704 68.0903 44.3085 69.2009 46.048 68.8503C59.9667 64.1754 69.9998 50.9716 69.9998 35.3722C70.0572 15.8573 54.341 0.0830078 35.029 0.0830078Z" fill="white"/>
                            </svg>
                            <p>{t("GitHub")}</p>
                                          
                                          
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}