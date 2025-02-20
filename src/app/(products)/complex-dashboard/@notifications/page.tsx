import { Card } from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <>
      <Card>
        <div className="flex flex-col justify-center items-center">
          <div>Default Notification</div>
          <div className="underline text-sm text-blue-400">
            <Link href="/complex-dashboard/archived">Archived</Link>
          </div>
        </div>
      </Card>
    </>
  );
}
