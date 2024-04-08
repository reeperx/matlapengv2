import React from "react";
import SidebarNav from "../_components/SidebarNav";
import Header from "../_components/Header";

function HomePage({ children }) {
  return (
    <div>
      <div className="h-full w-64 md:flex flex-col fixed inset-y-0 z-50 hidden">
        <SidebarNav />
      </div>
      <Header />
      <div className="ml-64 p-5">{children}</div>
    </div>
  );
}

export default HomePage;
