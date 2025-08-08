import type { JSX } from "react";
import { RouterProvider } from "react-router-dom";
import { mainRouter } from "@routes";

import "./index.css";


export const App = (): JSX.Element => {
  return <RouterProvider router={mainRouter} />;
};