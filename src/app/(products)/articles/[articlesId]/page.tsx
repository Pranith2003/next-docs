import Link from "next/link";

export default function Arcticles({
  params,
  searchParams,
}: {
  params: { articlesId: string };
  searchParams: { lang?: "en" | "fr" | "sp" };
}) {
  const { articlesId } = params;
  const { lang = "en" } = searchParams;
  console.log(articlesId);
  return (
    <>
      <h1 className="font-bold items-center">Articles</h1>
      <div className="m-10">
        <h2>Article: {articlesId}</h2>
        <p>Selected Language: {lang}</p>
      </div>
      <hr />

      <p>Other langauges: </p>
      <ul>
        <li>
          <Link href={`/articles/${articlesId}?lang=en`}>English</Link>
        </li>
        <li>
          <Link href={`/articles/${articlesId}?lang=sp`}>Spanish</Link>
        </li>
        <li>
          <Link href={`/articles/${articlesId}?lang=fr`}>French</Link>
        </li>
      </ul>
    </>
  );
}
