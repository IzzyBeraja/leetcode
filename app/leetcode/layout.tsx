import SideBar from "@/components/SideBar/SideBar";

import classes from "./layout.module.css";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className={classes.container}>
      <SideBar />
      {children}
    </div>
  );
}
