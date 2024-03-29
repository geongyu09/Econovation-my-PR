import { contentData } from "@/constants/contentData";
import Content from "./common/Content";

export default function ContentSection() {
  return (
    <section className="md:w-8/12 w-10/12 mx-auto mt-10 grid md:grid-cols-2 gap-3">
      {contentData.map((content) => (
        <Content key={content.title} {...content} />
      ))}
    </section>
  );
}
