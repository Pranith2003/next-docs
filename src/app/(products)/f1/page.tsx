import Link from "next/link";

export default function F1() {
  return (
    <>
      <h1>F1 Folder</h1>
      <div className="flex flex-col gap-4 p-10">

        <Link href="/f1/f2">Route to F2</Link>
        <Link href="/f3">Route to F3</Link>
      </div>
    </>
  );
}
