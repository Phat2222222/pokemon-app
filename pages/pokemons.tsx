import Image from "next/image";

export default function Test() {
  return (
    <div className="container mx-auto px-10 pb-20 ">
      <div className="grid place-items-center py-20 ">
        <Image src="/pokemon.png" alt="pokemon-logo" width={400} height={150} />
      </div>

      <div className="grid grid-flow-row grid-cols-auto gap-12">
        {new Array(20).fill(null).map((_, index) => (
          <div
            className="relative w-full pt-[100%] bg-yellow-200 rounded-lg text-black text-2xl"
            key={index}
          >
            <div className="absolute top-0 left-0 grid place-items-center w-full h-full">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                  index + 1
                }.svg`}
                alt="pokemon"
                layout="fill"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
