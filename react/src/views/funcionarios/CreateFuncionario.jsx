import { TEInput } from "tw-elements-react";
import axiosClient from "../../axios-client";
import { useEffect, useRef, useState } from "react";
import { Ban } from "lucide-react";


export default function CreateFuncionario() {

    const [departamentos, setDepartamentos] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [Erros, setErros] = useState(null);
    const [NetworkError, setNetworkError] = useState(null);

    const nomeREF = useRef();
    const salarioREF = useRef();
    const departamentoREF = useRef();
    const emailREF = useRef();
    const telefoneREF = useRef();
    const cargoREF = useRef();
    const entradaREF = useRef();


    const NovoFuncionario = (ev) => {
        ev.preventDefault();
        setLoading(true);

        const payload = {
            nome: nomeREF.current.value,
            salario: salarioREF.current.value,
            id_departamento: departamentoREF.current.value,
            email: emailREF.current.value,
            telefone: telefoneREF.current.value,
            cargo: cargoREF.current.value,
            data_entrada: entradaREF.current.value,
        };

        //console.log(payload);

        axiosClient.post('/funcionarios', payload)
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

    useEffect(() => {
        axiosClient.get('/departmentos')
            .then(({ data }) => {
                console.log(data);
                setDepartamentos(data.data);
            }).catch(Erroor => {
                const err = Erroor.response;



                console.log(err);
            });

    }, []);





    return (
        <div className="py-4 px-8">
            <h1 className="text-gray-500 text-[30px] font-light py-4 dark:text-white capitalize">Novo funcionário </h1>

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
                            label="Nome Completo"
                            ref={nomeREF}
                            required
                        ></TEInput>
                    </div>
                    <div className="w-1/2">
                        <TEInput
                            type="text"
                            id="exampleFormControlInput1"
                            label="Cargo na empresa"
                            ref={cargoREF}
                            required
                        ></TEInput>
                    </div>
                </div>

                <div className="flex gap-1 items-center">
                    <div className="w-1/2">
                        <TEInput
                            type="number"
                            id="exampleFormControlInput1"
                            label="Salário"
                            ref={salarioREF}
                            required
                        ></TEInput>
                    </div>
                    <div className="w-1/2">
                        <select
                            ref={departamentoREF}
                            data-te-select-init
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none placeholder:opacity-0 disabled:bg-neutral-100 read-only:bg-neutral-100 dark:disabled:bg-neutral-700 dark:read-only:bg-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary px-3 py-[0.32rem] leading-[1.6]"
                        >
                            <option value={0}>Selecione o departamento</option>
                            {departamentos.map(departamen => (
                                <option value={departamen.id} key={departamen.id}>
                                    {departamen.nome}
                                </option>
                            ))}
                        </select>

                    </div>
                </div>

                <div className="flex gap-1 items-center">
                    <div className="w-1/2">
                        <TEInput
                            type="email"
                            id="exampleFormControlInput1"
                            label="Email do funcionário"
                            ref={emailREF}
                            required
                        ></TEInput>
                    </div>
                    <div className="w-1/2">
                        <TEInput
                            type="number"
                            id="exampleFormControlInput1"
                            label="Telefone do funcionário"
                            ref={telefoneREF}
                            required
                        ></TEInput>
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    <div className="w-1/2">

                        <TEInput
                            type="date"
                            id="exampleFormControlInputHelper"
                            ref={entradaREF}
                            required
                        >
                        </TEInput>
                        <div className="absolute t-0 w-full text-sm text-neutral-500 peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary">
                            Entrada na empresa
                        </div>
                    </div>
                </div>

                <div className="py-8">
                    <button onClick={NovoFuncionario} className="rounded shadow text-white bg-violet-700 py-2 px-4 w-[170px]">
                        {Loading ? 'carregendo...' : 'Cadastrar'}
                    </button>
                </div>
            </form >

        </div >
    )
}
