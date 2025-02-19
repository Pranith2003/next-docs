"use client";

import { Card } from "@/components/card";

export default function ErrorNotifications({ error }: { error: Error }) {
  return (
    <Card>
      <div>{error.message}</div>
    </Card>
  );
}
