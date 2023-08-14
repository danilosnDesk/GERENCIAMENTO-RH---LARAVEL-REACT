import { Building2 } from "lucide-react";
import Cards from "../components/Cards";



export default function Users() {
    return (
        <div className="py-4 px-8">

            <Cards />

            <h1 className="text-gray-500 text-[30px] font-light py-4 dark:text-white">Listagem dos fornecedores</h1>

            <div className="py-4">
                <button type="button" class="text-white bg-violet-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Novo +</button>
            </div>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">


                        <th scope="col" className="px-6 py-3">
                            Empresa
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Data
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Serviço
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Telefone
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                        </th>

                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                            <td className="px-6 py-4">
                                Matheus Solutions S.A
                            </td>
                            <td className="px-6 py-4">
                                24 de Fevereiro 2019
                            </td>
                            <td className="px-6 py-4">
                                Fornecedor de carga
                            </td>
                            <td className="px-6 py-4">
                                geral@msolutions.com
                            </td>
                            <td className="px-6 py-4">
                                +244 921 325 888
                            </td>
                            <td className="px-6 py-4 flex gap-2">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">delete</a>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
}
