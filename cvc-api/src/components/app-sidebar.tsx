import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "/docs",
      items: [
        {
          title: "Installation",
          url: "/docs",
        },
      ],
    },
    {
      title: "Classes",
      url: "#",
      items: [
        {
          title: "course",
          url: "/docs/classes/course",
        },
        {
          title: "courseSection",
          url: "/docs/classes/courseSection",
          isActive: true,
        },
      ],
    },
    {
      title: "Methods",
      url: "#",
      items: [
        {
          title: "getCourseContentByID",
          url: "/docs/methods/getCourseContentByID",
        },
        {
          title: "getCourseIDsBySearch",
          url: "/docs/methods/getCourseIDsBySearch",
        },
        {
          title: "getCourseContentByScraping",
          url: "/docs/methods/getCourseContentByScraping",
        },
        {
          title: "getCourseIDsByScraping",
          url: "/docs/methods/getCourseIDsByScraping",
        },
      ],
    },
    // {
    //   title: "Community",
    //   url: "#",
    //   items: [
    //     {
    //       title: "Contribution Guide",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/docs">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold text-xs text-gray-600">California Virtual Campus API</span>
                  <span className="font-semibold">Documentation</span>
                  <span className="">v0.0.2</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
