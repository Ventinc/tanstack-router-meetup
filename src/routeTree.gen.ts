/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RoutingConceptImport } from './routes/routing-concept'
import { Route as DemoImport } from './routes/demo'
import { Route as TodoDemoRouteImport } from './routes/todo-demo/route'
import { Route as FolderDemoRouteImport } from './routes/folder-demo/route'
import { Route as IndexImport } from './routes/index'
import { Route as RoutingConceptIndexImport } from './routes/routing-concept/index'
import { Route as DemoIndexImport } from './routes/demo.index'
import { Route as RoutingConceptSettingsImport } from './routes/routing-concept/settings'
import { Route as RoutingConceptPostsImport } from './routes/routing-concept/posts'
import { Route as RoutingConceptAboutImport } from './routes/routing-concept/about'
import { Route as RoutingConceptLayoutImport } from './routes/routing-concept/_layout'
import { Route as DemoSettingsImport } from './routes/demo.settings'
import { Route as FolderDemoIndexRouteImport } from './routes/folder-demo/index/route'
import { Route as RoutingConceptPostsIndexImport } from './routes/routing-concept/posts.index'
import { Route as RoutingConceptSettingsProfileImport } from './routes/routing-concept/settings.profile'
import { Route as RoutingConceptSettingsNotificationImport } from './routes/routing-concept/settings.notification'
import { Route as RoutingConceptPostsPostIdImport } from './routes/routing-concept/posts.$postId'
import { Route as RoutingConceptFileSplatImport } from './routes/routing-concept/file.$'
import { Route as RoutingConceptLayoutLayoutBImport } from './routes/routing-concept/_layout.layout-b'
import { Route as RoutingConceptLayoutLayoutAImport } from './routes/routing-concept/_layout.layout-a'
import { Route as RoutingConceptPostsPostIdEditImport } from './routes/routing-concept/posts_.$postId.edit'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const RoutingConceptRoute = RoutingConceptImport.update({
  path: '/routing-concept',
  getParentRoute: () => rootRoute,
} as any)

const DemoRoute = DemoImport.update({
  path: '/demo',
  getParentRoute: () => rootRoute,
} as any)

const TodoDemoRouteRoute = TodoDemoRouteImport.update({
  path: '/todo-demo',
  getParentRoute: () => rootRoute,
} as any)

const FolderDemoRouteRoute = FolderDemoRouteImport.update({
  path: '/folder-demo',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const RoutingConceptIndexRoute = RoutingConceptIndexImport.update({
  path: '/',
  getParentRoute: () => RoutingConceptRoute,
} as any)

const DemoIndexRoute = DemoIndexImport.update({
  path: '/',
  getParentRoute: () => DemoRoute,
} as any)

const RoutingConceptSettingsRoute = RoutingConceptSettingsImport.update({
  path: '/settings',
  getParentRoute: () => RoutingConceptRoute,
} as any)

const RoutingConceptPostsRoute = RoutingConceptPostsImport.update({
  path: '/posts',
  getParentRoute: () => RoutingConceptRoute,
} as any)

const RoutingConceptAboutRoute = RoutingConceptAboutImport.update({
  path: '/about',
  getParentRoute: () => RoutingConceptRoute,
} as any)

const RoutingConceptLayoutRoute = RoutingConceptLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => RoutingConceptRoute,
} as any)

const DemoSettingsRoute = DemoSettingsImport.update({
  path: '/settings',
  getParentRoute: () => DemoRoute,
} as any)

const FolderDemoIndexRouteRoute = FolderDemoIndexRouteImport.update({
  path: '/',
  getParentRoute: () => FolderDemoRouteRoute,
} as any)

const RoutingConceptPostsIndexRoute = RoutingConceptPostsIndexImport.update({
  path: '/',
  getParentRoute: () => RoutingConceptPostsRoute,
} as any)

const RoutingConceptSettingsProfileRoute =
  RoutingConceptSettingsProfileImport.update({
    path: '/profile',
    getParentRoute: () => RoutingConceptSettingsRoute,
  } as any)

const RoutingConceptSettingsNotificationRoute =
  RoutingConceptSettingsNotificationImport.update({
    path: '/notification',
    getParentRoute: () => RoutingConceptSettingsRoute,
  } as any)

const RoutingConceptPostsPostIdRoute = RoutingConceptPostsPostIdImport.update({
  path: '/$postId',
  getParentRoute: () => RoutingConceptPostsRoute,
} as any)

const RoutingConceptFileSplatRoute = RoutingConceptFileSplatImport.update({
  path: '/file/$',
  getParentRoute: () => RoutingConceptRoute,
} as any)

