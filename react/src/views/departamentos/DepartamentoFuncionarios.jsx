import { Link } from "react-router-dom";
import FuncionariosTable from "../../components/FuncionariosTable";

export default function DepartamentoFuncionarios() {
    return (
        <div className="py-4 px-8">
            <div className="flex justify-between items-center">

                <h1 className="text-gray-500 text-[30px] font-light py-4 dark:text-white">Departamentos dos Recursos humanos <span className="text-gray-400 text-base"> (0)</span></h1>
                <div className="py-4">
                    <Link to="/funcionario/novo" className="text-white bg-violet-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Novo +</Link>
                </div>
            </div>
            <FuncionariosTable />
        </div>
    )
}
