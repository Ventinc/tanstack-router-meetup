import { cn } from "@/lib/utils";
import { AppPaths } from "@/routes/__root";
import { Link, useMatches } from "@tanstack/react-router";
import { LucideIcon } from "lucide-react";
import React from "react";

interface TreeDataItem {
  name: string;
  routeId?: string;
  link?: Omit<React.ComponentPropsWithoutRef<typeof Link>, "children">;
  icon?: LucideIcon;
  highlight?: boolean;
  children?: TreeDataItem[];
}

export const Tree = ({
  data,
  className,
  itemDisplay,
}: {
  data: TreeDataItem[];
  className?: string;
  itemDisplay?: (to: AppPaths) => string;
}) => {
  const matches = useMatches({
    select: (matches) => matches.map((match) => match.routeId),
  });

  return (
    <div className={cn("flex flex-col gap-0.5", className)}>
      {data.map((item) => (
        <React.Fragment key={`${item.link?.to}-${item.name}`}>
          <Link
            {...item.link}
            className={cn(
              "group flex items-center gap-2 rounded-md px-2 py-0.5 font-medium hover:bg-accent",
              {
                "bg-neutral-200": matches.includes(
                  item.routeId ?? item.link?.to,
                ),
                "ring-1 ring-violet-500": item.highlight,
              },
            )}
          >
            {item.icon ? <item.icon className="size-4" /> : null}
            {item.name}
            {item.link?.to ? (
              <div className="flex flex-1 justify-end">
                <div className="text-xs text-neutral-500">
                  {itemDisplay?.(item.link?.to) ?? item.link?.to}
                </div>
              </div>
            ) : null}
          </Link>
          {item.children ? (
            <Tree
              data={item.children}
              itemDisplay={itemDisplay}
              className="ml-5"
            />
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
};
