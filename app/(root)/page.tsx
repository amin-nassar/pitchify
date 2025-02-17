import { SearchForm } from "@/app/components";

interface IPage {
  searchParams: Awaited<{ query?: string }>;
}

export default async function Page({ searchParams }: IPage) {
  const { query } = await searchParams;
  return (
    <section className="hero-container">
      <h1 className="heading">
        Pitch your Startup, <br /> Connect with Entrepreneurs
      </h1>

      <p className="sub-heading !max-w-3xl">
        Share your ideas, gather votes, and gain the traction needed to bring
        your startup to life.
      </p>

      <SearchForm query={query} />
    </section>
  );
}
