import { Suspense } from "react";
import { ApplicationFooter } from "./layouts/application-layout";
import { useRoutes } from "react-router";
import routes from "~react-pages";

export function App() {
  const appRoutes = useRoutes(routes);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ApplicationFooter>{appRoutes}</ApplicationFooter>
    </Suspense>
  );
}
