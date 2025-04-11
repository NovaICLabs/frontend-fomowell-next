/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as HowImport } from './routes/how'
import { Route as ProfileRouteImport } from './routes/profile/route'
import { Route as IndexImport } from './routes/index'
import { Route as ProfileUseridImport } from './routes/profile/$userid'

// Create/Update Routes

const HowRoute = HowImport.update({
  id: '/how',
  path: '/how',
  getParentRoute: () => rootRoute,
} as any)

const ProfileRouteRoute = ProfileRouteImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProfileUseridRoute = ProfileUseridImport.update({
  id: '/$userid',
  path: '/$userid',
  getParentRoute: () => ProfileRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileRouteImport
      parentRoute: typeof rootRoute
    }
    '/how': {
      id: '/how'
      path: '/how'
      fullPath: '/how'
      preLoaderRoute: typeof HowImport
      parentRoute: typeof rootRoute
    }
    '/profile/$userid': {
      id: '/profile/$userid'
      path: '/$userid'
      fullPath: '/profile/$userid'
      preLoaderRoute: typeof ProfileUseridImport
      parentRoute: typeof ProfileRouteImport
    }
  }
}

// Create and export the route tree

interface ProfileRouteRouteChildren {
  ProfileUseridRoute: typeof ProfileUseridRoute
}

const ProfileRouteRouteChildren: ProfileRouteRouteChildren = {
  ProfileUseridRoute: ProfileUseridRoute,
}

const ProfileRouteRouteWithChildren = ProfileRouteRoute._addFileChildren(
  ProfileRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/profile': typeof ProfileRouteRouteWithChildren
  '/how': typeof HowRoute
  '/profile/$userid': typeof ProfileUseridRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/profile': typeof ProfileRouteRouteWithChildren
  '/how': typeof HowRoute
  '/profile/$userid': typeof ProfileUseridRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/profile': typeof ProfileRouteRouteWithChildren
  '/how': typeof HowRoute
  '/profile/$userid': typeof ProfileUseridRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/profile' | '/how' | '/profile/$userid'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/profile' | '/how' | '/profile/$userid'
  id: '__root__' | '/' | '/profile' | '/how' | '/profile/$userid'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ProfileRouteRoute: typeof ProfileRouteRouteWithChildren
  HowRoute: typeof HowRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ProfileRouteRoute: ProfileRouteRouteWithChildren,
  HowRoute: HowRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/profile",
        "/how"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/profile": {
      "filePath": "profile/route.tsx",
      "children": [
        "/profile/$userid"
      ]
    },
    "/how": {
      "filePath": "how.tsx"
    },
    "/profile/$userid": {
      "filePath": "profile/$userid.tsx",
      "parent": "/profile"
    }
  }
}
ROUTE_MANIFEST_END */
