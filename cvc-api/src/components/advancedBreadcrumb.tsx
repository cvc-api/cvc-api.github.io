"use client";

import { usePathname } from "next/navigation";

export default function AdvancedBreadcrumb() {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter(Boolean)
    .map((segment, i, arr) => ({
      name: segment.charAt(0).toUpperCase() + segment.slice(1),
      href: "/" + arr.slice(0, i + 1).join("/"),
    }));

  return (
    <nav className="flex items-center justify-between ">
      <div className="flex items-center space-x-0 text-sm text-muted-foreground">
        {segments.map((seg, i) => (
          <div key={seg.href} className="flex items-center">
            <a href={seg.href} className="hover:underline">
              {seg.name} 
            </a>
            {i < segments.length - 1 && <span className="mx-1">{">"}</span>}
          </div>
        ))}
      </div>

      <div />
    </nav>
  );
}
