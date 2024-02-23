import ContentSection from "@/components/ContentSection";
import HeaderSection from "@/components/HeaderSection";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <main className="">
      <Analytics />
      <HeaderSection />
      <ContentSection />
    </main>
  );
}
