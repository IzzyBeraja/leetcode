import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p>This is the main page now</p>
      <Link href="/leetcode">Leetcode</Link>
    </main>
  );
}