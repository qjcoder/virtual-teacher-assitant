import { ButtonBlue, ButtonWhite } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex justify-between gap-14 ml-16 mr-16 mb-6 items-center">
        {/* text */}
        <div className="flex  flex-col items-center">
          <div className="leading-normal">
            <h1 className="font-poppins text-[48px] font-bold  mt-4 mb-4 items-center">
              Getting <span className="text-[#0093EF]">Quality</span> Education
              Is Now More
              <span className="text-[#0093EF]"> Easy</span>
            </h1>
          </div>
          <div className="flex gap-2 mr-6">
            <ButtonBlue />
            <ButtonWhite />
          </div>
        </div>
        {/* Image */}
        <div>
          <Image
            src="/home.png"
            width={600}
            height={600}
            alt="Main Screen Image"
          />
        </div>
      </div>
    </main>
  );
}
