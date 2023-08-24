import { TEInput } from "tw-elements-react";
import { useEffect, useRef, useState } from "react";
import { Ban } from "lucide-react";
import axiosClient from "../../axios-client";


export default function FormDepartamento() {
    const [Loading, setLoading] = useState(false);
    const [Erros, setErros] = useState(null);
    const [NetworkError, setNetworkError] = useState(null);

    const nomeREF = useRef();
    const acronimoREF = useRef();

    const NovoDepartamento = (ev) => {
        ev.preventDefault();

        const payload = {
            nome: nomeREF.current.value,
            acronimo: acronimoREF.current.value,
        };
        axiosClient.post('/departamento', payload)
            .then((data) => {
                console.log(data);
                setLoading(false);
            })
            .catch(data => {
                const response = data.response;

                if (response && response.status === 500) {
                    setErros("Falha no servidor, tente recarregar a página")
                }
                if (response && response.status === 422) {
                    setErros(response.data.errors)
                }
                if (data.code === "ERR_NETWORK") {
                    console.log('NETWORK ERROR');
                    setNetworkError('Falha na conexão com o servidor - verifique a internet!')
                }

                setLoading(false);
            })

            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <div className="py-4 px-8">
            <h1 className="text-gray-500 text-[30px] font-light py-4 dark:text-white capitalize">Novo Departamento </h1>

            {Erros &&
                <div className="py-7">
                    {Object.keys(Erros).map(keys => (
                        <p className="bg-red-500 py-2 my-2 px-1 flex items-center gap-2 rounded text-slate-50" >
                            <Ban className="w-[16px]" />
                            <span>
                                {Erros[keys][0]}
                            </span>
                        </p>
                    ))}
                </div>
            }
            {NetworkError &&
                <div className="py-7">
                    <p className="bg-red-500 py-2 my-2 px-1 flex items-center gap-2 rounded text-slate-50" >
                        <Ban className="w-[16px]" />
                        <span>
                            {NetworkError}
                        </span>
                    </p>
                </div>
            }

            <form className="flex flex-col gap-7">

                <div className="flex gap-1 items-center">
                    <div className="w-1/2">
                        <TEInput
                            type="text"
                            id="exampleFormControlInput1"
                            label="Nome"
                            ref={nomeREF}
                            required
                        ></TEInput>
                    </div>
                    <div className="w-1/2">
                        <TEInput
                            type="text"
                            id="exampleFormControlInput1"
                            label="Acrónimo"
                            ref={acronimoREF}
                            required
                        ></TEInput>
                    </div>
                </div>





                <div className="py-8">
                    <button onClick={NovoDepartamento} className="rounded shadow text-white bg-violet-700 py-2 px-4 w-[170px]">
                        {Loading ? 'carregendo...' : 'Cadastrar'}
                    </button>
                </div>
            </form >

        </div >
    )
}
