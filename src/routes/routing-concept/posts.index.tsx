import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { posts } from "@/data/posts";
import { Link, createFileRoute } from "@tanstack/react-router";

const latestPosts = posts.slice(0, 3);

export const Route = createFileRoute("/routing-concept/posts/")({
  component: () => (
    <div>
      <h1 className="text-4xl font-black">Posts</h1>
      <p>Select a post to see the content</p>
      <div className="mt-8 grid grid-cols-3 gap-4">
        {latestPosts.map((latestPost) => (
          <Card key={latestPost.slug} className="overflow-hidden">
            <img
              src={`https://picsum.photos/seed/${latestPost.title}/1920/1080`}
              width="100%"
              height="100"
              className="aspect-video object-cover"
            />
            <CardHeader>
              <CardTitle>{latestPost.title}</CardTitle>
              <CardDescription className="line-clamp-2">
                {latestPost.excerpt}
              </CardDescription>
              <div className="flex justify-end pt-4">
                <Button variant="secondary" asChild>
                  <Link
                    to="/routing-concept/posts/$postId"
                    params={{ postId: latestPost.slug }}
                  >
                    Lire plus
                  </Link>
                </Button>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  ),
});
