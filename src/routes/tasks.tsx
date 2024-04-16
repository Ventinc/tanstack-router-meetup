import { TaskLayout } from "@/components/layouts/task-layout";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tasks")({
  component: TaskLayoutComponent,
});

export function TaskLayoutComponent() {
  return (
    <TaskLayout>
      <Outlet />
    </TaskLayout>
  );
}
