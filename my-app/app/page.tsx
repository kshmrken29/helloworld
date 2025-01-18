import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-8">
      <main className="flex flex-col items-center gap-8">
        <Image
          src="/img/Me.jpg"
          alt="Profile picture" 
          width={180}
          height={38}
          priority
          className="w-fit"
        />
        <h3 className="text-lg text-black">
          Kenneth H. Alvarado
        </h3>
        <h1 className="text-black">
          BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY
        </h1>
      </main>
    </div>
  );
}