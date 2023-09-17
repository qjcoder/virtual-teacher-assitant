import { ButtonBlue, ButtonWhite, Footer, Header } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex justify-between items-center mr-4">
        <Header />
        <div className="flex justify-between gap-2">
          <Link href="/signin">
            <ButtonWhite />
          </Link>
          <Link href="/dashboard">
            <ButtonBlue />
          </Link>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between gap-6 ml-16 mr-16 mb-6 items-center">
        {/* text */}
        <div className="flex flex-col items-center">
          <div className="leading-normal">
            <h1 className="font-poppins md:text-[48px] text-[18px] font-bold  mt-4 mb-4 items-center">
              Getting <span className="text-[#0093EF]">Quality</span> Education
              Is Now More
              <span className="text-[#0093EF]"> Easy</span>
            </h1>
          </div>
          <div className="flex gap-2 mr-6  ">
            <ButtonBlue />
            <ButtonWhite />
          </div>
        </div>
        {/* Image */}
        <div>
          <Image
            src="/home.png"
            width={900}
            height={900}
            alt="Main Screen Image"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
