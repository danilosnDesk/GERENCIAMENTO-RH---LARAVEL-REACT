import { Blocks, Building2, Users2 } from "lucide-react";

export default function Cards() {
    return (
        <div className="flex flex-row w-full justify-between py-5 ">

            <div className="flex flex-col w-1/4 h-28 bg-emerald-500 text-white p-4 mx-2 shadow-xl">
                <Building2 className="flex-shrink-0 w-5 h-5 text-white dark:text-white transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" />
                <h5 className="text-xs uppercase py-1">Fornecedores</h5>
                <h1 className="text-lg font-bold">1245</h1>
            </div>

            <div className="flex flex-col w-1/4 h-28 bg-emerald-400 text-white p-4 mx-2 shadow-xl">
                <Blocks className="flex-shrink-0 w-5 h-5 text-white dark:text-white transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" />
                <h5 className="text-xs uppercase py-1">Productos</h5>
                <h1 className="text-lg font-bold">1245</h1>
            </div>

            <div className="flex flex-col w-1/4 h-28 bg-emerald-300 text-white p-4 mx-2 shadow-xl">
                <Users2 className="flex-shrink-0 w-5 h-5 text-white dark:text-white transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" />
                <h5 className="text-xs uppercase py-1">Funcionários</h5>
                <h1 className="text-lg font-bold">1245</h1>
            </div>


        </div>
    )
}
