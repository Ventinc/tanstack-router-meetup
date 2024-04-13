import { TooltipProvider } from "@/components/ui/tooltip";
import {
  createRootRoute,
  Link,
  Outlet,
  RoutePaths,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ScreenSize } from "../components/screen-size";
import { routeTree } from "@/routeTree.gen";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";

export type AppPaths = RoutePaths<typeof routeTree>;

export const Route = createRootRoute({
  component: () => (
    <>
      <TooltipProvider>
        {/* <WrapperRoute> */}
        <Outlet />
        <ScreenSize />
        <TanStackRouterDevtools initialIsOpen={false} position="bottom-right" />
        <Toaster />
        {/* </WrapperRoute> */}
      </TooltipProvider>
    </>
  ),

  notFoundComponent() {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-2">
        <h1 className="text-5xl font-black">404 Not Found</h1>
        <Button asChild>
          <Link to="/">Go back home</Link>
        </Button>
      </div>
    );
  },
});
