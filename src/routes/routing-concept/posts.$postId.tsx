import { Button } from "@/components/ui/button";
import { posts } from "@/data/posts";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { EditIcon } from "lucide-react";

export const Route = createFileRoute("/routing-concept/posts/$postId")({
  loader: async ({ params }) => {
    const post = posts.find((post) => post.slug === params.postId);

    if (!post) {
      throw notFound();
    }

    return post;
  },
  component: PostComponent,
  notFoundComponent: () => <>Post Not Found</>,
});

function PostComponent() {
  const post = Route.useLoaderData();

  return (
    <div className="flex flex-col gap-2">
      <img
        src={`https://picsum.photos/seed/${post.title}/1920/1080`}
        className="mb-8 aspect-[21/9] rounded-lg bg-neutral-100 object-cover"
        width="100%"
        height={300}
      />
      <h1 className="text-2xl font-black">{post.title}</h1>
      <p>{post.content}</p>
      <div className="flex justify-end">
        <Button variant="outline" size="sm" asChild>
          <Link
            from={Route.fullPath}
            to="./edit"
            params={{ postId: post.slug }}
            className="flex items-center"
          >
            <EditIcon className="mr-2 size-4" />
            Edit
          </Link>
        </Button>
      </div>
    </div>
  );
}
