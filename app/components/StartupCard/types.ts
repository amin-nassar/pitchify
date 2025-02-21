import { Author, Startup } from "@/sanity.types";

export type StartupTypeCard = Omit<Startup, "author"> & {
  author: Author;
};
