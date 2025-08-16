import { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";
import HomePageClient from "./components/home/HomePageClient";

export const metadata: Metadata = {
  title: "Home | cyllabs",
  description:
    "cut your losses.",
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

export default function Home() {
  return <HomePageClient />;
}
