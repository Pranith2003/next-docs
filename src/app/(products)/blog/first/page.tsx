import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "First Blog Page",
  },
};

export default function FirstBlog() {
  return <h1>First BLog Post</h1>;
}
