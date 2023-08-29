import { Link, useParams } from "react-router-dom";
import FuncionariosTable from "../../components/funcionario/FuncionariosTable.jsx";
import axiosClient from "../../axios-client.js";
import { useEffect, useState } from "react";
import ErrorComponent from "../../components/ErrorComponent.jsx";

export default function DepartamentoFuncionarios() {
    const [funcionarios, setFuncionario] = useState([]);
    const [departamento, setDepartamento] = useState(null);
    const [Loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    let { id } = useParams();

    useEffect(() => {
        getFuncionarios();
    }, []);

    const getFuncionarios = () => {
        setLoading(true)
        axiosClient.get(`/departmentos/${id}`)
            .then(({ data }) => {
                console.log(data);
                setFuncionario(data.data.funcionarios)
                setDepartamento(data.data.nome)
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
            {!Loading && !errors &&
                <div className="flex justify-between items-center">
                    <h1 className="text-gray-500 text-[30px] font-light py-4 dark:text-white">{departamento}<span className="text-gray-400 text-base"> (0)</span></h1>
                    <div className="py-4">
                        <Link to="/funcionario/novo" className="text-white bg-violet-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Novo +</Link>
                    </div>
                </div>
            }
            {errors && <ErrorComponent errors={errors} />}
            {Loading && <span className='text-slate-400'>Carregando funcionarios....</span>}
            {!Loading && <FuncionariosTable data={funcionarios} />}
        </div>
    )
}
