"use client";

import React from "react";
import Link from "next/link";
import { X } from "lucide-react";

function SearchFormReset() {
  const handleReset = () => {
    const form = document.querySelector<HTMLFormElement>(".search-form");

    if (form) form.reset();
  };

  return (
    <button onClick={handleReset}>
      <Link href="/" className="search-btn">
        <X className="size-5" />
      </Link>
    </button>
  );
}

export default SearchFormReset;
