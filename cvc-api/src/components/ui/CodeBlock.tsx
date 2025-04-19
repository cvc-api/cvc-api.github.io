"use client"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { LuCopy } from "react-icons/lu"
import { toast } from "sonner"
function CodeBlock() {
    const copied = () => {
        navigator.clipboard.writeText("pip install CaliforniaVirtualCampusAPI")
        toast("Copied to clipboard.")
      }
    return(
        <div className="space-x-2">
            <code className="bg-gray-300 px-1 py-0.5 text-xs sm:text-base rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              pip install CaliforniaVirtualCampusAPI
            </code>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger><LuCopy className="inline align-middle hover:text-gray-500 text-gray-300 cursor-pointer" onClick={copied}/></TooltipTrigger>
                <TooltipContent>
                  <p>Copy to Clipboard</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
        </div>
    )
}
export {CodeBlock}