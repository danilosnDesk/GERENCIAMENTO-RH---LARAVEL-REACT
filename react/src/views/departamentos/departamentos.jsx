import { Link } from "react-router-dom";
import ErrorComponent from "../../components/ErrorComponent.jsx";
import Deparatamento from "../../components/departamento/Departamento.jsx";
import { useEffect, useState } from "react";
import axiosClient from "../../axios-client.js";
import { Ban } from "lucide-react";

export default function departamantos() {
    const [departamentos, setDepartamentos] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [Erros, setErros] = useState(null);

    const getDepartamentos = () => {
        setLoading(true)
        axiosClient.get('/departmentos')
            .then(({ data }) => {
                console.log(data);
                setDepartamentos(data.data);
                setLoading(false)
            }).catch(Erroor => {
                const response = Erroor.response;
                if (response && response.status === 500) {
                    setErros("Falha no servidor, tente recarregar a página")
                }
                if (response && response.status === 422) {
                    setErros(response.data.errors)
                }
                if (Erroor.code === "ERR_NETWORK") {
                    console.log('NETWORK ERROR');
                    setErros('Falha na conexão com o servidor - verifique a internet!')
                }
                setLoading(false)

            }).finally(() => {
                setLoading(false)
            });
    }
    useEffect(() => {
        getDepartamentos()
    }, []);

    console.log(Erros)

    return (
        <div className="py-4 px-8">
            <div className="flex justify-between items-center">

                <h1 className="text-gray-500 text-[30px] font-light py-4 dark:text-white">Departamentos <span className="text-gray-400 text-base"> ({0})</span></h1>
                <div className="py-4">
                    <Link to="/departamentos/novo" className="text-white bg-violet-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Novo +</Link>
                </div>
            </div>

            <div className="w-full flex gap-2 flex-row flex-wrap justify-start relative">
                {Loading && <span className='text-slate-400'>Carregando departamentos....</span>}
                {Erros && <ErrorComponent errors={Erros} />}
                {departamentos.map(departamen => (
                    <Deparatamento ID={departamen.id} Nome={departamen.nome} responsavel={departamen.chefia[0]} />
                ))}
            </div>
        </div>
    )
}
