import { useState } from "react";
import { Link } from "react-router-dom";


export default function FuncionariosTable({ data }) {
    const onDelete = (funcionar) => {

        if (!window.confirm('Are you sure want to delete ' + funcionar.nome + '?')) {
            return
        }

        axiosClient.delete(`/funcionarios/${funcionar.id}`)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });

    }

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
                            Salário
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Departamento
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                        </th>
                    </tr>
                </thead>
                {data.length < 1 ?
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
                            {data.map(funcionar => (
                                <tr key={funcionar.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4 hover:underline cursor-pointer">
                                        {funcionar.nome}
                                    </td>
                                    <td className="px-6 py-4">
                                        {funcionar.cargo}

                                    </td>
                                    <td className="px-6 py-4">
                                        {funcionar.salario} kzs
                                    </td>
                                    <td className="px-6 py-4">
                                        {funcionar.departamento.nome}

                                    </td>
                                    <td className="px-6 py-4">
                                        {funcionar.email}

                                    </td>
                                    <td className="px-6 py-4 flex gap-2">
                                        <Link to={`/funcionario/${funcionar.id}`} className="font-medium text-white p-2  bg-blue-600 dark:text-white hover:underline"><span>ver</span></Link>
                                        <button onClick={ev => onDelete(funcionar)} className="font-medium text-white p-2  bg-red-600 dark:text-white hover:underline"><span>delete</span></button>
                                    </td>
                                </tr>

                            ))}
                        </tbody>

                    )

                }
            </table>
        </div>
    )
}
