import React from "react";
import { DashbaordIcon } from "../components/elements/Icons";

export default [
  {
    id: "Home",
    to: "/",
    icon: <DashbaordIcon active={""} />
  },
  {
    id: "Dispatch Rule",
    to: "/dispatching",
    icon: <DashbaordIcon active={""} />
  }
];
