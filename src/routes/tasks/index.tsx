import { TaskTable } from "@/components/tasks-table";
import {
  fetchTasks,
  priorities,
  prioritiesValues,
  statuses,
  statusesValues,
} from "@/data/tasks";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

import { Input } from "@/components/ui/input";

import { TaskFilter } from "@/components/tasks-filter";
import { TasksPagination } from "@/components/tasks-pagination";
import { Button } from "@/components/ui/button";
import { debounce } from "lodash";
import { XIcon } from "lucide-react";
import { ChangeEvent, useMemo } from "react";
import { z } from "zod";

const tasksSearchParams = z.object({
  q: z.string().optional().catch(""),
  statuses: z.array(z.enum(statusesValues)).optional().catch([]),
  priorities: z.array(z.enum(prioritiesValues)).optional().catch([]),
  limit: z.number().min(10).optional().catch(10),
  page: z.number().min(1).optional().catch(1),
});

export type TaskSearchParams = z.infer<typeof tasksSearchParams>;

export const Route = createFileRoute("/tasks/")({
  validateSearch: tasksSearchParams,
  loaderDeps: ({ search: { q, statuses, priorities, limit, page } }) => ({
    q,
    statuses,
    priorities,
    limit,
    page,
  }),
  loader: ({ deps }) =>
    fetchTasks({
      limit: deps.limit,
      q: deps.q,
      statuses: deps.statuses,
      priorities: deps.priorities,
      page: deps.page,
    }),
  component: TasksComponent,
});

export function TasksToolbar() {
  const params = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const isFiltered = Boolean(
    params.q?.length || params.statuses?.length || params.q?.length,
  );

  const debounceSearch = useMemo(
    () =>
      debounce(
        (event: ChangeEvent<HTMLInputElement>) =>
          navigate({
            search: (prev) => ({ ...prev, q: event.target.value, page: 1 }),
          }),
        400,
      ),
    [navigate],
  );

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          defaultValue={params.q ?? ""}
          onChange={debounceSearch}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        <TaskFilter
          title="Status"
          options={statuses}
          value={params.statuses}
          onChange={(value) =>
            navigate({
              search: (prev) => ({ ...prev, statuses: value, page: 1 }),
            })
          }
        />
        <TaskFilter
          title="Priority"
          options={priorities}
          value={params.priorities}
          onChange={(value) =>
            navigate({
              search: (prev) => ({ ...prev, priorities: value, page: 1 }),
            })
          }
        />
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() =>
              navigate({
                search: (prev) => ({
                  ...prev,
                  q: "",
                  statuses: [],
                  priorities: [],
                  page: 1,
                }),
              })
            }
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <XIcon className="ml-2 size-4" />
          </Button>
        )}
      </div>
    </div>
  );
}

function TasksComponent() {
  const tasks = Route.useLoaderData();
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  return (
    <div className="space-y-4">
      <TasksToolbar />
      <div className="rounded-md border">
        <TaskTable tasks={tasks.data} />
      </div>
      <TasksPagination
        currentPage={search.page ?? 1}
        limit={search.limit ?? 10}
        totalPage={tasks.totalPage}
        onLimitChange={(value) =>
          navigate({
            search: (prev) => ({ ...prev, limit: value, page: 1 }),
          })
        }
        onPageChange={(value) =>
          navigate({ search: (prev) => ({ ...prev, page: value }) })
        }
      />
    </div>
  );
}
