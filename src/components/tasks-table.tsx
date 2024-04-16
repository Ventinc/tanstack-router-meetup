import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Task, priorities, statuses } from "@/data/tasks";

function StatusCellRender({ task }: { task: Task }) {
  const status = statuses.find((status) => status.value === task.status);

  if (!status) {
    return null;
  }

  return (
    <div className="flex w-[100px] items-center">
      {status.icon && (
        <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
      )}
      <span>{status.label}</span>
    </div>
  );
}

function PriorityCellRender({ task }: { task: Task }) {
  const priority = priorities.find(
    (priority) => priority.value === task.priority,
  );

  if (!priority) {
    return null;
  }

  return (
    <div className="flex items-center">
      {priority.icon && (
        <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
      )}
      <span>{priority.label}</span>
    </div>
  );
}

export const TaskTable = ({ tasks }: { tasks: Task[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox aria-label="Select all" className="translate-y-[2px]" />
          </TableHead>
          <TableHead>
            <div>Task</div>
          </TableHead>
          <TableHead>
            <div>Title</div>
          </TableHead>
          <TableHead>
            <div>Status</div>
          </TableHead>
          <TableHead>
            <div>Priority</div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow id={task.id}>
            <TableCell>
              <Checkbox aria-label="Select row" className="translate-y-[2px]" />
            </TableCell>
            <TableCell>
              <div className="w-[80px]">{task.id}</div>
            </TableCell>
            <TableCell>
              <div className="flex space-x-2">
                {task.label && <Badge variant="outline">{task.label}</Badge>}
                <span className="max-w-[500px] truncate font-medium">
                  {task.title}
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex w-[100px] items-center">
                <StatusCellRender task={task} />
              </div>
            </TableCell>
            <TableCell>
              <div className="flex w-[100px] items-center">
                <PriorityCellRender task={task} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
