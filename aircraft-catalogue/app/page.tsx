import { AircraftCard, CustomFilter, Hero, SearchBar } from "@/components";
import ShowMore from "@/components/ShowMore";
import { engine, range } from "@/constants/constants";
import { fetchAircrafts } from "@/utils";

export default async function Home({ searchParams }) {
  const allAircrafts = await fetchAircrafts({
    manufacturer: searchParams.manufacturer || "",
    model: searchParams.model || "",
    limit: searchParams.limit || 10,
    engine: searchParams.engine || "",
    range: searchParams.range || "",
  });

  const isDataEmpty =
    !Array.isArray(allAircrafts) || allAircrafts.length < 1 || !allAircrafts;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Aircraft Catalogue</h1>
          <p>Explore the aircrafts you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="engine" options={engine} />
            <CustomFilter title="range" options={range} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allAircrafts?.map((aircraft, i) => (
                <AircraftCard aircraft={aircraft} key={i} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allAircrafts.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allAircrafts?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
