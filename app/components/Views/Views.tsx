import React from "react";
import Ping from "./Ping";

interface Props {
  views: number;
}

async function Views({ views }: Props) {
  const pluralize = (word: string, count: number) => {
    if (count === 1) return word;
    return word + "s";
  };
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
