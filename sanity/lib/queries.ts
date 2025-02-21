import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(`
    *[_type == "startup" && defined(slug.current)] | order(_createdAt desc) {
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
