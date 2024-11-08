import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile/profileDetail")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /profile/profileDetail!";
}
