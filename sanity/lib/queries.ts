import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(`
    *[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author -> name match $search]  | order(_createdAt desc) {
  _id,
    title,
    slug,
    author,
    views,
    image,
    category, _createdAt,pitch, author -> {
    _id, name, image
    }   
}`);
