import { TaskTable } from "@/components/tasks-table";
import { fetchTasks } from "@/data/tasks";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tasks/")({
  loader: () => fetchTasks({ limit: 10 }),
  component: TasksComponent,
});

function TasksComponent() {
  const tasks = Route.useLoaderData();

  return (
    <div className="rounded-md border">
      <TaskTable tasks={tasks} />
    </div>
  );
}
