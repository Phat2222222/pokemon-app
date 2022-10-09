import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className="relative w-screen h-screen grid place-items-center overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        playsInline
        muted
        loop
      >
        <source src="/pokemon.mp4" type="video/mp4; codecs=hvc1" />
        <source src="/pokemon.webm" type="video/webm; codecs=vp9" />
      </video>

      <Image src="/pokemon.png" alt="pokemon-logo" width={800} height={300} />
      <button
        className="absolute bottom-24 bg-yellow-400 text-gray border-4 border-blue-600 rounded-md py-2 px-5 font-semibold"
        onClick={() => router.push("/pokemons")}
      >
        Explore Pokemon
      </button>
    </div>
  );
};

export default Home;
