"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      {/* <button </button> */}
      <button type="button" class="btn btn-primary btn-lg" onClick={() => router.push("/Login")}>Login</button>
      <button type="button" class="btn btn-primary btn-lg" onClick={() => router.push("/Register")}>Signup</button>
    </main>
  );
}
