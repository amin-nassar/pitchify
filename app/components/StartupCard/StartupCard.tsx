import React from "react";
import { Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { StartupTypeCard } from "./types";

interface Props {
  post: StartupTypeCard;
}

function StartupCard({ post }: Props) {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup-card-date">
          {new Date(post._createdAt).toLocaleString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          })}
        </p>
        <div className="flex gap-1.5">
          <Eye className="size-6 text-primary" />
          <span className="text-16-medium">{post.views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${post.author._id}`}>
            <p className="text-16-medium line-clamp-1">{post.author.name}</p>
          </Link>

          <Link href={`/startup/${post._id}`}>
            <h3 className="text-26-semibold">{post.title}</h3>
          </Link>
        </div>

        <Link href={`/user/${post.author._id}`}>
          <Image
            src={post.author.image!}
            alt={post.author.name!}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link href={`/startup/${post._id}`}>
        <p className="startup-card-desc">{post.description}</p>

        <img src={post.image} alt="placeholder" className="startup-card-img" />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/query=${post.category?.toLowerCase()}`}>
          <p className="text-16-medium">{post.category}</p>
        </Link>
        <Button className="startup-card-btn">
          <Link href={`/startup/${post._id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
}

export default StartupCard;
