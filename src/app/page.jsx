import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="font-bold">Welcome to Haiku App</h1>
      <p>This App is used for the storage of AI integrated images.</p>

      <Link href="/login">Login</Link>
    </div>
  );
}
