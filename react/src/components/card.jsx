import { Building2 } from "lucide-react";

export default function Card({ tittle, data, icon }) {
    return (
        <div className="flex flex-col w-1/4 h-28 bg-emerald-500 dark:bg-slate-600 text-white p-4 mx-2 shadow-xl">
            <Building2 className="flex-shrink-0 w-5 h-5 text-white dark:text-white transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" />
            <h5 className="text-xs uppercase py-1">{tittle}</h5>
            <h1 className="text-lg font-bold">{data}</h1>
        </div>
    )
}
