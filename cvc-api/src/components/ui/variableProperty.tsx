import { Badge } from "@/components/ui/badge"
import { Separator } from "./separator"


export default function VariableProperty({name,type,description}:{name:string,type:string,description:string}) {
    return (
        <div className="text-white space-y-2 w-full">
            <div className="space-x-4 ">
                <Badge variant="secondary">{name}</Badge>
                <span className="text-gray-500 font-[family-name:var(--font-geist-mono)] font-semibold text-sm">{type}</span>
            </div>
            <span className="text-gray-400">{description}</span>
            <Separator className="mt-2 mb-10 bg-gray-800"></Separator>
        </div>
    )
}