import React from "react";
import { DashbaordIcon } from "../components/elements/Icons";

export default [
  {
    id: "Dashboard",
    to: "/dashboard",
    icon: <DashbaordIcon active={""} />
  },
  {
    id: "Booking",
    to: "/booking",
    icon: <DashbaordIcon active={""} />
  },
  {
    id: "My Order",
    to: "/myOrder",
    icon: <DashbaordIcon active={""} />
  }
];
