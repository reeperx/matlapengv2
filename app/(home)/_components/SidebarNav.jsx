"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Search, Layout, Video, Shield, Mail } from "lucide-react";

function SidebarNav() {
  const menuList = [
    {
      id: 1,
      name: "Browse",
      icon: Search,
      path: "/browse",
    },
    {
      id: 2,
      name: "Dashboard",
      icon: Layout,
      path: "/dashboard",
    },
    {
      id: 3,
      name: "Live Class",
      icon: Video,
      path: "/live",
    },
    {
      id: 4,
      name: "Upgrade",
      icon: Shield,
      path: "/upgrade",
    },
    {
      id: 5,
      name: "Newsletter",
      icon: Mail,
      path: "/newsletter",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="h-full bg-white border-r flex flex-col overflow-y-auto shadow-md">
      <div className="p-5 border-b">
        <Image src="/logo.svg" alt="logo" width={220} height={100} quality={100} priority={true} />
      </div>
      <div className="flex flex-col">
        {menuList.map((item, index) => (
          <div
          key={index}
            className={`flex gap-2 items-center p-4 px-6 text-gray-500 hover:bg-orange-300 cursor-pointer ${
              activeIndex == index ? "bg-orange-200 text-orange-800" : null
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SidebarNav;
