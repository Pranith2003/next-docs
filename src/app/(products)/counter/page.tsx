import { Counter } from "./counter";

export const metadata = {
  title: "This is a counter app",
  description: "This only works for Incrementing",
};

export default function CounterPage() {
  return (
    <>
      <Counter />
    </>
  );
}
