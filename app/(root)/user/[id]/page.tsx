import { auth } from "@/auth";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import Image from "next/image";
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries";
import UserStartups from "@/app/components/UserStartups";

interface IPage {
  params: Awaited<{ id: string }>;
}

async function Page({ params }: IPage) {
  const id = (await params).id;
  const session = await auth();

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });
  if (!user) return notFound();
  return (
    <section className="profile-container">
      <div className="profile-card">
        <div className="profile-title">
          <h3 className="text-24-black uppercase text-center line-clamp-1">
            {user.name}
          </h3>
        </div>
        <Image
          src={user.image}
          alt={user.name}
          width={220}
          height={220}
          className="profile-image"
        />

        <p className="text-30-extrabold mt-7 text-center">@{user?.username}</p>
        <p className="mt-1 text-center text-14-normal">{user?.bio}</p>
      </div>

      <div className="flex-1 flex flex-col gap-5 lg:-mt-5">
        <p className="text-30-bold">
          {session?.id === id ? "Your" : "All"} Startups
        </p>
        <ul className="card-grid-sm">
          <UserStartups userId={id} />
        </ul>
      </div>
    </section>
  );
}

export default Page;
