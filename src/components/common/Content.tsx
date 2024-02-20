import { ContentType } from "@/model/navBar";
import Link from "next/link";

export default function Content({
  title,
  description,
  listOfImage,
  listOfDescription,
  listOfImageDescription,
}: Readonly<ContentType>) {
  return (
    <section className="w-full text-lg font-medium text-slate-800 mt-8 md:mt-0">
      <div className="border-l-[5px] border-gray-950 px-2 ">
        <h2 className="text-2xl font-bold mt-4">{title}</h2>
      </div>
      {description && <p className="mt-2">{description}</p>}
      {listOfDescription && (
        <ul className="mt-2 list-disc list-inside flex flex-col gap-2">
          {listOfDescription.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {listOfImageDescription && (
        <div className="mt-5 flex flex-col gap-5">
          {listOfImageDescription.map(({ description, image, title, url }) => (
            <Link href={url} key={image} className="flex gap-2">
              <img
                src={image}
                alt={description}
                className="w-1/4 rounded-lg overflow-hidden shadow-sm"
              />
              <div>
                <h3 className="text-xl font-semibold ">{title}</h3>
                <p className="">{description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
      {listOfImage && (
        <div className="mt-5 flex gap-5">
          {listOfImage.map((image) => (
            <img
              key={image}
              src={image}
              alt={title}
              className="w-20 rounded-lg overflow-hidden shadow-sm"
            />
          ))}
        </div>
      )}
    </section>
  );
}
