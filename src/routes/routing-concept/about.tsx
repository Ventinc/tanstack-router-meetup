import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/routing-concept/about")({
  component: () => (
    <div>
      <h1 className="text-4xl font-black">About page</h1>
      <p className="max-w-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
        dolorem. Quas itaque ex consequuntur nostrum, quis reiciendis atque modi
        quibusdam! Similique deleniti blanditiis ducimus atque. Similique
        officia voluptates nemo iste!
      </p>
    </div>
  ),
});
