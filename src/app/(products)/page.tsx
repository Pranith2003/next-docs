import Link from "next/link";
import { HandleClick } from "./navlinks";
// import { useRouter } from "next/navigation"; //works in client comp
export default function Home() {
  // const router = useRouter();
  // await new Promise((reslove) => {
  //   setTimeout(() => {
  //     reslove("Intentional Delay");
  //   }, 2000);
  // });
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex border-2 border-black rounded-lg px-4 py-3 w-44 justify-center items-center mt-2">
          <HandleClick />
        </div>
      </div>

      <h1 className="text-2xl font-bold text-center mt-4">
        Welcome to home page
      </h1>
      <div className="flex gap-2 items-center justify-center mb-0">
        <p className="font-medium">Read us in:</p>
        <Link
          href="/articles/popular-news?lang=en"
          className="text-blue-600 underline hover:text-blue-800"
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
