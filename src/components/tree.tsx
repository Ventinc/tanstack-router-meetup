import { cn } from "@/lib/utils";
import { AppPaths } from "@/routes/__root";
import { Link } from "@tanstack/react-router";
import { LucideIcon } from "lucide-react";
import React from "react";

interface TreeDataItem {
  name: string;
  to?: AppPaths;
  exact?: boolean;
  icon?: LucideIcon;
  highlight?: boolean;
  children?: TreeDataItem[];
}

export const Tree = ({
  data,
  className,
  linkDisplay,
}: {
  data: TreeDataItem[];
  className?: string;
  linkDisplay?: (to: AppPaths) => string;
}) => {
  return (
    <div className={cn("flex flex-col gap-0.5", className)}>
      {data.map((link) => (
        <React.Fragment key={`${link.to}-${link.name}`}>
          <Link
            to={link.to}
            activeOptions={{
              exact: link.exact,
            }}
            className={cn(
              "group flex items-center gap-2 rounded-md px-2 py-0.5 font-medium hover:bg-accent",
              {
                "[&.active]:bg-neutral-200": Boolean(link.to),
                "ring-1 ring-violet-500": link.highlight,
              },
            )}
          >
            {link.icon ? <link.icon className="size-4" /> : null}
            {link.name}
            {link.to ? (
              <div className="flex flex-1 justify-end">
                <div className="text-xs text-neutral-500">
                  {linkDisplay?.(link.to) ?? link.to}
                </div>
              </div>
            ) : null}
          </Link>
          {link.children ? (
            <Tree
              data={link.children}
              linkDisplay={linkDisplay}
              className="ml-5"
            />
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
};
