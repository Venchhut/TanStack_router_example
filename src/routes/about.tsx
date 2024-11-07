import * as React from "react";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import HomeComponent from "../components/HomeComponent";
export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className="p-2">
      <HomeComponent />
      <Outlet />
    </div>
  );
}
