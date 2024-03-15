import { NavLink } from "@mantine/core";
import classes from "./LeftSideBar.module.css";
import Link from "next/link";

interface Props {}

export default function SideBar({}: Props) {
  return (
    <aside className={classes.container}>
      <header className={classes.header}>Leetcode Problems</header>
      <div className={classes.link_container}>
        <NavLink label="Home" component={Link} href="/" />
      </div>
    </aside>
  );
}
