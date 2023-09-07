import { useState } from "react";
import { Link } from "react-router-dom";


export default function TabelaPontos({ data, rule }) {

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 bg-gray-200 uppercase  dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Nome
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Cargo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Entrada
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Saída
                        </th>
                    </tr>
                </thead>

                {data && data.length < 1 ?
                    (
                        <tbody>
                            <tr>
                                <td colSpan="6" className="text-center py-4 text-base italic">
                                    Nenhum funcionário neste departamento
                                </td>
                            </tr>
                        </tbody>
                    )
                    :
                    (
                        <tbody>
                            {
                                data.map(ponto => (
                                    <tr key={ponto.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                                        <td className="px-4 py-4 hover:underline cursor-pointer">
                                            {ponto.funcionario.nome}
                                        </td>
                                        <td className="px-4 py-4">
                                            {ponto.funcionario.cargo}
                                        </td>
                                        <td className="px-4 py-4">
                                            <button className="font-medium text-white p-2  bg-green-600 dark:text-white ">
                                                {ponto.entrada}
                                            </button>
                                        </td>
                                        <td className="px-4 py-4">
                                            {ponto.saida ?
                                                (<button className="font-medium text-white p-2  bg-orange-600 dark:text-white ">
                                                    {ponto.saida}
                                                </button>) :
                                                (<button className="font-medium text-white p-2  bg-orange-600 dark:text-white ">
                                                    Trabalhando...
                                                </button>)
                                            }
                                        </td>

                                    </tr>
                                ))
                            }


                        </tbody>
                    )
                }

            </table>
        </div >
    )
}
