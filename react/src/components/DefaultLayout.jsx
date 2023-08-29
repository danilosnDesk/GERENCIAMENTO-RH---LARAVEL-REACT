
import { Users2, Building2, Blocks, Landmark, Wrench, Info, LogOut, TimerIcon, TimerReset, Palette } from "lucide-react";
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'

import axiosClient from '../axios-client';
import { useEffect } from "react";

export default function DefaultLayout() {
    const { user, token, setUser, setToken } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />
    }


    const onLogout = (ev) => {
        ev.preventDefault();
        axiosClient.post('/logout')
            .then(({ data }) => {
                setToken(null)
                setUser({})
            })
    }

    useEffect(() => {
        axiosClient.get('/user')
            .then(({ data }) => {
                setUser(data);
            })
            .catch((reason) => {
                console.log("razão " + reason);
                const err = reason.response;
                if (err && err.status === 401) {
                    setToken(null);
                }
            });
    }, []);
    // O array vazio como segundo argumento faz com que o efeito só seja executado após a montagem inicial do componente


    return (
        <div className="flex defaultLayout dark:bg-gray-900">
            <aside className="w-[240px] p-4 bg-[#5b08a7] dark:bg-gray-800">
                <div className="h-full pb-4 divide-y divide-slate-400 overflow-y-auto">
                    <div className="flex py-4 items-center justify-center text-white font-body">
                        <span className="text-lg text-center">RH MANAGMANT</span>
                    </div>
                    <ul className="space-y-2 font-medium">
                        <Link to="/dashboard">
                            <li>
                                <span className="flex items-center p-2 text-white hover:text-gray-500 dark:hover:text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                    </svg>
                                    <span className="ml-3">Dashboard</span>
                                </span>
                            </li>
                        </Link>
                        <Link to="/funcionarios">
                            <li>
                                <span className="flex items-center p-2 text-white hover:text-gray-500 dark:hover:text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <Users2 className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                    <span className="flex-1 ml-3 whitespace-nowrap">Funcionários</span>
                                </span>
                            </li>
                        </Link>
                        <Link to="/departamentos">

                            <li>
                                <span className="flex items-center p-2 text-white hover:text-gray-500 dark:hover:text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <Blocks className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />

                                    <span className="flex-1 ml-3 whitespace-nowrap">Departamentos</span>
                                </span>
                            </li>
                        </Link>
                        <Link to="/departamentos">
                            <li>
                                <span className="flex items-center p-2 text-white hover:text-gray-500 dark:hover:text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <Landmark className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />

                                    <span className="flex-1 ml-3 whitespace-nowrap">Finanças</span>
                                    <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">+2</span>
                                </span>
                            </li>
                        </Link>
                        <Link to="/users">
                            <li>

                                <span className="flex items-center p-2 text-white hover:text-gray-500 dark:hover:text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <TimerReset className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                    <span className="flex-1 ml-3 whitespace-nowrap">Registros de ponto</span>
                                </span>
                            </li>
                        </Link>
                    </ul>
                    <br />
                    <ul className="space-y-2 font-medium">
                        <li>
                            <span className="flex items-center p-2 text-white hover:text-gray-500 dark:hover:text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <Palette className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                <span className="flex-1 ml-3 whitespace-nowrap">tema</span>
                                <Wrench className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            </span>
                        </li>
                        <Link to="/">
                            <li>
                                <span className="flex items-center p-2 text-white hover:text-gray-500 dark:hover:text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <Wrench className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                    <span className="flex-1 ml-3 whitespace-nowrap">Configurações</span>
                                </span>
                            </li>
                        </Link>
                        <li>
                            <span className="flex items-center p-2 text-white hover:text-gray-500 dark:hover:text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <Info className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />

                                <span className="flex-1 ml-3 whitespace-nowrap">Sistema</span>
                            </span>
                        </li>
                        <li onClick={onLogout} className='cursor-pointer'>
                            <span className="flex items-center p-2 text-white hover:text-gray-500 dark:hover:text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <LogOut className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                <span className="flex-1 ml-3 whitespace-nowrap">Terminar Sessão</span>
                            </span>
                        </li>
                    </ul>
                </div>

            </aside>

            <main className=" flex-1">
                <nav className='w-full'>
                    <ul className='flex gap-4 items-center justify-end bg-white dark:bg-gray-700 shadow-md py-4 px-8'>
                        <li>
                            <a href="#" className='flex items-center gap-2'>
                                <span className='text-slate-900 dark:text-white'>{user.firstName} <br /></span>
                                <div className="relative">
                                    <img className="w-10 h-10 rounded-full" src="data:image/jpeg;base64,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" alt="" />
                                    <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full">
                                    </span>
                                </div>

                            </a>
                        </li>

                    </ul>
                </nav>
                <Outlet />
            </main>

        </div>
    )
}
