import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TabelaPontos from "../../components/funcionario/TabelaPontos";
import axiosClient from "../../axios-client";
import { User2 } from "lucide-react";


export default function Pontos() {
    const status = ['active', 'off', 'done']
    const [ActiveTab, setActiveTab] = useState(status[0]);
    const [Data, setData] = useState([]);
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axiosClient.get(`/pontos?${ActiveTab}=true`)
            .then(({ data }) => {
                setData(data.data)
                setLoading(false)
            }).catch(err => {
                setLoading(false)
                console.log(err);
            }).finally(() => {
                setLoading(false)
            })
    }, [ActiveTab]);

    console.log(Data);
    return (
        <div className="pt-8 px-8">
            <div className="flex flex-col gap-2">
                <h5 className="text-gray-700 text-[18px]  py-4 dark:text-white">Dados de hoje</h5>
                <div className="flex gap-4">
                    <User2 className="text-green-500 text-[20px] " /><span className="dark:text-slate-300 text-gray-700 text-[14px]">0 Registaram pontos</span>
                </div>
                <div className="flex gap-4">
                    <User2 className="text-red-500 text-[20px]  " /><span className="dark:text-slate-300 text-gray-700 text-[14px]">4 Não Registaram pontos</span>
                </div>
            </div>

            <div className="py-10">
                <div className="relative  bg-white dark:bg-gray-800 shadow-md p-2 mx-4">

                    <ul className="bg-white dark:bg-gray-700 dark:border-slate-700 w-full flex gap-2 border-b-2 border-slate-200 transition-all">
                        <li className={`transition dark:text-slate-300 cursor-pointer py-4 px-8 text-gray-700 ${ActiveTab === status[0] ? 'border-b-4 border-green-500 text-green-500' : 'hover:border-b-4 hover:border-green-500'}`} onClick={() => { setActiveTab(status[0]) }}>Entrada</li>
                        <li className={`transition dark:text-slate-300 cursor-pointer py-4 px-8 text-gray-700 ${ActiveTab === status[1] ? 'border-b-4 border-red-500 text-red-500' : 'hover:border-b-4 hover:border-red-500'}`} onClick={() => { setActiveTab(status[1]) }}>Em falta</li>
                        <li className={`transition dark:text-slate-300 cursor-pointer py-4 px-8 text-gray-700 ${ActiveTab === status[2] ? 'border-b-4 border-green-500 text-green-500' : 'hover:border-b-4 hover:border-green-500'}`} onClick={() => { setActiveTab(status[2]) }}>Terminado</li>
                    </ul>
                    <br />

                    <div className={`w-full h-1 ${ActiveTab === status[0] && 'bg-green-500' || ActiveTab === status[1] && 'bg-red-500' || ActiveTab === status[2] && 'bg-green-500'} dark:bg-gray-200 absolute top-0 left-0`}></div>

                    {Loading ? (
                        'Carregando...'
                    ) : (<TabelaPontos rule={ActiveTab} data={!Loading && Data} />)}
                </div>
            </div>
        </div >
    )
}
