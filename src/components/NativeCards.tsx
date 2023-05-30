import { getOldPrice, getPrice } from "../utils";
import { DataProps } from "../type";

const NativeCards = ({ native }: { native: DataProps }) => {
  const {nbLessons, price} = native
  let total_cost = price?.primary

  //calculating the initial price
  const initial_price = getPrice(total_cost, nbLessons)
  
  return (
    <div className=" w-full bg-white rounded-[10px]  ml-4">
      <div className="px-[24%]">
        <div className="font-normal   py-2 flex flex-col items-center w-full relative ">
          <p className="border-b border-red-200 border-dashed font-bold mb-4 w-full text-center">
            {nbLessons} Classes
          </p>
          <div className="flex items-center text-sm">
            <s className="text-[#505050]">
              {getOldPrice(initial_price)} &yen;
            </s>
            <p className="border border-black px-[2px] md:px-[4px] py-[1px] rounded-full font-bold ml-2">
              - 40%
            </p>
          </div>
          <p className="text-[#CE4A37] text-4xl font-extrabold my-2">
            {initial_price} &yen;
          </p>
          <p className="text-sm">per class</p>
        </div>
      </div>

      <div className="bg-[#F9F9F9] w-full rounded-bl-[10px] rounded-br-[10px] mt-2">
        <div className="flex items-center justify-center mb-4">
          <s className="mr-2 opacity-40">
            {getOldPrice(total_cost)} &yen;
          </s>
          <p className="font-bold">{total_cost} &yen;</p>
        </div>
        <div className=" justify-center flex items-center w-full pb-4 ">
          <button className="bg-[#FFAC01] py-2 mx-4 md:mx-0 px-12  text-[#111111] rounded-3xl font-semibold text-md">
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default NativeCards;
