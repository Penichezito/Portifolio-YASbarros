
import sp from '../img/setup.jpg';
import agencia from '../img/agencia.jpg';
import html from '../icons/html5.png';
import css from '../icons/css3.png';
import boots from '../icons/bootstrap5.png';
import js from '../icons/js.png';
export default function Projects(){

    return(
        <div id="projects" className=" dark:bg-black  dark:text-slate-300 container mx-auto px-5 grid justify-items-center text-center mt-10 mb-14 font-plus gap-40">

            <div className="mt-5">
                <div className="">
                    <h1 className="text-3xl mb-2  dark:text-white text-slate-700">Projetos</h1>
                    <div class="h-[3px] ml-5 w-28 bg-gradient-to-l from-transparent via-roxo to-roxo"></div>
                </div>
                <p className="mt-3 text-slate-400">Praticas & trabalhos</p>
            </div>
            
            <div className='flex flex-col md:flex-row gap-9 mt-[-60px]'>
                <div className="">
                    <img className="shadow-lg h-[20rem] w-[30rem]" src={sp}></img>
                </div>
                <div className="text-left place-content-end">
                    <h1 className="text-3xl font-medium mb-5">Projeto tal e etc</h1>
                    <p className="mb-5 max-w-[500px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In dolore, cum sed libero laboriosam voluptate consectetur optio quibusdam, quam necessitatibus iure deleniti vitae hic, unde temporibus praesentium? Harum, pariatur. Cum.</p>
                    <div className="flex flex-row gap-5 mb-8">
                        <div className="w-16 h-16 rounded-full bg-slate-300"></div>
                        <div className="w-16 h-16 rounded-full bg-slate-300"></div>
                        <div className="w-16 h-16 rounded-full bg-slate-300"></div>
                        <div className="w-16 h-16 rounded-full bg-slate-300"></div>
                    </div>
                    <div className="flex flex-row gap-4 ">
                        <button className="transition duration-500 hover:border-mindaro border-slate-600 border-2 rounded-full px-6 py-3 dark:text-white text-black ">Deploy</button>
                        <button className="border-slate-600 border-2 transition hover:border-mindaro duration-500  rounded-full px-6 py-3 text-black dark:text-white ">GitHub</button>
                    </div>
                </div>
            </div> 

            <div className='flex flex-col md:flex-row-reverse gap-9'>
                <div className="">
                    <img className="shadow-lg h-[20rem] w-[30rem]" src={sp}></img>
                </div>
                <div className="text-right place-content-end">
                    <h1 className="text-3xl font-medium mb-5">Projeto tal e etc</h1>
                    <p className="mb-5  max-w-[500px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In dolore, cum sed libero laboriosam voluptate consectetur optio quibusdam, quam necessitatibus iure deleniti vitae hic, unde temporibus praesentium? Harum, pariatur. Cum.</p>
                    <div className="flex flex-row gap-5 mb-8 justify-end">
                        <div className="w-16 h-16 rounded-full bg-slate-300"></div>
                        <div className="w-16 h-16 rounded-full bg-slate-300"></div>
                        <div className="w-16 h-16 rounded-full bg-slate-300"></div>
                        <div className="w-16 h-16 rounded-full bg-slate-300"></div>
                    </div>
                    <div className="flex flex-row gap-4 justify-end">
                        <button className=" transition hover:border-mindaro duration-500 border-slate-600 border-2 rounded-full px-6 py-3 text-black dark:text-white  ">Deploy</button>
                        <button className="transition hover:border-mindaro duration-500 border-slate-600 border-2 rounded-full px-6 py-3 text-black dark:text-white ">GitHub</button>
                    </div>
                </div>
            </div> 

            <div className='flex flex-col md:flex-row gap-9'>
                <div className="">
                    <img className="shadow-lg h-[20rem] w-[30rem]" src={sp}></img>
                </div>
                <div className="text-left place-content-end">
                    <h1 className="text-3xl font-medium mb-5">Projeto tal e etc</h1>
                    <p className="mb-5 max-w-[500px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In dolore, cum sed libero laboriosam voluptate consectetur optio quibusdam, quam necessitatibus iure deleniti vitae hic, unde temporibus praesentium? Harum, pariatur. Cum.</p>
                    <div className="flex flex-row gap-5 mb-8">
                        <div className="w-16 h-16 rounded-full bg-slate-300"></div>
                        <div className="w-16 h-16 rounded-full bg-slate-300"></div>
                        <div className="w-16 h-16 rounded-full bg-slate-300"></div>
                        <div className="w-16 h-16 rounded-full bg-slate-300"></div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <button className="transition hover:border-mindaro duration-500 border-slate-600 border-2 rounded-full px-6 py-3 text-black dark:text-white ">Deploy</button>
                        <button className="transition hover:border-mindaro duration-500 border-slate-600 border-2 rounded-full px-6 py-3 text-black dark:text-white ">GitHub</button>
                    </div>
                </div>
            </div> 

            <div className='flex flex-col md:flex-row-reverse gap-9'>
                <div className="relative shadow-2xl">
                    <div className="absolute bg-black h-full top-0 left-0 w-full bg-opacity-60 "></div>
                    <img className="shadow-lg h-[20rem] w-[30rem]" src={agencia}></img>
                </div>
                <div className="text-right place-content-end">
                    <h1 className="text-3xl font-medium mb-5">Agencia de Marketing</h1>
                    <p className="mb-5  max-w-[500px]">Landing page de agencia digital de marketing, responsivo, desenvolvido para prática e aperfeiçoamento de conhecimentos</p>
                    <div className="flex flex-row gap-5 mb-8 justify-end">
                        <div className="w-16 h-16  bg-gray-400 rounded-full items-center flex justify-center">
                            <img className="size-10" src={html}></img>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-gray-400 items-center flex justify-center">
                            <img className="size-10" src={css}></img>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-gray-400 items-center flex justify-center">
                            <img className="size-10" src={js}></img>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-gray-400 items-center flex justify-center">
                            <img className="size-10 w-12" src={boots}></img>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 justify-end">
                        <a href="https://agenciadigital.vercel.app/" className="transition hover:border-mindaro duration-500  border-slate-600 border-2 rounded-full px-6 py-3 text-black dark:text-white ">Deploy</a>
                        <a href="https://github.com/Yasbarros/Agencia-Digital" className="transition hover:border-mindaro duration-500 border-slate-600 border-2 rounded-full px-6 py-3 text-black dark:text-white ">GitHub</a>
                    </div>
                </div>
            </div> 


        </div>
    )
}