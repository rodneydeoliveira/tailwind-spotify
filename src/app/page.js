import Image from "next/image";
import {
  LuHome,
  LuSearch,
  LuLibrary,
  LuHeart,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";
import { IoMdPlay, IoIosRepeat } from "react-icons/io";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import Card from "../components/Card";
import Genres from "../components/Genres";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-64 bg-zinc-950 pt-2 px-4">
          <a
            href="#"
            className=" p-2 pt-2 flex items-center gap-2 text-xs font-semibold hover:bg-zinc-600"
          >
            <LuHome className="w-4 h-4" />
            Home
          </a>
          <a
            href="#"
            className=" p-2 pt-2 flex items-center gap-2 text-xs font-semibold hover:bg-zinc-600"
          >
            <LuSearch className="w-4 h-4" />
            Search
          </a>
          <a
            href="#"
            className=" p-2 pt-2 flex items-center gap-2 text-xs font-semibold hover:bg-zinc-600"
          >
            <LuLibrary className="w-4 h-4" />
            Your Library
          </a>
          <div className="mt-4 border-t-2 border-t-zinc-700/40 flex flex-col gap-2 pt-4 text-sm font-light ">
            <a href="#" className="h-6 hover:bg-zinc-600">
              Eletronic
            </a>
            <a href="#" className="h-6 hover:bg-zinc-600">
              Blues
            </a>
            <a href="#" className="h-6 hover:bg-zinc-600">
              Acoustic
            </a>
            <a href="#" className="h-6 hover:bg-zinc-600">
              Top Brasil
            </a>
            <a href="#" className="h-6 hover:bg-zinc-600">
              Country
            </a>
          </div>
        </aside>
        <main className="flex flex-col flex-1">
          <header className="flex pt-2 gap-2 pl-4 h-12 items-center">
            <LuChevronLeft className="w-6 h-6 rounded-full bg-zinc-950 pr-0.5" />
            <LuChevronRight className="w-6 h-6 rounded-full bg-zinc-950 pl-0.5" />
            <input
              placeholder="Artists, songs or podcasts"
              className="h-6 w-72 pl-2 rounded-full text-black"
            />
          </header>
          <div className=" p-4 gap-4 content-between flex flex-col">
            <h2 className="font-semibold text-3xl">Recent searches</h2>
            <section className="flex flex-wrap justify-between">
              <Card imagem="/eli9.png" singer="Beyonce" category="Artist" />
              <Card imagem="/eli8.png" singer="Beyonce" category="Artist" />
              <Card imagem="/eli9.png" singer="Beyonce" category="Artist" />
              <Card imagem="/eli8.png" singer="Beyonce" category="Artist" />
              <Card imagem="/eli9.png" singer="Beyonce" category="Artist" />
            </section>
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold text-3xl">Your Top Genres</h1>

              <section className="flex justify-between">
                <div className="bg-pink-700 w-80 h-32 rounded-md">
                  <h2 className="font-semibold text-3xl pl-4 pt-2">Hip Hop</h2>
                </div>
                <div className="bg-teal-400 w-80 h-32 rounded-md">
                  <h2 className="font-semibold text-3xl pl-4 pt-2">
                    Eletronic
                  </h2>
                </div>
                <div className="bg-pink-300 w-80 h-32 rounded-md">
                  <h2 className="font-semibold text-3xl pl-4 pt-2">
                    Alternative
                  </h2>
                </div>
              </section>
            </div>
          </div>
        </main>
        <aside className="w-44 bg-zinc-950 pt-2 px-4 items-end">
        <h2>Friends Activity</h2>
      </aside>
      </div>
     
      <footer className="p-4 border-t-2 border-t-zinc-500 flex">
        <a href="##" className="flex items-center gap-2">
          <Image
            src="/album.jpg"
            width={60}
            height={60}
            alt="Album Joao Paulo e Daniel"
          />
          <div className="flex items-center gap-6">
            <div className="flex flex-col gap-1">
              <span>João Paulo & Daniel</span>
              <span className="text-xs font-light">Nelore Valente</span>
            </div>
            <LuHeart />
          </div>
        </a>
        <div className="flex flex-col flex-1 self-center items-center gap-4">
          <div className="flex items-center gap-4">
            <MdSkipPrevious className="size-8" />
            <IoMdPlay className="text-black rounded-full bg-white w-8 h-8 p-1.5 pl-2" />
            <MdSkipNext className="size-8" />
            <IoIosRepeat className="size-8" />
          </div>
          <div className="flex gap-2">
            <span className="font-light text-sm text-zinc-200">2:30</span>
            <div className="bg-zinc-400 h-2 w-96 self-center rounded-full">
              <div
                className="bg-zinc-600 h-full rounded-full"
                style={{ width: "50%" }}
              />
            </div>
            <span className="font-light text-sm text-zinc-200">5:00</span>
          </div>
        </div>
      </footer>
      
    </div>
    
  );
}
