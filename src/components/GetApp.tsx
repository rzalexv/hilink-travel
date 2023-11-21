import Image from "next/image";
import { Button } from ".";

export const GetApp = () => {
  return (
    <section className="flex items-center justify-center w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex flex-col items-start justify-center flex-1 w-full gap-12">
          <h2 className="font-bold text-[40px] lg:text-[64px] xl:max-w-[320px]">Get for free now!</h2>
          <p className="text-gray-10">Available on iOS and Android</p>
          <div className="flex flex-col w-full gap-3 whitespace-nowrap xl:flex-row">
            <Button href="#" title="App Store" icon="/assets/img/apple.svg" variant="btn_white" full />
            <Button href="#" title="Play Store" icon="/assets/img/android.svg" variant="btn_dark_green_outline" full />
          </div>
        </div>

        <div className="flex items-center justify-end flex-1">
          <Image src="/assets/img/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};