const RoutingConceptLayoutLayoutBRoute =
  RoutingConceptLayoutLayoutBImport.update({
    path: '/layout-b',
    getParentRoute: () => RoutingConceptLayoutRoute,
  } as any)

const RoutingConceptLayoutLayoutARoute =
  RoutingConceptLayoutLayoutAImport.update({
    path: '/layout-a',
    getParentRoute: () => RoutingConceptLayoutRoute,
  } as any)

const RoutingConceptPostsPostIdEditRoute =
  RoutingConceptPostsPostIdEditImport.update({
    path: '/posts/$postId/edit',
    getParentRoute: () => RoutingConceptRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/folder-demo': {
      preLoaderRoute: typeof FolderDemoRouteImport
      parentRoute: typeof rootRoute
    }
    '/todo-demo': {
      preLoaderRoute: typeof TodoDemoRouteImport
      parentRoute: typeof rootRoute
    }
    '/demo': {
      preLoaderRoute: typeof DemoImport
      parentRoute: typeof rootRoute
    }
    '/routing-concept': {
      preLoaderRoute: typeof RoutingConceptImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/folder-demo/': {
      preLoaderRoute: typeof FolderDemoIndexRouteImport
      parentRoute: typeof FolderDemoRouteImport
    }
    '/demo/settings': {
      preLoaderRoute: typeof DemoSettingsImport
      parentRoute: typeof DemoImport
    }
    '/routing-concept/_layout': {
      preLoaderRoute: typeof RoutingConceptLayoutImport
      parentRoute: typeof RoutingConceptImport
    }
    '/routing-concept/about': {
      preLoaderRoute: typeof RoutingConceptAboutImport
      parentRoute: typeof RoutingConceptImport
    }
    '/routing-concept/posts': {
      preLoaderRoute: typeof RoutingConceptPostsImport
      parentRoute: typeof RoutingConceptImport
    }
    '/routing-concept/settings': {
      preLoaderRoute: typeof RoutingConceptSettingsImport
      parentRoute: typeof RoutingConceptImport
    }
    '/demo/': {
      preLoaderRoute: typeof DemoIndexImport
      parentRoute: typeof DemoImport
    }
    '/routing-concept/': {
      preLoaderRoute: typeof RoutingConceptIndexImport
      parentRoute: typeof RoutingConceptImport
    }
    '/routing-concept/_layout/layout-a': {
      preLoaderRoute: typeof RoutingConceptLayoutLayoutAImport
      parentRoute: typeof RoutingConceptLayoutImport
    }
    '/routing-concept/_layout/layout-b': {
      preLoaderRoute: typeof RoutingConceptLayoutLayoutBImport
      parentRoute: typeof RoutingConceptLayoutImport
    }
    '/routing-concept/file/$': {
      preLoaderRoute: typeof RoutingConceptFileSplatImport
      parentRoute: typeof RoutingConceptImport
    }
    '/routing-concept/posts/$postId': {
      preLoaderRoute: typeof RoutingConceptPostsPostIdImport
      parentRoute: typeof RoutingConceptPostsImport
    }
    '/routing-concept/settings/notification': {
      preLoaderRoute: typeof RoutingConceptSettingsNotificationImport
      parentRoute: typeof RoutingConceptSettingsImport
    }
    '/routing-concept/settings/profile': {
      preLoaderRoute: typeof RoutingConceptSettingsProfileImport
      parentRoute: typeof RoutingConceptSettingsImport
    }
    '/routing-concept/posts/': {
      preLoaderRoute: typeof RoutingConceptPostsIndexImport
      parentRoute: typeof RoutingConceptPostsImport
    }
    '/routing-concept/posts/$postId/edit': {
      preLoaderRoute: typeof RoutingConceptPostsPostIdEditImport
      parentRoute: typeof RoutingConceptImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  FolderDemoRouteRoute.addChildren([FolderDemoIndexRouteRoute]),
  TodoDemoRouteRoute,
  DemoRoute.addChildren([DemoSettingsRoute, DemoIndexRoute]),
  RoutingConceptRoute.addChildren([
    RoutingConceptLayoutRoute.addChildren([
      RoutingConceptLayoutLayoutARoute,
      RoutingConceptLayoutLayoutBRoute,
    ]),
    RoutingConceptAboutRoute,
    RoutingConceptPostsRoute.addChildren([
      RoutingConceptPostsPostIdRoute,
      RoutingConceptPostsIndexRoute,
    ]),
    RoutingConceptSettingsRoute.addChildren([
      RoutingConceptSettingsNotificationRoute,
      RoutingConceptSettingsProfileRoute,
    ]),
    RoutingConceptIndexRoute,
    RoutingConceptFileSplatRoute,
    RoutingConceptPostsPostIdEditRoute,
  ]),
  AboutLazyRoute,
])

/* prettier-ignore-end */
