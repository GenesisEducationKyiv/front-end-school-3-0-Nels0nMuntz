import { LoadingIndicator } from "@/shared/ui";
import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

const TracksPage = lazy(() => import("@/pages/tracks/ui/TracksPage"));
const NotFoundPage = lazy(() => import("@/pages/not-found/ui/NotFoundPage"));

export const router = createBrowserRouter([
  {
    path: "/tracks",
    element: (
      <Suspense fallback={<LoadingIndicator open />}>
        <TracksPage />
      </Suspense>
    ),
  },
  {
    path: "",
    element: <Navigate to="/tracks" replace />,
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<LoadingIndicator open />}>
        <NotFoundPage />
      </Suspense>
    ),
  },
]);
