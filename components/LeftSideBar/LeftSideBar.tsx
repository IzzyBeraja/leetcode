import { NavLink } from "@mantine/core";
import classes from "./LeftSideBar.module.css";
import Link from "next/link";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function SideBar({ ...rest }: Props) {
  return (
    <aside className={classes.container} {...rest}>
      <header className={classes.header}>Leetcode Problems</header>
      <div className={classes.link_container}>
        <NavLink label="Home" component={Link} href="/" />
      </div>
    </aside>
  );
}
