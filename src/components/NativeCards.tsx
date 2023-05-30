import { getOldPrice } from "../utils"
import { PlanPrice } from "../type"
const NativeCards = ({native}:{native:PlanPrice}) => {
  return (
    <div className=" w-full bg-white rounded-[10px]  ml-4">
    <div className="px-[24%]">
      <div className="font-normal   py-2 flex flex-col items-center w-full relative ">
        <p className="border-b border-red-200 border-dashed font-bold mb-4 w-full text-center">
          5 Classes
        </p>
        <div className="flex items-center text-sm">
          <s className="text-[#505050]">{getOldPrice(native?.price)} &yen;</s>
          <p className="border border-black px-[2px] md:px-[4px] py-[1px] rounded-full font-bold ml-2">
            - 40%
          </p>
        </div>
        <p className="text-[#CE4A37] text-3xl md:text-4xl font-bold my-2">
          {native?.price} &yen;
        </p>
        <p className="text-sm">per class</p>
      </div>
    </div>

    <div className="bg-[#F9F9F9] w-full rounded-bl-[10px] rounded-br-[10px] mt-2">
      <div className="flex items-center justify-center mb-4">
        <s className="mr-2 opacity-40">
          {getOldPrice(native?.total_cost)} &yen;
        </s>{" "}
        <p className="font-bold">
          {native?.total_cost} &yen;
        </p>
      </div>
      <div className=" justify-center flex items-center w-full pb-4 ">
        <button className="bg-[#FFAC01] py-2 px-12 text-[#111111] rounded-3xl font-semibold text-md">
          Proceed
        </button>
      </div>
    </div>
  </div>
  )
}

export default NativeCards