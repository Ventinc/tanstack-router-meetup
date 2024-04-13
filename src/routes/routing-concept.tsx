import { Tree } from "@/components/tree";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppPaths } from "@/routes/__root";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { FileIcon, FolderIcon } from "lucide-react";

export const Route = createFileRoute("/routing-concept")({
  component: () => <RoutingConceptLayout />,
  notFoundComponent: () => (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404 Not Found</h1>
      <Button asChild>
        <Link to="/routing-concept">Back home</Link>
      </Button>
    </div>
  ),
});

function linkDisplay(link: AppPaths) {
  return link.replace("/routing-concept", "");
}

function RoutingConceptLayout() {
  return (
    <div className="grid min-h-screen grid-cols-12 gap-4 bg-neutral-100 p-4">
      <div className="col-span-3 rounded-lg border bg-white p-2 px-4">
        <Tabs defaultValue="flat-routes" className="flex flex-col">
          <TabsList className="self-center">
            <TabsTrigger value="flat-routes">Flat Routes</TabsTrigger>
            <TabsTrigger value="directory-routes">Directory Routes</TabsTrigger>
            <TabsTrigger value="mixed-routes">Mixed Routes</TabsTrigger>
          </TabsList>
          <TabsContent value="flat-routes">
            <Tree
              linkDisplay={linkDisplay}
              data={[
                {
                  to: "/routing-concept",
                  name: "__root.tsx",
                  icon: FileIcon,
                },
                {
                  to: "/routing-concept/",
                  exact: true,
                  name: "index.tsx",
                  icon: FileIcon,
                },
                {
                  to: "/routing-concept/about",
                  name: "about.tsx",
                  icon: FileIcon,
                },
                {
                  to: "/routing-concept/posts",
                  name: "posts.tsx",
                  icon: FileIcon,
                },
                {
                  to: "/routing-concept/posts",
                  name: "posts.index.tsx",
                  exact: true,
                  icon: FileIcon,
                },
                {
                  to: "/routing-concept/posts/$postId",
                  name: "posts.$postId.tsx",
                  icon: FileIcon,
                },
                {
                  to: "/routing-concept/posts/$postId/edit",
                  name: "posts_.$postId.tsx",
                  icon: FileIcon,
                },
                {
                  to: "/routing-concept/settings",
                  name: "settings.tsx",
                  icon: FileIcon,
                },
                {
                  to: "/routing-concept/settings/notification",
                  name: "settings.notification.tsx",
                  icon: FileIcon,
                },
                {
                  to: "/routing-concept/settings/profile",
                  name: "settings.profile.tsx",
                  icon: FileIcon,
                },
                {
                  name: "_layout.tsx",
                  icon: FileIcon,
                },
                {
                  to: "/routing-concept/layout-a",
                  name: "_layout.layout-a.tsx",
                  icon: FileIcon,
                },
                {
                  to: "/routing-concept/layout-b",
                  name: "_layout.layout-b.tsx",
                  icon: FileIcon,
                },
                {
                  to: "/routing-concept/file/random-image.png" as AppPaths,
                  name: "file.$.tsx",
                  icon: FileIcon,
                },
              ]}
            />
          </TabsContent>
          <TabsContent value="directory-routes">
            <Tree
              linkDisplay={linkDisplay}
              data={[
                {
                  to: "/routing-concept",
                  name: "__root.tsx",
                  icon: FileIcon,
                },
                {
                  to: "/routing-concept/",
                  exact: true,
                  name: "index.tsx",
                  icon: FileIcon,
                },
                {
                  to: "/routing-concept/about",
                  name: "about.tsx",
                  icon: FileIcon,
                },
                {
                  to: "/routing-concept/posts",
                  name: "posts.tsx",
                  icon: FileIcon,
                },
                {
                  name: "posts",
                  icon: FolderIcon,
                  children: [
                    {
                      to: "/routing-concept/posts",
                      name: "index.tsx",
                      exact: true,
                      icon: FileIcon,
                    },
                    {
                      to: "/routing-concept/posts/$postId",
                      name: "$postId.tsx",
                      icon: FileIcon,
                    },
                  ],
                },
                {
                  name: "posts_",
                  icon: FolderIcon,
                  children: [
                    {
                      to: "/routing-concept/posts/$postId/edit",
                      name: "posts_.$postId.tsx",
                      icon: FileIcon,
                    },
                  ],
                },
                {
                  to: "/routing-concept/settings",
                  name: "settings.tsx",
                  icon: FileIcon,
                },
                {
                  name: "settings",
                  icon: FolderIcon,
                  children: [
                    {
                      to: "/routing-concept/settings/notification",
                      name: "notification.tsx",
                      icon: FileIcon,
                    },
                    {
                      to: "/routing-concept/settings/profile",
                      name: "profile.tsx",
                      icon: FileIcon,
                    },
                  ],
                },
                {
                  name: "_layout.tsx",
                  icon: FileIcon,
                },
                {
                  name: "_layout",
                  icon: FolderIcon,
                  children: [
                    {
                      to: "/routing-concept/layout-a",
                      name: "layout-a.tsx",
                      icon: FileIcon,
                    },
                    {
                      to: "/routing-concept/layout-b",
                      name: "layout-b.tsx",
                      icon: FileIcon,
                    },
                  ],
                },
                {
                  name: "file",
                  icon: FolderIcon,
                  children: [
                    {
                      to: "/routing-concept/file/random-image.png" as AppPaths,
                      name: "$.tsx",
                      icon: FileIcon,
                    },
                  ],
                },
              ]}
            />
          </TabsContent>
          <TabsContent value="mixed-routes">
            <Tree
              linkDisplay={linkDisplay}
              data={[
                {
                  to: "/routing-concept",
                  name: "__root.tsx",
                  icon: FileIcon,
                },
                {
                  to: "/routing-concept/",
                  exact: true,
                  name: "index.tsx",
                  icon: FileIcon,
                },
                {
                  to: "/routing-concept/about",
                  name: "about.tsx",
                  icon: FileIcon,
                },
                {
                  to: "/routing-concept/posts",
                  name: "posts.tsx",
                  icon: FileIcon,
                },
                {
                  name: "posts",
                  icon: FolderIcon,
                  children: [
                    {
                      to: "/routing-concept/posts",
                      name: "index.tsx",
                      exact: true,
                      icon: FileIcon,
                    },
                    {
                      to: "/routing-concept/posts/$postId",
                      name: "$postId.tsx",
                      icon: FileIcon,
                    },
                  ],
                },
                {
                  name: "posts_",
                  icon: FolderIcon,
                  children: [
                    {
                      to: "/routing-concept/posts/$postId/edit",
                      name: "posts_.$postId.tsx",
                      icon: FileIcon,
                    },
                  ],
                },
                {
                  to: "/routing-concept/settings",
                  name: "settings.tsx",
                  icon: FileIcon,
                },
                {
                  name: "settings",
                  icon: FolderIcon,
                  children: [
                    {
                      to: "/routing-concept/settings/notification",
                      name: "notification.tsx",
                      icon: FileIcon,
                    },
                    {
                      to: "/routing-concept/settings/profile",
                      name: "profile.tsx",
                      icon: FileIcon,
                    },
                  ],
                },
                {
                  name: "_layout.tsx",
                  icon: FileIcon,
                },
                {
                  name: "_layout",
                  icon: FolderIcon,
                  children: [
                    {
                      to: "/routing-concept/layout-a",
                      name: "layout-a.tsx",
                      icon: FileIcon,
                    },
                    {
                      to: "/routing-concept/layout-b",
                      name: "layout-b.tsx",
                      icon: FileIcon,
                    },
                  ],
                },
                {
                  to: "/routing-concept/file/random-image.png" as AppPaths,
                  name: "file.$.tsx",
                  icon: FileIcon,
                  highlight: true,
                },
              ]}
            />
          </TabsContent>
        </Tabs>
        <div className="mx-auto mt-12 w-fit rounded-xl bg-yellow-100 p-1.5 px-3 text-xs">
          <div className="font-bold">Hints:</div>
          <ul>
            <li>Root Routes</li>
            <li>Static Routes</li>
            <li>Index Routes</li>
            <li>Dynamic Routes</li>
            <li>Pathless / Layout Routes</li>
            <li>Non Nested Routes</li>
            <li>Splat Routes</li>
            <li>Not Found Routes</li>
          </ul>
        </div>
        <div className="flex justify-center pt-4">
          <Button size="sm" asChild variant="secondary">
            <Link to="/">Back to home</Link>
          </Button>
        </div>
      </div>
      <div className="col-span-9 rounded-lg border bg-white p-4">
        <div className="mb-4 flex rounded-full border px-2 py-2 shadow-sm">
          <nav className="flex">
            <ul className="flex gap-2">
              <li>
                <Link
                  to="/routing-concept"
                  activeOptions={{
                    exact: true,
                  }}
                  className="rounded-full px-3 py-1.5 font-medium hover:bg-violet-300 [&.active]:bg-violet-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/routing-concept/about"
                  activeOptions={{
                    exact: true,
                  }}
                  className="rounded-full px-3 py-1.5 font-medium hover:bg-violet-300 [&.active]:bg-violet-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/routing-concept/posts"
                  className="rounded-full px-3 py-1.5 font-medium hover:bg-violet-300 [&.active]:bg-violet-300"
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  to="/routing-concept/settings"
                  className="rounded-full px-3 py-1.5 font-medium hover:bg-violet-300 [&.active]:bg-violet-300"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  to="/routing-concept/file/$"
                  params={{
                    _splat: `random-${Math.round(Math.random() * 100)}`,
                  }}
                  className="rounded-full px-3 py-1.5 font-medium hover:bg-violet-300 [&.active]:bg-violet-300"
                >
                  Random File Here
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
