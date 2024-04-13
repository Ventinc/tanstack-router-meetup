import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/routing-concept/_layout")({
  component: () => (
    <Card>
      <CardHeader>
        <CardTitle>Layout</CardTitle>
        <CardDescription>Hidden from url</CardDescription>
      </CardHeader>
      <CardContent>
        <Outlet />
      </CardContent>
    </Card>
  ),
});
