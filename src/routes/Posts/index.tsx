import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import Post from "../../components/Post/Post";

export const Route = createFileRoute("/Posts/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Post />;
}
