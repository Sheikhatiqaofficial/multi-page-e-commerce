import React from "react";
import Image from "next/image";

const CeramicAbout = () => {
  return (
    <div className="w-full bg-white opacity-1 sm:ml-0 sm:mt-[80px] lg:mt-[120px] mb-[30px]">
      {/* Heading Section */}
      <div className="w-full h-[39px] mt-[100px] mx-auto text-center lg:text-left opacity-1">
        <h3 className="text-[#2A254B] text-[35px] font-normal leading-[39.36px] lg:ml-[42px]">
          You might also like
        </h3>
      </div>

      {/* Image Grid */}
      <div className="flex flex-col sm:flex-row justify-between gap-[16px] sm:gap-[24px] mt-[52px] mx-[20px] sm:mx-[70px] lg:gap-[0px]">
        {/* Image 1 */}
        <div className="w-full sm:w-[305px] h-[462px] transform transition-transform hover:translate-y-[-10px]">
          <div className="w-full h-[375px]">
            <Image
              src="/skirt-1.webp"
              alt="SKIRT"
              width={305}
              height={375}
              className="w-full h-full opacity-1"
            />
          </div>
          <h4 className="text-[#2A254B] text-[20px] font-normal mt-[25px]">
            Skirt
          </h4>
          <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">$250</p>
        </div>

        {/* Image 2 */}
        <div className="w-full sm:w-[305px] h-[462px] transform transition-transform hover:translate-y-[-10px]">
          <div className="w-full h-[375px]">
            <Image
              src="/jacket-1.webp"
              alt="jACKET"
              width={305}
              height={375}
              className="w-full h-full opacity-1"
            />
          </div>
          <h4 className="text-[#2A254B] text-[20px] font-normal mt-[25px]">
           CLASSIC jACKET
          </h4>
          <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">$150</p>
        </div>

        {/* Image 3 */}
        <div className="w-full sm:w-[305px] h-[462px] transform transition-transform hover:translate-y-[-10px]">
          <div className="w-full h-[375px]">
            <Image
              src="/sports-1.webp"
              alt="The Silky Vase"
              width={305}
              height={375}
              className="w-full h-full opacity-1"
            />
          </div>
          <h4 className="text-[#2A254B] text-[20px] font-normal mt-[25px]">
          Running Shoes
          </h4>
          <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">$150</p>
        </div>

        {/* Image 4 */}
        <div className="w-full sm:w-[305px] h-[462px] hidden sm:block transform transition-transform hover:translate-y-[-10px]">
          <div className="w-full h-[375px]">
            <Image
              src="/shirt-1.webp"
              alt="The Lucky Lamp"
              width={305}
              height={375}
              className="w-full h-full opacity-1"
            />
          </div>
          <h4 className="text-[#2A254B] text-[20px] font-normal mt-[25px]">
          Dyed Cotton Shirt
          </h4>
          <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">$399</p>
        </div>
      </div>


      <button className="w-full lg:w-[170px] h-[56px] bg-[#F9F9F9] text-[#2A254B] text-[16px] font-normal leading-[24px] transition-all hover:bg-black hover:text-gray-400 flex justify-center items-center transition-all mt-[30px] lg:ml-[709px]">
        View Collection

      </button>
    </div>

  );
};

export default CeramicAbout;
