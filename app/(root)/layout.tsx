import React, { PropsWithChildren } from "react";
import { Navbar } from "@/app/components";

function Layout({ children }: PropsWithChildren) {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
    </main>
  );
}

export default Layout;
