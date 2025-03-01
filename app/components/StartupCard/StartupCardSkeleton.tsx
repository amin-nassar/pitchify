import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  cardsCount?: number;
}

function StartupCardSkeleton({ cardsCount = 1 }: Props) {
  return (
    <>
      {Array.from({ length: cardsCount }).map((_, i) => (
        <li key={cn("skeleton", i)}>
          <Skeleton className="startup-card-skeleton" />
        </li>
      ))}
    </>
  );
}

export default StartupCardSkeleton;
