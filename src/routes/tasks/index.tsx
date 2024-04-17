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

import { TasksPagination } from "@/components/tasks-pagination";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CheckIcon, CirclePlusIcon, LucideIcon, XIcon } from "lucide-react";
import { z } from "zod";

const tasksSearchParams = z.object({
  q: z.string().catch(""),
  statuses: z.array(z.enum(statusesValues)).catch([]),
  priorities: z.array(z.enum(prioritiesValues)).catch([]),
  limit: z.number().min(10).catch(10),
  page: z.number().min(1).catch(1),
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

export function TableFilter<OptionValue extends string>({
  title,
  options,
  value = [],
  onChange,
}: {
  title?: string;
  options: Readonly<
    {
      label: string;
      value: OptionValue;
      icon?: LucideIcon;
    }[]
  >;
  value?: OptionValue[];
  onChange?: (value: OptionValue[]) => void;
}) {
  const selectedValues = new Set(value);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          <CirclePlusIcon className="mr-2 size-4" />
          {title}
          {selectedValues?.size > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal lg:hidden"
              >
                {selectedValues.size}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {selectedValues.size > 2 ? (
                  <Badge
                    variant="secondary"
                    className="rounded-sm px-1 font-normal"
                  >
                    {selectedValues.size} selected
                  </Badge>
                ) : (
                  options
                    .filter((option) => selectedValues.has(option.value))
                    .map((option) => (
                      <Badge
                        variant="secondary"
                        key={option.value}
                        className="rounded-sm px-1 font-normal"
                      >
                        {option.label}
                      </Badge>
                    ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder={title} />
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues.has(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {
                      if (isSelected) {
                        selectedValues.delete(option.value);
                      } else {
                        selectedValues.add(option.value);
                      }
                      const filterValues = Array.from(selectedValues);
                      onChange?.(filterValues);
                    }}
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible",
                      )}
                    >
                      <CheckIcon className={cn("size-4")} />
                    </div>
                    {option.icon && (
                      <option.icon className="mr-2 size-4 text-muted-foreground" />
                    )}
                    <span>{option.label}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {selectedValues.size > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => onChange?.([])}
                    className="justify-center text-center"
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export function TasksToolbar() {
  const params = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const isFiltered = params.q.length > 0 || params.statuses.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={params.q ?? ""}
          onChange={(event) =>
            navigate({
              search: (prev) => ({ ...prev, q: event.target.value, page: 1 }),
            })
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        <TableFilter
          title="Status"
          options={statuses}
          value={params.statuses}
          onChange={(value) =>
            navigate({
              search: (prev) => ({ ...prev, statuses: value, page: 1 }),
            })
          }
        />
        <TableFilter
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
        currentPage={search.page}
        limit={search.limit}
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
