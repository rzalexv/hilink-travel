import Image from "next/image";
import { CampSlider } from ".";

export const Camp = () => {
  return (
    <section className="py-10 lg:py-20 lg:mb-10 xl:mb-20 max-w-[1536px] mx-auto">
      <CampSlider />

      <div className="container relative z-50 flex items-center justify-end px-6 mt-10 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="text-2xl text-white capitalize md:text-4xl 2xl:text-6xl">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="mt-5 text-sm text-white xl:text-base">Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That&apos;s why we are here for those of you who want to start an adventure</p>
          <Image src="/assets/img/quote.svg" alt="camp-2" width={186} height={219} className="camp-quote" />
        </div>
      </div>
    </section>
  );
};
