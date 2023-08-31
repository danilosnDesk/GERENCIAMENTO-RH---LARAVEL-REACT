import { TEInput } from "tw-elements-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../axios-client";
import ErrorComponent from "../../components/ErrorComponent";


export default function FormDepartamento() {
    const [Loading, setLoading] = useState(false);
    const [getingDep, setGetingDep] = useState(false);
    const [Erros, setErros] = useState(null);
    const [Erro, setErro] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();
    const [departamento, setDepartamento] = useState(
        {
            id: null,
            name: ''
        }
    );
    console.log(id);

    if (id) {
        useEffect(() => {
            setGetingDep(true)
            axiosClient.get(`/departmentos/${id}`)
                .then(({ data }) => {
                    setDepartamento(
                        {
                            id: data.data.id,
                            name: data.data.nome
                        }
                    )
                    console.log(departamento);
                    setGetingDep(false)

                })
                .catch(log => {
                    console.log(log);
                    setGetingDep(false)

                }).finally(() => {
                    setGetingDep(false)
                })
        }, [])
    }

    const onSubimt = (ev) => {
        ev.preventDefault();
        setLoading(true)
        if (departamento.id) {
            axiosClient.put(`/departmentos/${departamento.id}`, departamento)
                .then((data) => {
                    alert('Updated')
                    navigate('/departamentos')
                    console.log(data);
                    setLoading(false);
                })
                .catch(data => {
                    const response = data.response;
                    console.log(data);

                    if (response && response.status === 500) {
                        setErro("Falha no servidor, tente recarregar a página")
                    }
                    if (response && response.status === 404) {
                        setErro("Falha no destino 404")
                    }
                    if (response && response.status === 422) {
                        setErros(response.data.errors)
                    }
                    if (data.code === "ERR_NETWORK") {
                        console.log('NETWORK ERROR');
                        setErro('Falha na conexão com o servidor - verifique a internet!')
                    }

                    setLoading(false);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            axiosClient.post(`/departmentos`, departamento)
                .then((data) => {
                    alert('Created')
                    navigate('/departamentos')
                    console.log(data);
                    setLoading(false);
                })
                .catch(data => {
                    const response = data.response;
                    console.log(data);

                    if (response && response.status === 500) {
                        setErro("Falha no servidor, tente recarregar a página")
                    }
                    if (response && response.status === 404) {
                        setErro("Falha no destino 404")
                    }
                    if (response && response.status === 422) {
                        setErros(response.data.errors)
                    }
                    if (data.code === "ERR_NETWORK") {
                        console.log('NETWORK ERROR');
                        setErro('Falha na conexão com o servidor - verifique a internet!')
                    }

                    setLoading(false);
                })
                .finally(() => {
                    setLoading(false);
                });
        }

    }

    return (
        <div className="py-4 px-8">


            <h1 className="text-gray-500 text-[30px] font-light py-4 dark:text-white capitalize">
                {departamento.id ?
                    'Atualizar Departamento'
                    :
                    'Novo Departamento'

                }  </h1>

            {Erros &&
                Object.keys(Erros).map(erro => (
                    <ErrorComponent errors={Erros[erro][0]} />
                ))
            }

            {Erro && <ErrorComponent errors={Erro} />}

            {getingDep && <span className='text-slate-400'>Carregando departamentos informações....</span>}

            {!getingDep &&
                <form className="flex flex-col gap-7">

                    <div className="flex gap-1 items-center">
                        <div className="w-1/2">
                            <TEInput
                                type="text"
                                id="exampleFormControlInput1"
                                label="Nome"
                                required
                                value={departamento.name}
                                onChange={ev => setDepartamento({ ...departamento, name: ev.target.value })}
                            ></TEInput>
                        </div>
                    </div>

                    <div className="py-8">
                        <button onClick={onSubimt} className="rounded shadow text-white bg-violet-700 py-2 px-4 w-[170px]">
                            {Loading ? 'carregendo...' : departamento.id ? 'Salvar' : 'Cadastrar'}
                        </button>
                    </div>
                </form >

            }
        </div >
    )
}
