import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

import { DarkLight } from "../components/DarkLight";
import { HeaderMegaMenu } from "../components/HeaderMegaMenu";
import { AppShell } from "@mantine/core";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <AppShell>
      <DarkLight />
      <HeaderMegaMenu />
    </AppShell>
  );
}
