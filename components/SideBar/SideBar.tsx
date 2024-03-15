import { NavLink } from "@mantine/core";
import classes from "./SideBar.module.css";
import Link from "next/link";

interface Props {}

export default function SideBar({}: Props) {
  return (
    <aside className={classes.container}>
      <NavLink label="Home" component={Link} href="/" />
    </aside>
  );
}
