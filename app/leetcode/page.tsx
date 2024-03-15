import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p>This is the leetcode page!</p>
      <div style={{ height: "150vh" }} />
      <Link href="/">Home</Link>
    </main>
  );
}
