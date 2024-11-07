import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
export const Route = createRootRoute({
  component: RootComponent,
});
const theme = createTheme({
  fontFamily: "Montserrat, sans-serif",
  defaultRadius: "md",
});

function RootComponent() {
  return (
    <>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <div className="p-2 flex gap-2 text-lg">
          <Link
            to="/"
            activeProps={{
              className: "font-bold",
            }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>{" "}
          <Link
            to="/about"
            activeProps={{
              className: "font-bold",
            }}
          >
            About
          </Link>
          <Link
            to="/profile"
            activeProps={{
              className: "font-bold",
            }}
          >
            profile
          </Link>
        </div>
        <hr />
        <Outlet />
      </MantineProvider>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
