import { useEffect, useState } from 'react';
import axiosClient from '../../axios-client.js';
import { CChart } from "@coreui/react-chartjs";
import ErrorComponent from "../ErrorComponent.jsx";

export default function Chart() {

    const [funcionario, setFuncionario] = useState([]);
    const [departamanto, setDepartamanto] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [Erros, setErros] = useState(null);


    const data = {
        labels: departamanto,
        datasets: [{
            label: 'My First Dataset',
            data: funcionario,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'pie',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Estatísticas do DRH'
                },

            }
        }
    };

    useEffect(() => {
        setLoading(true)
        axiosClient
            .get('/departamanto_funcionarios')
            .then(({ data }) => {
                setLoading(false)
                setFuncionario(data.det_total_func)
                setDepartamanto(data.det_names)
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
                console.log(err);
            })
            .finally = () => {
                setLoading(false)
            };
    }, []);
    return (
        <div className='w-[300px] shadow-sm py-5 bg-slate-0'>

            {Loading &&
                <div className='flex items-center gap-4'>
                    <span className='text-slate-400'>Carregando estatísticas....</span>
                </div>}
            {Erros && <ErrorComponent errors={Erros}/>}
            {!Loading && !Erros &&
                <CChart
                    {...config}
                />}

        </div>
    )
}
