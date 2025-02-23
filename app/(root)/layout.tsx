import React, { PropsWithChildren } from "react";
import { Navbar } from "@/app/components";
import { Toaster } from "@/components/ui/sonner";

function Layout({ children }: PropsWithChildren) {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
      <Toaster richColors theme="light" />
    </main>
  );
}

export default Layout;
