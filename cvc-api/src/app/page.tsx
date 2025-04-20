"use client"
import { LuGithub  } from "react-icons/lu";
// LuFileSearch
// import Env from "@/lib/env";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { WrittenComponent } from "@/components/ui/WrittenComponent";
import { RainbowButton } from "@/components/ui/rainbow-button";
// import { Spotlight, GridBackground } from "@/components/spotlight-new";
export default function Home() {
  return (
    // <div className=" w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
    //         {/* <GridBackground /> */}
    //         {/* <Spotlight /> */}
    <div className="font-[family-name:var(--font-geist-sans)] ml-0.5 mr-0.5">
      <main className="flex flex-col justify-center items-center text-center min-h-screen ">
        {/* <span className="sm:mb-2 md:mb-10 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500"><strong className="text-md md:text-4xl ">California Virtual Campus API</strong></span> */}
        <span>
          {/* <strong className="md:text-6xl text-xl "> */}
          <WrittenComponent />
          {/* </strong> */}
          </span>
        <div className="mb-2 tracking-[-.01em] space-x-2">
            {/* <div className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500">
            Get started with:
            </div> */}
            <CodeBlock />
        </div>



        <div className="flex mt-2 md:mt-8 gap-4 items-center flex-col sm:flex-row">
          <a
          // className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          className="flex items-center justify-center inline-block gap-2 text-sm font-medium sm:text-base"
          href={"/docs"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <RainbowButton className="rounded-full inline-block h-12">
                {/* <LuFileSearch className="w-6 h-6"/> */}
                Explore the Docs
            </RainbowButton>
            </a>

          {/* <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href={Env.APP_URL + "/docs"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuFileSearch className="w-6 h-6"/>
            Explore the Docs
          </a> */}
          <a
            className="rounded-full bg-white border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://github.com/rob-m1/california-virtual-campus-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuGithub className="w-6 h-6 " />
            GitHub
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div></div>
      </footer>
      {/* <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">

      </div> */}
    </div>
    // {/* </div> */}
  );
}
