
import Image from "next/image";

export default function Home() {
  return (
    <div >
    <main className="flex h-[80vh] flex-col items-center justify-between p-24">
      
        <h1 className="text-4xl  text-blue-800 font-bold justify-items-center justify-center ">
      Welcome to my Blogging Website!
      </h1>
      <p className=" text-2xl text-black font-semibold ">
        This is a blog created by using Next.js and tailwind css.
      </p>
      
      
      <a href="/about" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-300">
Learn more
      </a>

      
      
    </main>
    </div>
  );
}
