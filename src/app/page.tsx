export default function Home() {
  return (
    <main className="h-full w-11/12 mx-auto grid grid-cols-2">
      <section className="h-full bg-slate-400 flex flex-col gap-5 ">
        <div className=" flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold">Stack!</h1>
          <p className="text-2xl font-semibold">
            에코노베이션 26기 박건규 입니다!
          </p>
        </div>{" "}
        <div className=" flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold">About Me!</h1>
          <p className="text-2xl font-semibold">
            에코노베이션 26기 박건규 입니다!
          </p>
        </div>
      </section>
      <section className="h-full bg-slate-400 flex justify-center items-center flex-col">
        <div
          className=" w-96 h-96 bg-slate-300 rounded-full"
          style={{
            // backgroundImage: "url(/박건규.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div>
          <h1 className="text-6xl font-bold">I am..</h1>
          <p className="text-2xl font-semibold">
            에코노베이션 26기 박건규 입니다!
          </p>
        </div>
      </section>
    </main>
  );
}
