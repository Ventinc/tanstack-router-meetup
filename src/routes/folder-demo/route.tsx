import { Button } from "@/components/ui/button";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/folder-demo")({
  component: () => (
    <div className="p-4">
      <div className="ml-4 w-fit rounded-t-sm bg-black px-2.5 py-1 text-xs font-semibold text-white">
        Folder Demo Layout
      </div>
      <div className="rounded-lg border p-8">
        <Outlet />
      </div>
      <Button className="mt-2" asChild variant="ghost">
        <Link to="/">Go back home</Link>
      </Button>
    </div>
  ),
});
