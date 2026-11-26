import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

export function renderRoute(routePath: string): string {
  return renderToString(<App initialPath={routePath} />);
}
