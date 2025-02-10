import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Dom" },
      _id: 1,
      description: "This is a description",
      image:
        "data:image/jpeg;base64,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",
      category: "Tech",
      title: "Need new phone",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your start up <br /> Connect with Entrepeneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All startups"}
          <ul className="mt-7 card_grid">
            {posts?.length > 0 ? (
              posts.map((post, ind) => (
                <StartupCard key={post._id} post={post} />
              ))
            ) : (
              <p className="no-results">No startups found</p>
            )}
          </ul>
        </p>
      </section>
    </>
  );
}
