import "atropos/css";
import Atropos from "atropos/react";
import Image from "next/image";
import { BackgroundPattern } from ".";
import Pokeball from "../../public/pokeball.png";


export function MagicCard({
  number,
  img,
  name,
  leftBottom,
  bottomRight
}: {
  number: string;
  img: string;
  name: string;
  leftBottom?: string;
  bottomRight?: string;
}) {
  const color = `rgba(98,255,0,1)`;
  const borderColor = undefined;

  return (
    <div className="relative z-10 w-full mx-auto aspect-video h-[30rem] flex justify-center items-center">
      <div className="h-full opacity-100 isolate aspect-video">
        <div className="h-full sm:px-12 mt-8">
          <Atropos
            id="ticket"
            className="block w-full h-auto mx-auto aspect-video rounded-2xl bg-transparent"
          >
            <div
              className="block h-full overflow-hidden border-2 border-yellow-300 opacity-100 rounded-2xl bg-black"
              style={{ borderColor }}
            >
              <div className="relative flex flex-col items-center h-full overflow-hidden">
                <div className="absolute inset-0 flex items-start justify-center ">
                  <div className="h-full w-full [mask-image:linear-gradient(black_10%,transparent)]">
                    <BackgroundPattern />
                  </div>
                </div>

                <div className="absolute top-2 right-2 p-6">
                  <span className="sr-only">Pokeball</span>

                  <div className="relative w-16 flex items-center justify-end">
                    <Image
                      width={50}
                      height={50}
                      alt={name}
                      src={Pokeball}
                    />

                    <div className="absolute inset-0 opacity-80 contrast-125 blur-xl animate-pulse">
                      <Image
                        width={100}
                        height={100}
                        alt={name}
                        src={Pokeball}
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-2 left-2 p-6">
                  <div className="relative text-left font-display font-semibold uppercase tracking-[0.2em] z-50">
                    <div className="absolute inset-0 shadow-inner -z-10 "></div>
                    <h1 className="sr-only">Pokemon</h1>
                    {name && (
                      <h2 className="mb-4 text-2xl font-bold" style={{ color }}>
                        {name}
                      </h2>
                    )}

                    <div className="z-10 mt-1 text-xl leading-6 text-violet-300 text-shadow-xl">
                      {bottomRight}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute items-center p-4 overflow-hidden font-mono text-white md:p-6 left-2 top-2">
                <span className="block text-zinc-200">Nº Pokemon</span>
                <strong className="text-3xl font-extrabold">
                  #{number != null ? number.toString().padStart(4, "0") : ""}
                </strong>
              </div>
              <div className="absolute z-50 items-center p-4 overflow-hidden font-mono text-white md:p-6 right-2 bottom-2">
                <span className="block mb-2 text-sm text-right text-zinc-300">
                  {leftBottom} kg
                </span>
                <div className="absolute inset-0 -z-10 blur-sm bg-gradient-radial from-black via-80% via-transparent to-transparent" />
              </div>


              <div className="absolute bottom-0 z-0 items-center overflow-hidden -right-2 w-96">
                {img && (
                  <Image
                    width={300}
                    height={300}
                    alt={name}
                    src={img}
                    className="opacity-90 saturate-50 contrast-125"
                  />
                )}
              </div>
            </div>
          </Atropos>
        </div>
      </div>
    </div>
  );
}
