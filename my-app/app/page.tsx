import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src="/img/Me.jpg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
          className="mx-auto  w-fit"
        />
          <h3 className="text-lg text-center w-full text-black">
            Kenneth H. Alvarado
          </h3>
          <h1 className="text-black text-center w-full">
            Bacheclor of Science in Information Technology
          </h1>


      </main>
    </div>
  );
}
