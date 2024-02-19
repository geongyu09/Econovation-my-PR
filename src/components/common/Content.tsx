type Props = {
  title: string;
  description?: string;
  listOfDescription?: string[];
  listOfImageDescription?: {
    image: string;
    description: string;
  }[];
  listOfImage?: string[];
};

export default function Content({
  title,
  description,
  listOfImage,
  listOfDescription,
  listOfImageDescription,
}: Readonly<Props>) {
  return (
    <section className="">
      <div className="border-l-[5px] border-gray-950 px-2 ">
        <h2 className="text-2xl font-bold mt-4">{title}</h2>
      </div>
      {description && <p className="mt-2">{description}</p>}
      {listOfDescription && (
        <ul className="mt-2 list-disc list-inside">
          {listOfDescription.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {listOfImageDescription && (
        <div className="mt-5 flex flex-col gap-5">
          {listOfImageDescription.map(({ description, image }) => (
            <div key={image} className="flex gap-2">
              <img
                src={image}
                alt={description}
                className="w-1/4 rounded-lg overflow-hidden shadow-sm"
              />
              <p>{description}</p>
            </div>
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
