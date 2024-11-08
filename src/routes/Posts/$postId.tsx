import * as React from "react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/Posts/$postId")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /Posts/$postId!";
}
