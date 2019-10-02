import React from "react";
import { DashbaordIcon } from "../components/elements/Icons";

export default [
  {
    id: "Dashboard",
    to: "/",
    icon: <DashbaordIcon active={""} />
  },
  {
    id: "Booking",
    to: "/dispatching",
    icon: <DashbaordIcon active={""} />
  }
];
