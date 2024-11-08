import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Posts/$postId/edit")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /Posts/$postId/edit!";
}
