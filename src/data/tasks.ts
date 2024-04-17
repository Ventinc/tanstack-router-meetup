import { faker } from "@faker-js/faker";
import _ from "lodash";
import {
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  CircleXIcon,
  MoveDownRightIcon,
  MoveRightIcon,
  MoveUpRightIcon,
  TimerIcon,
} from "lucide-react";
import { z } from "zod";

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: CircleHelpIcon,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: TimerIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CircleCheckIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CircleXIcon,
  },
] as const;

export const statusesValues = [
  "backlog",
  "todo",
  "in progress",
  "done",
  "canceled",
] as const;

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: MoveUpRightIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: MoveRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: MoveDownRightIcon,
  },
] as const;

export const prioritiesValues = ["low", "medium", "high"] as const;
// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export type Task = z.infer<typeof taskSchema>;

faker.seed(5);

const tasks = Array.from({ length: 100 }, () => ({
  id: `TASK-${faker.number.int({ min: 1000, max: 9999 })}`,
  title: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  status: faker.helpers.arrayElement(statuses).value,
  label: faker.helpers.arrayElement(labels).value,
  priority: faker.helpers.arrayElement(priorities).value,
}));

const sleep = (ms: number) =>
  new Promise<boolean>((res) => setTimeout(() => res(true), ms));

export const fetchTasks = async ({
  limit = 10,
  q = "",
  statuses = [],
  priorities = [],
  page = 1,
}: {
  limit?: number;
  q?: string;
  page?: number;
  statuses?: (typeof statusesValues)[number][];
  priorities?: (typeof prioritiesValues)[number][];
}) => {
  await sleep(_.random(0));

  const rawPage = page - 1;

  const tasksFiltered = tasks
    .filter((task) => {
      if (statuses.length === 0) return true;
      return statuses.includes(task.status);
    })
    .filter((task) => {
      if (priorities.length === 0) return true;
      return priorities.includes(task.priority);
    })
    .filter((task) => task.title.toLowerCase().includes(q.toLowerCase()));

  return {
    data: tasksFiltered.slice(rawPage * limit, rawPage * limit + limit),
    page,
    limit,
    total: tasksFiltered.length,
    totalPage: Math.ceil(tasksFiltered.length / limit),
  };
};
