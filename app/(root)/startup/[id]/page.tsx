import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import markdownIt from "markdown-it";
import { Views } from "@/app/components";

const md = markdownIt();

interface IPage {
  params: Awaited<{ id: string }>;
}

async function Page({ params }: IPage) {
  const startupPost = await client.fetch(STARTUP_BY_ID_QUERY, await params);

  if (!startupPost) return notFound();

  const renderedPitch = md.render(startupPost.pitch || "");

  return (
    <>
      <section className="hero-container !min-h-[230px]">
        <p className="tag">
          {new Date(startupPost._createdAt).toLocaleString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          })}
        </p>

        <h1 className="heading">{startupPost.title}</h1>
        <p className="sub-heading !max-w-5xl">{startupPost.description}</p>
      </section>
      <section className="section-container">
        <img
          src={startupPost.image}
          alt="Thumbnail"
          className="w-full h-auto rounded-xl"
        />

        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${startupPost.author._id}`}
              className="flex gap-2 items-center mb-3"
            >
              <Image
                src={startupPost.author.image}
                alt="avatar"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <p className="text-20-medium">{startupPost.author.name}</p>
                <p className="text-16-medium !text-black-300">
                  @{startupPost.author.username}
                </p>
              </div>
            </Link>

            <p className="category-tag">{startupPost.category}</p>
          </div>

          <h3 className="text-30-bold">Startup Details</h3>

          {renderedPitch ? (
            <article
              className="prose max-w-4xl font-work-sans break-all"
              dangerouslySetInnerHTML={{ __html: renderedPitch }}
            />
          ) : (
            <p className="no-result">No Details Provided!</p>
          )}
        </div>

        <hr className="divider" />

        <Views views={startupPost.views} />
      </section>
    </>
  );
}

export default Page;
