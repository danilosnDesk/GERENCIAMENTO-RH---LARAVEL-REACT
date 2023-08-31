import { Ban } from 'lucide-react'
import React from 'react'

export default function SuccessComponent({ mensagem }) {
    return (
        <div className="py-7">
            <p className="bg-green-500 py-2 my-2 px-1 flex items-center gap-2 rounded text-slate-50" >
                <Ban className="w-[16px]" />
                <span>
                    {mensagem}
                </span>
            </p>
        </div>)
}
