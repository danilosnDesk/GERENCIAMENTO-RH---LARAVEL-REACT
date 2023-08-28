import { Ban } from "lucide-react";
export default function ErrorComponent({errors}) {
    return (
        <div>
            <div className="py-4">
                <p className="bg-red-500 py-2 my-2 px-1 flex items-center gap-2 rounded text-slate-50">
                    <Ban className="w-[16px]" />
                    <span>{errors}</span>
                </p>
            </div>
        </div>
    );
}
