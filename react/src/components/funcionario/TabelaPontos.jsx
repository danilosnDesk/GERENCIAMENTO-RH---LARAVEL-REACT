import { useState } from "react";
import { Link } from "react-router-dom";


export default function TabelaPontos() {

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

                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                        <td className="px-4 py-4 hover:underline cursor-pointer">
                            Danilson Kayumbuca
                        </td>
                        <td className="px-4 py-4">
                            Engenheiro de IT
                        </td>
                        <td className="px-4 py-4">
                            <button className="font-medium text-white p-2  bg-green-600 dark:text-white ">
                                12:45
                            </button>
                        </td>
                        <td className="px-4 py-4">
                            <button className="font-medium text-white p-2  bg-orange-600 dark:text-white ">
                                Trabalhando...
                            </button>
                        </td>

                    </tr>

                </tbody>

            </table>
        </div >
    )
}
