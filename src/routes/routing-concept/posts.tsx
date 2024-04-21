import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { posts } from "@/data/posts";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/routing-concept/posts")({
  component: () => (
    <div className="container grid grid-cols-12 gap-4">
      <Card className="col-span-3">
        <CardHeader className="pb-2">
          <CardTitle>All Posts</CardTitle>
        </CardHeader>
        <CardContent className="p-2">
          <nav className="flex flex-col gap-1">
            {posts.map((post) => (
              <Link
                key={post.slug}
                preload="intent"
                to="/routing-concept/posts/$postId"
                className="rounded-lg p-2 hover:bg-neutral-200 [&.active]:bg-violet-100"
                params={{
                  postId: post.slug,
                }}
              >
                <div className="font-medium">{post.title}</div>
                <div className="text-xs">{post.excerpt}</div>
              </Link>
            ))}
          </nav>
        </CardContent>
      </Card>
      <div className="col-span-9 p-4">
        <Outlet />
      </div>
    </div>
  ),
});
