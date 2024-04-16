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
];

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
];
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

export const fetchTasks = async ({ limit }: { limit: number }) => {
  await sleep(_.random(0));

  return tasks.slice(0, limit);
};
