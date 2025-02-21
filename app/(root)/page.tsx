import { SearchForm, StartupCard } from "@/app/components";
import { StartupTypeCard } from "../components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
interface IPage {
  searchParams: Awaited<{ query?: string }>;
}

export default async function Page({ searchParams }: IPage) {
  const { query } = await searchParams;
  const posts = await client.fetch(STARTUP_QUERY);

  return (
    <>
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
      <section className="section-container">
        <p className="text-30-semibold">
          {query ? `Search results for: "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card-grid">
          {posts.length ? (
            posts.map((post: StartupTypeCard) => {
              return <StartupCard key={post._id} post={post} />;
            })
          ) : (
            <p className="text-black-100 text-sm font-normal"></p>
          )}
        </ul>
      </section>
    </>
  );
}
