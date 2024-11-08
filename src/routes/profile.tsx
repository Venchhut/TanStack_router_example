import { createFileRoute } from "@tanstack/react-router";

import Profile from "./profile/-profile/-profile";

export const Route = createFileRoute("/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Profile />
    </div>
  );
}
