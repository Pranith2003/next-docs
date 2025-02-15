import Link from "next/link";

export default async function Articles({
  params,
  searchParams,
}: {
  params: Promise<{ articlesId: string }>;
  searchParams?: Promise<{ lang?: "en" | "fr" | "sp" }>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};

  const { articlesId } = resolvedParams;
  const lang = resolvedSearchParams.lang || "en";

  return (
    <>
      <h1 className="font-bold items-center">Articles</h1>
      <div className="m-10">
        <h2>Article: {articlesId}</h2>
        <p>Selected Language: {lang}</p>
      </div>
      <hr />
      <p>Other languages:</p>
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
