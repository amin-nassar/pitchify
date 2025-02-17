import { SearchForm, StartupCard } from "@/app/components";
import { Post } from "../components/StartupCard/StartupCard";
interface IPage {
  searchParams: Awaited<{ query?: string }>;
}

export default async function Page({ searchParams }: IPage) {
  const { query } = await searchParams;

  const posts: Post[] = [
    {
      _createdAt: new Date(),
      views: 55,
      _id: 1,
      author: { _id: 1, name: "Amin" },
      category: "Health",
      description: "Description",
      image:
        "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "iO Health",
    },
  ];

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
            posts.map((post) => {
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
