import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

import { DarkLight } from "../components/DarkLight";
import { HeaderMegaMenu } from "../components/HeaderMegaMenu";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "nowrap",
        alignItems: "flex-start",
      }}
    >
      <DarkLight />
      <HeaderMegaMenu />
    </div>
  );
}
