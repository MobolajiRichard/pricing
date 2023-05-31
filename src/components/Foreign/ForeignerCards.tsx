import { getOldPrice, getPrice } from "../../utils";
import Table from "./Table";
import { DataProps } from "../../type";
import { useMemo } from "react";

const ForeignerCards = ({ foreign }: { foreign: DataProps; }) => {
  const price = useMemo(() => getPrice(foreign.price?.primary, foreign.nbLessons), [foreign.price?.primary, foreign.nbLessons]);

  return (
    <div className=" w-full bg-white rounded-[10px] shadow-xl ml-4">
      <div className="font-normal  px-[24%] py-[3.5%] flex flex-col items-center w-full relative md:h-[225px] ">
        <p className="border-b border-[#CE4A37] border-dashed font-bold mb-[33px] w-full text-center text-[22px] capitalize">
          {foreign.plan?.toLowerCase()}
        </p>
        <div className="flex items-center text-sm">
          <s className="text-[#505050]">{getOldPrice(price)} &yen;</s>
          <p className="border border-black px-[2px] md:px-[4px] py-[1px] rounded-full font-bold ml-2">
            -40%
          </p>
        </div>
        <p className="text-[#CE4A37] text-[40px] leading-none my-1 font-extrabold ">
          {price} &yen;
        </p>
        <p className="text-sm">per class</p>
      </div>
      <Table data={{ ...foreign, totalPrice: price }} />
      <div className=" mt-5 justify-center flex items-center w-full pb-4 rounded-bl-[10px] rounded-br-[10px]">
        <button className="bg-[#FFAC01] py-2 mx-4 md:mx-0  px-12 text-[#111111] rounded-3xl font-semibold text-md">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default ForeignerCards;
