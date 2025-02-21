import React, { PropsWithChildren } from "react";
import { Navbar } from "@/app/components";
import { SanityLive } from "@/sanity/lib/live";

function Layout({ children }: PropsWithChildren) {
  return (
    <main className="font-work-sans">
      <Navbar />
      <SanityLive />
      {children}
    </main>
  );
}

export default Layout;
