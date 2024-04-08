"use client";
import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"

function Header() {
  const { user } = useUser();
  const router = useRouter();
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div className="ml-64 p-6 border-b flex items-center justify-between">
      <SearchBar />
      {!user ? (
        <Button variant="default" onClick={() => router.push("/sign-in")}>Login</Button>
      ) : (
        <UserButton />
      )}
    </div>
  );
}

export default Header;
