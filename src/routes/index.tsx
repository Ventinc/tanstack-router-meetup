import { Button } from "@/components/ui/button";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col gap-4">
        <Button asChild>
          <Link to="/demo">Demo</Link>
        </Button>
        <Button asChild>
          <Link to="/folder-demo">Folder Demo</Link>
        </Button>
        <Button asChild>
          <Link to="/routing-concept">Routing Concept</Link>
        </Button>
      </div>
    </div>
  ),
});
