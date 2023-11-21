import Image from "next/image";
import { PEOPLE_URL } from "@/constants";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

export const CampCard = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className="h-full w-full min-w-[1100px] lg:rounded-r-5xl 2xl:rounded-5xl relative">
      <Image src={`/assets/img/${backgroundImage}`} alt={title} fill className="object-cover object-center w-full h-full" />
      <div className="relative flex flex-col items-start justify-between h-full p-6 lg:px-20 lg:py-10">
        <div className="flex items-center justify-center gap-4">
          <div className="p-4 rounded-full bg-green-50">
            <Image src="/assets/img/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-lg font-bold text-white">{title}</h4>
            <p className="text-sm text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image className="inline-block w-10 h-10 rounded-full" src={`/assets/img/${url}`} key={url} alt="person" width={52} height={52} />
            ))}
          </span>
          <p className="font-bold text-white md:text-xl">{peopleJoined}</p>
        </div>
        I
      </div>
    </div>
  );
};
