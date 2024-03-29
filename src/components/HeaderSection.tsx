import Link from "next/link";

export default function HeaderSection() {
  return (
    <header className="flex justify-center items-center flex-col p-7 border-b shadow-xl">
      <div
        className="w-44 h-44 rounded-full shadow-md"
        style={{
          backgroundImage: "url('/박건규.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <h1 className="text-2xl font-bold mt-4">박건규</h1>
      <div className="px-2 py-1 bg-emerald-400 rounded-lg">
        <p className="">에코노베이션 26기 FE</p>
      </div>

      <ul className="flex flex-col md:flex-row md:gap-40 gap-5 mt-10 text-xl font-semibold cursor-default">
        <li className="after:border-[0.15rem] after:mt-2 after:block after:border-emerald-400">
          Portfolio
        </li>
        <li className="text-gray-400">Resume</li>
        <Link href={"https://www.instagram.com/gyu_gyupark/?hl=ko"}>
          <li className="text-gray-400">Contact</li>
        </Link>
      </ul>
    </header>
  );
}
