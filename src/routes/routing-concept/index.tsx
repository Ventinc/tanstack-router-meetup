import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/routing-concept/")({
  component: () => (
    <div>
      <h1 className="text-4xl font-black">Home page</h1>
      <p className="max-w-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
        dolorem. Quas itaque ex consequuntur nostrum, quis reiciendis atque modi
        quibusdam! Similique deleniti blanditiis ducimus atque. Similique
        officia voluptates nemo iste!
      </p>
    </div>
  ),
});
