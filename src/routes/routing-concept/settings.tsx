import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { AppPaths } from "@/routes/__root";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/routing-concept/settings")({
  component: SettingsLayout,
});

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    to: AppPaths;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className,
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "hover:bg-transparent hover:underline [&.active]:bg-muted [&.active]:hover:bg-muted",
            "justify-start",
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}

export function SettingsLayout() {
  return (
    <div className="container">
      <div className="hidden space-y-6 px-4 pt-2 md:block">
        <div className="space-y-0.5">
          <h2 className="text-4xl font-black tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set notification preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav
              items={[
                {
                  to: "/routing-concept/settings/profile",
                  title: "Profile",
                },
                {
                  to: "/routing-concept/settings/notification",
                  title: "Notification",
                },
              ]}
            />
          </aside>
          <div className="flex-1 lg:max-w-2xl">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
