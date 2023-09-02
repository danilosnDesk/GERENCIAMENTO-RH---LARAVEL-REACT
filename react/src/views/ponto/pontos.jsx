import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TabelaPontos from "../../components/funcionario/TabelaPontos";
import axiosClient from "../../axios-client";
import { UserCheck, UserCheck2, UserMinus, UserX } from "lucide-react";


export default function Pontos() {
    const status = ['active', 'off', 'done', 'ferias']
    const [ActiveTab, setActiveTab] = useState(status[0]);
    const [Funcionarios, setFuncionarios] = useState(null);

    useEffect(() => {
        axiosClient.get(`/funcionarios`)
            .then((data) => {
                setFuncionarios(data.data)
                console.log(data.data);
            }).catch(err => {
                console.log(err);
            });
    }, [ActiveTab]);

    const displayFuncionarios = () => {
        switch (ActiveTab) {
            case "active":

                return <TabelaPontos rule="active" />

                break;
            case "done":
                return <TabelaPontos rule="done" />
                break;
            case "off":
                return <TabelaPontos rule="off" />
                break;
            case "ferias":
                return <TabelaPontos rule="ferias" />
                break;
            default:
                break;
        }
    }

    return (
        <div className="py-4 px-8">
            <div className="flex flex-row w-full justify-between py-5 ">
                <div className="flex flex-col w-1/4 h-28 bg-emerald-500 dark:bg-slate-600 text-white p-4 mx-2 shadow-xl">
                    <UserCheck className="flex-shrink-0 w-5 h-5 text-white dark:text-white transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" />
                    <h5 className="text-xs uppercase py-1">Activos</h5>
                    <h1 className="text-lg font-bold">10</h1>
                </div>
                <div className="flex flex-col w-1/4 h-28 bg-emerald-500 dark:bg-slate-600 text-white p-4 mx-2 shadow-xl">
                    <UserMinus className="flex-shrink-0 w-5 h-5 text-white dark:text-white transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" />
                    <h5 className="text-xs uppercase py-1">Em falta</h5>
                    <h1 className="text-lg font-bold">101</h1>
                </div>

                <div className="flex flex-col w-1/4 h-28 bg-emerald-500 dark:bg-slate-600 text-white p-4 mx-2 shadow-xl">
                    <UserX className="flex-shrink-0 w-5 h-5 text-white dark:text-white transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" />
                    <h5 className="text-xs uppercase py-1">Terminados</h5>
                    <h1 className="text-lg font-bold">40</h1>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-gray-500 text-[28px] font-light py-4 dark:text-white">Registros de Pontos</h1>
            </div>
            <div className="py-10">
                <div className="relative  bg-white shadow-md p-2 mx-4">

                    <ul className="bg-white dark:bg-gray-700 dark:border-slate-700 w-full flex gap-2 border-b-2 border-slate-200 transition-all">
                        <li className={`transition dark:text-slate-300 cursor-pointer py-4 px-8 text-gray-700 ${ActiveTab === status[0] ? 'border-b-4 border-green-500 text-green-500' : 'hover:border-b-4 hover:border-green-500'}`} onClick={() => { setActiveTab(status[0]) }}>Entrada</li>
                        <li className={`transition dark:text-slate-300 cursor-pointer py-4 px-8 text-gray-700 ${ActiveTab === status[1] ? 'border-b-4 border-red-500 text-red-500' : 'hover:border-b-4 hover:border-red-500'}`} onClick={() => { setActiveTab(status[1]) }}>Em falta</li>
                        <li className={`transition dark:text-slate-300 cursor-pointer py-4 px-8 text-gray-700 ${ActiveTab === status[2] ? 'border-b-4 border-green-500 text-green-500' : 'hover:border-b-4 hover:border-green-500'}`} onClick={() => { setActiveTab(status[2]) }}>Terminado</li>
                        <li className={`transition dark:text-slate-300 cursor-pointer py-4 px-8 text-gray-700 ${ActiveTab === status[3] ? 'border-b-4 border-orange-500 text-orange-500' : 'hover:border-b-4 hover:border-orange-500'}`} onClick={() => { setActiveTab(status[3]) }}>Em férias</li>
                    </ul>
                    <br />

                    <div className={`w-full h-1 ${ActiveTab === status[0] && 'bg-green-500' || ActiveTab === status[1] && 'bg-red-500' || ActiveTab === status[2] && 'bg-green-500' || ActiveTab === status[3] && 'bg-orange-500'} dark:bg-gray-200 absolute top-0 left-0`}></div>
                    {displayFuncionarios()}
                </div>
            </div>
        </div>
    )
}
