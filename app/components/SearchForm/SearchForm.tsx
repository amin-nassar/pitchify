import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

interface Props {
  query?: string;
}

function SearchForm({ query }: Props) {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        className="search-input"
        placeholder="Search Startups"
        defaultValue={query}
        name="query"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button className="search-btn" type="submit">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
}

export default SearchForm;
