import { Card } from "@/components/card";
import Link from "next/link";

export default function Archived() {
  return (
    <Card>
      <div className="flex flex-col justify-center items-center">
        <div>Archived Notifications</div>
        <div className="underline text-sm text-blue-400">
          <Link href="/complex-dashboard">Default Notifications</Link>
        </div>
      </div>
    </Card>
  );
}
