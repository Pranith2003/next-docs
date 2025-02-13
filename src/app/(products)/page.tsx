import Link from "next/link";
export default async function Home() {
  await new Promise((reslove) => {
    setTimeout(() => {
      reslove("Intentional Delay");
    }, 2000);
  });
  return (
    <>
      <h1 className="text-2xl font-bold">Welcome to home page</h1>
      <div className="flex gap-2 items-center ">
        <p className="font-medium">Read us in:</p>
        <Link
          href="/articles/popular-news?lang=en"
          className="text-blue-600  underline hover:text-blue-800"
        >
          English
        </Link>
        <Link
          href="/articles/popular-news?lang=fr"
          className="text-blue-600 underline hover:text-blue-800"
        >
          French
        </Link>
      </div>
    </>
  );
}
