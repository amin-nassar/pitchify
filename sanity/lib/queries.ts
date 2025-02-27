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

export const STARTUP_BY_ID_QUERY = defineQuery(`
      *[_type == "startup" && _id == $id][0] {
  _id,
    title,
    slug,
    views,
    image,
    category,
    description,
    _createdAt,
    pitch, 
    author -> {
    _id, name, image, username
    }   
}`);

export const STARTUP_VIEWS_QUERY = defineQuery(`
  *[_type == "startup" && _id == $id][0] {
    _id, views
  }
  `);

export const AUTHOR_BY_GOOGLE_ID_QUERY = defineQuery(`
  *[_type == "author" && id == $id][0] {
  _id,
  id,
  name,
  username,
  email,
  image,
  bio,
  }
  `);

export const AUTHOR_BY_ID_QUERY = defineQuery(`
  *[_type == "author" && _id == $id][0]{
      _id,
      id,
      name,
      username,
      email,
      image,
      bio
  }
  `);

export const STARTUPS_BY_AUTHOR_QUERY = defineQuery(`
    *[_type == "startup" && author._ref == $id]  | order(_createdAt desc) {
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
