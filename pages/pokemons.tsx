import Image from "next/image";

export default function Test() {
  return (
    <>
      <div className="grid place-items-center py-20 ">
        <Image src="/pokemon.png" alt="pokemon-logo" width={400} height={150} />
      </div>
      <div className=" grid grid-rows-4 grid-flow-col gap-4">
        {new Array(20).fill(null).map((_, index) => (
          <div className="w-64 h-64 bg-yellow-200 rounded-lg" key={index}>a</div>
        ))}
      </div>
    </>
  );
}
