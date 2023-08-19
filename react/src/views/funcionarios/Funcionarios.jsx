import { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import axiosClient from "../../axios-client";
import { Link } from "react-router-dom";




export default function Funcionarios() {

    const [funcionarios, setFuncionario] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const [total, setTotal] = useState(0);



    useEffect(() => {
        getFuncionarios();
    }, []);

    const onDelete = (funcionar) => {

        if (!window.confirm('Are you sure want to delete ' + funcionar.nome + '?')) {
            return
        }

        axiosClient.delete(`/funcionarios/${funcionar.id}`)
            .then((data) => {
                console.log(data);
                getFuncionarios();
            })
            .catch((err) => {
                console.log(err);
            });

    }

    const getFuncionarios = () => {
        setLoading(true)

        axiosClient.get('/funcionarios')
            .then(({ data }) => {
                console.log(data);
                setFuncionario(data.data)
                setTotal(data.meta.total)
                setLoading(false)
            }).catch(data => {
                const err = data.response;
                console.log(data);
                if (err && err.status === 404) {
                    console.log(404);
                    setErrors('Não foi possível carregar os funcionários!')
                }
                if (data.code === "ERR_NETWORK") {
                    console.log('NETWORK ERROR');
                    setErrors('Falha na conexão com o servidor - verifique a internet!')
                }
                setLoading(false)
            })
    }






    return (

        <div className="py-4 px-8">
            <div className="flex justify-between items-center">

                <h1 className="text-gray-500 text-[30px] font-light py-4 dark:text-white">Listagem dos Funcionários <span className="text-gray-400 text-base"> ({total})</span></h1>
                <div className="py-4">
                    <Link to="/funcionario/novo" className="text-white bg-violet-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Novo +</Link>
                </div>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 bg-gray-200 uppercase  dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nº
                            </th>
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

                    {
                        Loading && <tbody>
                            <tr>
                                <td colSpan="6" className="text-center py-4 text-base italic">
                                    processando...
                                </td>
                            </tr>

                        </tbody>
                    }
                    {
                        errors && <tbody>
                            <tr>
                                <td colSpan="6" className="text-center py-4 text-base italic">
                                    {errors}
                                </td>
                            </tr>

                        </tbody>
                    }
                    {!Loading && <tbody>
                        {funcionarios.map(funcionar => (
                            <tr key={funcionar.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4 hover:underline cursor-pointer">
                                    {funcionar.id}
                                </td>
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
                                    matheus@empresa.com
                                </td>
                                <td className="px-6 py-4 flex gap-2">
                                    <Link className="font-medium text-white p-2  bg-blue-600 dark:text-white hover:underline"><span>ver</span></Link>
                                    <button onClick={ev => onDelete(funcionar)} className="font-medium text-white p-2  bg-red-600 dark:text-white hover:underline"><span>delete</span></button>
                                </td>
                            </tr>

                        ))}
                    </tbody>}
                </table>
            </div>
        </div>

    )
}
