import Image from "next/image";
import { FEATURES } from "@/constants";

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex flex-col items-start flex-1 w-full">
      <div className="p-4 rounded-full lg:p-7 bg-green-50">
        <Image src={`/assets/img/${icon}`} alt="map" width={28} height={28} />
      </div>
      <h2 className="mt-5 text-xl font-bold capitalize lg:text-3xl">{title}</h2>
      <p className="mt-5 bg-white/80 text-gray-30 lg:mt-8 lg:bg-none">{description}</p>
    </li>
  );
};

export const Features = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 overflow-hidden">
      <Image src="/assets/img/feature-bg.png" alt="Feature pattern" fill className="object-cover object-center w-full" />
      <div className="container relative flex justify-end w-full">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image src="/assets/img/phone.png" alt="phone" width={440} height={1000} className="feature-phone" />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image src="/assets/img/camp.svg" alt="camp" width={50} height={51} className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]" />
            <h2 className="font-bold text-[40px] lg:text-[64px]">Our Features</h2>
          </div>
          <ul className="grid gap-10 mt-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem key={feature.title} title={feature.title} icon={feature.icon} description={feature.description} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
