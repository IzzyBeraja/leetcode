import LeftSideBar from "@/components/LeftSideBar/LeftSideBar";

import classes from "./layout.module.css";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className={classes.container}>
      <LeftSideBar style={{ width: "18rem" }} />
      <div style={{ flex: 1 }}>{children}</div>
      <LeftSideBar style={{ width: "18rem" }} />
    </div>
  );
}
