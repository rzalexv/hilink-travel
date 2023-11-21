import Image from "next/image";

export const Guide = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="container w-full pb-24">
        <Image src="/assets/img/camp.svg" alt="camp" width={50} height={51} />
        <p className="mb-3 -mt-1 text-lg uppercase text-green-50">We are here for you</p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="font-bold text-[40px] lg:text-[64px] xl:max-w-[390px]">Guide You to Easy Path</h2>
          <p className=" text-gray-30 xl:max-w-[520px]">Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
        </div>
      </div>

      <div className="relative flex items-center w-full justify-normal 2xl:container">
        <Image src="/assets/img/boat.png" alt="boat" width={1440} height={580} className="object-cover object-center w-full 2xl:rounded-5xl" />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image src="/assets/img/meter.svg" alt="meter" width={16} height={158} className="w-auto h-full" />
          <div className="flex flex-col items-center justify-between">
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between w-full">
                <p className="text-gray-20">Destination</p>
                <p className="font-bold text-green-50">48 min</p>
              </div>
              <p className="mt-2 text-xl font-bold">Aguas Calientes</p>
            </div>

            <div className="flex flex-col w-full">
              <p className="text-gray-20">Start track</p>
              <h4 className="mt-2 text-xl font-bold whitespace-nowrap">Wonorejo Pasuruan</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
