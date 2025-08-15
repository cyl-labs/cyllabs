import { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";
import HomePageClient from "./components/home/HomePageClient";

export const metadata: Metadata = {
  title: "Web Design & Development for Singapore SMEs",
  description:
    "Cyllabs builds high-performance websites for Singapore SMEs that are designed to attract and convert. Get a free consultation today.",
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

export default function Home() {
  return <HomePageClient />;
}
