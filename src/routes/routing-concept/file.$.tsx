import { Card } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/routing-concept/file/$")({
  component: RandomFileComponent,
});

function RandomFileComponent() {
  const params = Route.useParams();

  return (
    <div>
      <h1 className="text-4xl font-black">Random File</h1>
      <div className="pb-4 text-xs font-medium text-neutral-500">
        <p>Splat: {params._splat}</p>
        <p>Seed: {params._splat.replace(/\//g, "-")}</p>
      </div>
      <Card className="overflow-hidden">
        <img
          src={`https://picsum.photos/seed/${params._splat.replace(/\//g, "-")}/1920/1080`}
        />
      </Card>
    </div>
  );
}
