export const Resume = ({ funcionario }) => {
    return (
        <div className="p-4">
            <div className="py-4">
                <h5 className="text-[18px] text-primary">Sobre</h5>
                <span className="text-[15px] text-[#2c384e] italic py-4">Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Quaerat ullam, odio vitae sequi, soluta laudantium mollitia qui
                    accusantium deleniti magnam reprehenderit illo voluptate perspiciatis possimus esse
                    nesciunt, tempora totam illum.</span>
            </div>

            <div className="py-4">
                <h5 className="text-[18px] text-primary">Dados Pessoais</h5>
                <div className="flex gap-20 py-4"><span className="text-[16px] text-[#2c384e] w-1/2">Nome Completo</span><div className="flex w-full"><span className="text-gray-600">{funcionario.nome}</span></div></div>
                <div className="flex gap-20 py-4"><span className="text-[16px] text-[#2c384e] w-1/2">Nacionalidade</span><div className="flex w-full"><span className="text-gray-600">Angolana</span></div></div>
                <div className="flex gap-20 py-4"><span className="text-[16px] text-[#2c384e] w-1/2">Nascimento</span><div className="flex w-full"><span className="text-gray-600">12/12/2023</span></div></div>
            </div>
            <div className="py-4">
                <h5 className="text-[18px] text-primary">Dados Profissionais</h5>
                <div className="flex gap-20 py-4"><span className="text-[16px] text-[#2c384e] w-1/2">Cargo</span><div className="flex  w-full"><span className="text-gray-600">{funcionario.cargo}</span></div></div>
                <div className="flex gap-20 py-4"><span className="text-[16px] text-[#2c384e] w-1/2">Data de entrada</span><div className="flex  w-full"><span className="text-gray-600">{funcionario.data_entrada}</span></div></div>
                <div className="flex gap-20 py-4"><span className="text-[16px] text-[#2c384e] w-1/2">Departamento</span><div className="flex  w-full"><span className="text-gray-600">{funcionario.departamento.nome}</span></div></div>
            </div>
            <div className="py-4">
                <h5 className="text-[18px] text-primary">Seus Contactos</h5>
                <div className="flex gap-20 py-4"><span className="text-[16px] text-[#2c384e] w-1/2">Telefone</span><div className="flex  w-full"><span className="text-gray-600">{funcionario.telefone}</span></div></div>
                <div className="flex gap-20 py-4"><span className="text-[16px] text-[#2c384e] w-1/2">Email</span><div className="flex  w-full"><span className="text-gray-600">{funcionario.email}</span></div></div>
                <div className="flex gap-20 py-4"><span className="text-[16px] text-[#2c384e] w-1/2">LinkedIn</span><div className="flex  w-full"><span className="text-gray-600">{funcionario.cargo}</span></div></div>
            </div>
        </div>

    )
}
