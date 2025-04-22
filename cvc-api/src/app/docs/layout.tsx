import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import AdvancedBreadcrumb from "@/components/advancedBreadcrumb"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div >
    <SidebarProvider >
      <AppSidebar className="invert"/>
      
      <main>
      <div className=" mt-4 ml-16 space-x-2 flex">
        <SidebarTrigger className="invert" />
        <AdvancedBreadcrumb></AdvancedBreadcrumb>
      </div>
      <div className="sm:pl-18 sm:pt-8">
        {children}
      </div>
      </main>
    </SidebarProvider>
    </div>
  )
}
