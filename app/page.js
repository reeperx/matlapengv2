import Image from "next/image";
import { UserButton } from "@clerk/nextjs"

export default function Home() {
  return (
   <div>
    Hello New App
    <UserButton afterSignOutUrl="/" />
    </div>
  );
}
