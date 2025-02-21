import React from "react";
import Ping from "./Ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";

interface Props {
  postId: string;
}

const pluralize = (word: string, count: number) => {
  if (count === 1) return word;
  return word + "s";
};

async function Views({ postId }: Props) {
  const { views } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id: postId });

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">
          {views} {pluralize("view", views)}
        </span>
      </p>
    </div>
  );
}

export default Views;
