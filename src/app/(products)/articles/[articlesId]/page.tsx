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

  const langChanger = (lang: string) => {
    if (lang === "en") {
      return "English";
    } else if (lang === "fr") {
      return "French";
    } else if (lang === "sp") {
      return "Spanish";
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-4">Articles</h1>
      <div className="bg-gray-100 rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-semibold">Article: {articlesId}</h2>
        <p className="text-lg text-gray-600">Selected Language: {langChanger(lang)}</p>
      </div>
      <hr className="my-6 border-gray-300" />
      <p className="text-lg font-medium">Other languages:</p>
      <ul className="flex gap-4 mt-4">
        <li>
          <Link
            href={`/articles/${articlesId}?lang=en`}
            className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            English
          </Link>
        </li>
        <li>
          <Link
            href={`/articles/${articlesId}?lang=sp`}
            className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            Spanish
          </Link>
        </li>
        <li>
          <Link
            href={`/articles/${articlesId}?lang=fr`}
            className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            French
          </Link>
        </li>
      </ul>
    </div>
  );
}
