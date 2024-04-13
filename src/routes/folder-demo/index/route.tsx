import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/folder-demo/")({
  component: () => <div>Hello /folder-demo/!</div>,
});
