"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
//   const router = useRouter()
//   router.push('/login')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/login"} />
      <Link href={"/dashboard"} />
      
    </main>
  );
}
