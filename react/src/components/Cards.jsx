import { Blocks, Building2, Users2 } from "lucide-react";
import { useEffect, useState } from "react";
import axiosClient from "../axios-client";

export default function Cards() {

    const [funcionario, setFuncionarios] = useState([]);
    const [departamanto, setDepartamantos] = useState([]);
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axiosClient
            .get('/departamanto_funcionarios')
            .then(({ data }) => {
                setLoading(false)
                setFuncionarios(data.det_total_func)
                setDepartamantos(data.det_names)
            })
            .catch(err => {
                setLoading(false)
                console.log(err);
            })
            .finally = () => {
                setLoading(false)
            }
    }, []);
    return (
        <div className="flex flex-row w-full justify-between py-5 ">

            <div className="flex flex-col w-1/4 h-28 bg-emerald-500 dark:bg-slate-600 text-white p-4 mx-2 shadow-xl">
                <Building2 className="flex-shrink-0 w-5 h-5 text-white dark:text-white transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" />
                <h5 className="text-xs uppercase py-1">Salário Total</h5>
                <h1 className="text-lg font-bold">AOA 7.245.470 kzs</h1>
            </div>

            <div className="flex flex-col w-1/4 h-28 bg-emerald-400 dark:bg-slate-600 text-white p-4 mx-2 shadow-xl">
                <Blocks className="flex-shrink-0 w-5 h-5 text-white dark:text-white transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" />
                <h5 className="text-xs uppercase py-1">Departamnetos</h5>
                <h1 className="text-lg font-bold">5</h1>
            </div>

            <div className="flex flex-col w-1/4 h-28 bg-emerald-300 dark:bg-slate-600 text-white p-4 mx-2 shadow-xl">
                <Users2 className="flex-shrink-0 w-5 h-5 text-white dark:text-white transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" />
                <h5 className="text-xs uppercase py-1">Funcionários</h5>
                <h1 className="text-lg font-bold">1245</h1>
            </div>


        </div>
    )
}
