import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/demo/settings")({
  component: () => <div>Hello /demo/settings!</div>,
});
