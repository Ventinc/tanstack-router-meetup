import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/routing-concept/_layout/layout-a")({
  component: () => <div>Hello /_layout/layout-a!</div>,
});
