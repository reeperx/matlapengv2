"use client";

import Image from "next/image";
import { UserButton } from "@clerk/nextjs"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter(); // navigation to default page
  useEffect(() => {
    router.push("/browse") // landing page for now
  }, [])
  return (
   <div>
    </div>
  );
}
