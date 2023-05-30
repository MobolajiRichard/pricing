import { getOldPrice, getPrice } from "../../utils";
import Table from "./Table";
import { DataProps } from "../../type";

const ForeignerCards = ({ foreign }: { foreign: DataProps }) => {

  const { nbLessons, price, plan} = foreign;
  let total_cost = price?.primary
  
  //calculating initial price
  const initial_price = getPrice(total_cost, nbLessons)

  //plan might be undefined(data.json) guarding against it by creating a new variable to store its value if it exist
  let type = ''
  if(plan){ 
  //turning the UPPERCASE style of plan to a Titlecase
  type = plan?.charAt(0).toUpperCase() + plan?.slice(1).toLowerCase()
  }

  return (
    <div className=" w-full bg-white rounded-[10px] shadow-xl ml-4">
      <div className="font-normal  px-[24%] py-[3.5%] flex flex-col items-center w-full relative md:h-[225px] ">
        <p className="border-b border-[#CE4A37] border-dashed font-bold mb-[33px] w-full text-center text-[22px]">
          {type}
        </p>
        <div className="flex items-center text-sm">
          <s className="text-[#505050]">{getOldPrice(initial_price)} &yen;</s>
          <p className="border border-black px-[2px] md:px-[4px] py-[1px] rounded-full font-bold ml-2">
            -40%
          </p>
        </div>
        <p className="text-[#CE4A37] text-[40px] leading-none my-1 font-extrabold ">
          {initial_price} &yen;
        </p>
        <p className="text-sm">per class</p>
      </div>
      <Table data={{type, total_cost}}/>
      <div className=" mt-5 justify-center flex items-center w-full pb-4 rounded-bl-[10px] rounded-br-[10px]">
        <button className="bg-[#FFAC01] py-2 mx-4 md:mx-0  px-12 text-[#111111] rounded-3xl font-semibold text-md">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default ForeignerCards;
