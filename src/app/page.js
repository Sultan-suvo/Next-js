import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Main</h1>
      <Link href='login'>go to login page</Link>
      <br />
      <br />
      <Link href='about'>go to About page</Link>
    </main>
  )
}
