import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/todo-demo")({
  component: () => <div>Hello /todo-demo!</div>,
});
