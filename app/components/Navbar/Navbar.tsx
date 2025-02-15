import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

async function Navbar() {
  const session = await auth();

  const handleSignIn = async () => {
    "use server";

    await signIn("google");
  };

  const handleSignOut = async () => {
    "use server";

    await signOut({ redirectTo: "/" });
  };

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/Logo.svg" alt="Pitchify Logo" width={135} height={30} />
        </Link>

        <div className="flex items-center gap-5">
          {session?.user ? (
            <>
              <Link href="/startup/create">
                <span>New Pitch</span>
              </Link>

              <button onClick={handleSignOut}>
                <span>Logout</span>
              </button>

              <Link href={`/user/${session.user.id}`}>
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            <button onClick={handleSignIn}>
              <span>Login</span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
