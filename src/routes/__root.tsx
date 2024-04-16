import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { routeTree } from "@/routeTree.gen";
import {
  createRootRoute,
  Link,
  Outlet,
  RoutePaths,
  ScrollRestoration,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ScreenSize } from "../components/screen-size";

export type AppPaths = RoutePaths<typeof routeTree>;

export const Route = createRootRoute({
  component: () => (
    <>
      <ScrollRestoration />
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
