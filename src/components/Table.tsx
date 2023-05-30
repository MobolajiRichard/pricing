import { useState, useEffect} from "react";
import Check from "../assets/Check";
import Dash from "../assets/Dash";
import DownArrow from "../assets/DownArrow";
import { LessonProp, ForeignPrices, NativePrices } from "../type";
import { data, initialForeignPrice, initialNativePrice, getOldPrice, getPrice } from "../utils";
import NativeCards from "./NativeCards";

const Table = () => {
  
  // states
  const [origin, setOrigin] = useState<string>("FOREIGNER");
  const [originPlan, setOriginPlan] = useState<LessonProp[]>(data);
  const [nativePrice, setNativePrice] = useState<NativePrices>(initialNativePrice);
  const [foreignPrice, setForeignPrice] = useState<ForeignPrices>(initialForeignPrice);
  const [classes, setClasses] = useState<number>(5);
  const [duration, setDuration] = useState<number>(60);

  //Logic
  useEffect(() => {
    //on render, filter data based on origin and set the soted data to the originPlan
    let filteredOrigin = data.filter((d) => d.type === origin)
    setOriginPlan(filteredOrigin);

    if (origin === "FOREIGNER") {
    //filter originPlan data based on the duration and classes selected
      let filteredForeignPlan = originPlan.filter((o) => o.duration === Number(duration) && o.nbLessons === Number(classes) );

      //finding the regular, plus, flexi details 
      const regular = filteredForeignPlan.find((f) => f.plan === "REGULAR");
      const plus = filteredForeignPlan.find((f) => f.plan === "PLUS");
      const flexi = filteredForeignPlan.find((f) => f.plan === "FLEXI");

      //constructing  a price object based on the value gotten above
      let price = {
        regular: {
          total_cost: regular?.price.primary,
          price: getPrice(regular?.price.primary, regular?.nbLessons),
        },
        plus: {
          total_cost: plus?.price.primary,
          price: getPrice(plus?.price.primary, plus?.nbLessons),
        },
        flexi: {
          total_cost: flexi?.price.primary,
          price: getPrice(flexi?.price.primary, flexi?.nbLessons),
        },
      };

      //setting the foreign price to the price gotten above
      setForeignPrice(price);
    } else {
         //filter originPlan data based on the duration and classes selected
      let filteredNativePlan = originPlan.filter((o) => o.duration === Number(duration));

      //finding the five, ten, twenty, forty classes detaiils
      const five = filteredNativePlan.find((f) => f.nbLessons === 5);
      const ten = filteredNativePlan.find((f) => f.nbLessons === 10);
      const twenty = filteredNativePlan.find((f) => f.nbLessons === 20);
      const forty = filteredNativePlan.find((f) => f.nbLessons === 40);

      //constructing  a price object based on the value gotten above
      let price = {
        five: {
          total_cost: five?.price.primary,
          price: getPrice(five?.price.primary, five?.nbLessons),
        },
        ten: {
          total_cost: ten?.price.primary,
          price: getPrice(ten?.price.primary, ten?.nbLessons),
        },
        twenty: {
          total_cost: twenty?.price.primary,
          price: getPrice(twenty?.price.primary, twenty?.nbLessons),
        },
        forty: {
          total_cost: forty?.price.primary,
          price: getPrice(forty?.price.primary, forty?.nbLessons),
        },
      };

      //setting the foreign price to the price gotten above
      setNativePrice(price);
    }
  }, [origin, duration, classes]);

  //update class state, on change of values
  const handleClassChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setClasses(Number(event.target.value));
  };

  //update class state, on change of values
  const handleDurationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDuration(Number(event.target.value));
  };

  return (
    <div className="w-full flex flex-col font-source md:flex-row items-center md:items-start relative overflow-x-hidden h-full">
      
      {/* responsively render the select options on top and it is in a small screen(mobile) */}
      <div className="md:hidden flex flex-col">
        {/* select origin buttons (mobile view) */}
        <div className="flex items-center font-sans">
          <p
            className={`w-32 h-[39px] p-2 border-2 ${origin === "FOREIGNER"  ? "border-red-700"  : "border-gray-300 text-gray-300"} rounded-tl-lg rounded-bl-lg cursor-pointer`}
            onClick={() => setOrigin("FOREIGNER")}
          >
            Foreigner
          </p>
          <p
            className={`w-32 h-[39px] p-2 border-2  ${
              origin === "NATIVE"
                ? "border-red-700"
                : "border-gray-300 text-gray-300"
            } rounded-tr-lg rounded-br-lg cursor-pointer`}
            onClick={() => setOrigin("NATIVE")}
          >
            Native
          </p>
        </div>

        {/* select classes and duration (mobile view) */}
        <div
          className={`flex mt-4 w-full  ${
            origin === "FOREIGNER"
              ? "items-start"
              : "items-center justify-center mb-4"
          }`}
        >
          <div
            className={`bg-white h-[40px] mb-4 rounded-md px-4 flex items-center ${
              origin === "FOREIGNER" ? "w-full mr-4" : "w-[70%]"
            }`}
          >
            <select
              className="w-full"
              value={duration}
              onChange={handleDurationChange}
            >
              <option value={25}>25 minutes</option>
              <option value={45}>45 minutes</option>
              <option value={60}>60 minutes</option>
              <option value={90}>90 minutes</option>
            </select>
            <DownArrow />
          </div>
          {origin === "FOREIGNER" && (
            <div className="bg-white h-[40px] rounded-md px-4 flex items-center w-full">
              <select
                className="w-full"
                value={classes}
                onChange={handleClassChange}
              >
                <option value={5}>5 classes</option>
                <option value={10}>10 classes</option>
                <option value={20}>20 classes</option>
                <option value={40}>40 classes</option>
              </select>
              <DownArrow />
            </div>
          )}
        </div>
      </div>

      {/* select origin, classes and duration (desktop view) */}

      <div
        className={`hidden md:block ${
          origin === "FOREIGNER" ? "w-full" : "w-[20%]"
        }`}
      >
        <div
          className={`font-semibold py-2 ${
            origin === "FOREIGNER" ? "w-[27%]" : "w-full"
          }`}
        >
      {/* select origin design (desktop view) */}
          <div className="flex items-center font-sans">
            <button
              className={`w-32 h-[39px] p-2 border-2 ${
                origin === "FOREIGNER"
                  ? "border-red-700"
                  : "border-gray-300 text-gray-300"
              } rounded-tl-lg rounded-bl-lg cursor-pointer`}
              onClick={() => setOrigin("FOREIGNER")}
            >
              Foreigner
            </button>
            <button
              className={`w-32 h-[39px] p-2 border-2  ${
                origin === "NATIVE"
                  ? "border-red-700"
                  : "border-gray-300 text-gray-300"
              } rounded-tr-lg rounded-br-lg cursor-pointer`}
              onClick={() => setOrigin("NATIVE")}
            >
              Native
            </button>
          </div>
        {/* select classes and duration design desktop view */}
          <div className="select flex flex-col items-start">
            <p className=" text-[#9f9f9f] mb-1 mt-4 text-sm">Class duration</p>
            <div className="bg-white h-[40px] mb-4 rounded-md px-4 flex items-center w-full outline-none border-none">
              <select
                className="w-full"
                value={duration}
                onChange={handleDurationChange}
              >
                <option value={25}>25 minutes</option>
                <option value={45}>45 minutes</option>
                <option value={60}>60 minutes</option>
                <option value={90}>90 minutes</option>
              </select>
              <DownArrow />
            </div>

            {origin === "FOREIGNER" && (
              <>
                <p className=" text-[#9f9f9f] mb-1 text-sm">Number classes</p>
                <div className="bg-white h-[40px] rounded-md px-4 flex items-center w-full  outline-none border-none">
                  <select
                    className="w-full"
                    value={classes}
                    onChange={handleClassChange}
                  >
                    <option value={5}>5 classes</option>
                    <option value={10}>10 classes</option>
                    <option value={20}>20 classes</option>
                    <option value={40}>40 classes</option>
                  </select>
                  <DownArrow />
                </div>
              </>
            )}
          </div>
        </div>

        {/* benefits table for the plans, only if origin is FOREIGN */}
        {origin === "FOREIGNER" && (
          <table className="w-full mt-2">
            <tr>
              <td>Flexible schedule</td>
            </tr>
            <tr>
              <td>Reschedule class</td>
            </tr>
            <tr>
              <td>Free consultations</td>
            </tr>
            <tr>
              <td>Internal credits</td>
            </tr>
            <tr>
              <td>Bonus program</td>
            </tr>
            <tr>
              <td>Referral program</td>
            </tr>
            <tr>
              <td>Total bundle costs</td>
            </tr>
          </table>
        )}

      {/* conditionally render the pay button under the table if the origin is foreigner and it is in a big screen(mobile) */}
        {origin === "FOREIGNER" && (
          <div className="flex flex-col items-start ml-[62px] mt-[45px]">
            <p className="font-semibold mb-2">Or, get a trial class:</p>
            <button className="bg-[#FFAC01] py-2 px-12 rounded-3xl font-semibold text-md">
              Pay 500 &yen;
            </button>
          </div>
        )}
      </div>

      {/* designs for the foreign cards */}
      {origin === "FOREIGNER" && (
        <div className="md:absolute right-0 flex md:w-[60%] justify-between overflow-x-auto w-full">
            {/* Regular */}
          <div className=" w-[225px] bg-white rounded-[10px]   ml-4">
            <div className="font-normal  px-[24%] py-[3.5%] flex flex-col items-center w-full relative h-[225px] ">
              <p className="border-b border-red-200 border-dashed font-bold mb-4 w-full text-center">
                Regular
              </p>
              <div className="flex items-center text-sm">
                <p>{getOldPrice(foreignPrice?.regular.price)} &yen;</p>
                <p className="border border-black px-[4px] py-[1px] rounded-full font-bold ml-2">
                  -40%
                </p>
              </div>
              <p className="text-[#CE4A37] text-4xl font-bold my-2">
                {foreignPrice?.regular.price} &yen;
              </p>
              <p className="text-sm">per class</p>
            </div>
            <table className="pricing-table w-full ">
              <tr className="w-full">
                <td className="show">
                  <Dash />
                </td>
                <td className="hide text-[#C1C1C1]">Flexible schedule</td>
              </tr>
              <tr className="w-full">
                <td className="show">
                  <Dash />
                </td>
                <td className="hide text-[#C1C1C1]">Reschedule class</td>
              </tr>
              <tr>
                <td className="show">
                  <Dash />
                </td>
                <td className="hide text-[#C1C1C1]">Free consultations</td>
              </tr>
              <tr>
                <td className="show">
                  <Check />
                </td>
                <td className="hide ">Internal credits</td>
              </tr>
              <tr>
                <td className="show">
                  <Dash />
                </td>
                <td className="hide text-[#C1C1C1]">Bonus program</td>
              </tr>
              <tr>
                <td className="show">
                  <Dash />
                </td>
                <td className="hide text-[#C1C1C1]">Referral program</td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center justify-center">
                    <s className="mr-2">
                      {getOldPrice(foreignPrice?.regular.total_cost)} &yen;
                    </s>
                    <p className="font-bold">
                      {foreignPrice?.regular.total_cost} &yen;
                    </p>
                  </div>
                </td>
              </tr>
            </table>
            <div className="bg-[#F9F9F9] justify-center flex items-center w-full pb-4 rounded-bl-[10px] rounded-br-[10px]">
              <button className="bg-[#FFAC01] py-2 px-12 rounded-3xl font-semibold text-md">
                Proceed
              </button>
            </div>
          </div>

          {/* Plus */}
          <div className=" w-[225px] bg-white rounded-[10px]  ml-4">
            <div className="font-normal  px-[24%] py-[3.5%] flex flex-col items-center w-full relative h-[225px]">
              <p className="border-b border-red-200 border-dashed font-bold mb-4 w-full text-center">
                Plus
              </p>
              <div className="flex items-center text-sm">
                <p>{getOldPrice(foreignPrice?.plus.price)} &yen;</p>
                <p className="border border-black px-[4px] py-[1px] rounded-full font-bold ml-2">
                  -40%
                </p>
              </div>
              <p className="text-[#CE4A37] text-4xl font-bold my-2">
                {foreignPrice?.plus.price} &yen;
              </p>
              <p className="text-sm">per class</p>
            </div>
            <table className="pricing-table w-full">
              <tr className="w-full">
                <td className="show">
                  <Check />
                </td>
                <td className="hide ">Flexible schedule</td>
              </tr>
              <tr>
                <td>4 times a month</td>
              </tr>
              <tr>
                <td className="show">
                  <Dash />
                </td>
                <td className="hide text-[#C1C1C1]">Free consultations</td>
              </tr>
              <tr>
                <td className="show">
                  <Check />
                </td>
                <td className="hide ">Internal credits</td>
              </tr>

              <tr>
                <td className="show">
                  <Check />
                </td>
                <td className="hide ">Bonus program</td>
              </tr>
              <tr>
                <td className="show">
                  <Check />
                </td>
                <td className="hide ">Referral program</td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center justify-center">
                    <s className="mr-2">
                      {getOldPrice(foreignPrice?.plus.total_cost)} &yen;
                    </s>{" "}
                    <p className="font-bold">
                      {foreignPrice?.plus.total_cost} &yen;
                    </p>
                  </div>
                </td>
              </tr>
            </table>
            <div className="bg-[#F9F9F9] justify-center flex items-center w-full pb-4 rounded-bl-[10px] rounded-br-[10px]">
              <button className="bg-[#FFAC01] py-2 px-12 rounded-3xl font-semibold text-md">
                Proceed
              </button>
            </div>
          </div>

          {/* Flexi */}
          <div className=" w-[225px] bg-white rounded-[10px]  ml-4">
            <div className="font-normal  px-[24%] py-[3.5%] flex flex-col items-center w-full relative h-[225px] ">
              <p className="border-b border-red-200 border-dashed font-bold mb-4 w-full text-center">
                Flexi
              </p>
              <div className="flex items-center text-sm">
                <p>{getOldPrice(foreignPrice?.flexi.price)} &yen;</p>
                <p className="border border-black px-[4px] py-[1px] rounded-full font-bold ml-2">
                  -40%
                </p>
              </div>
              <p className="text-[#CE4A37] text-4xl font-bold my-2">
                {foreignPrice?.flexi.price} &yen;
              </p>
              <p className="text-sm">per class</p>
            </div>
            <table className="pricing-table w-full">
              <tr className="w-full">
                <td className="show">
                  <Check />
                </td>
                <td className="hide ">Flexible schedule</td>
              </tr>
              <tr>
                <td>No limits</td>
              </tr>
              <tr>
                <td className="show">
                  <Dash />
                </td>
                <td className="hide">Free consultations</td>
              </tr>
              <tr>
                <td className="show">
                  <Check />
                </td>
                <td className="hide ">Internal credits</td>
              </tr>

              <tr>
                <td className="show">
                  <Check />
                </td>
                <td className="hide ">Bonus program</td>
              </tr>
              <tr>
                <td className="show">
                  <Check />
                </td>
                <td className="hide ">Referral program</td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center justify-center">
                    <s className="mr-2">
                      {getOldPrice(foreignPrice?.flexi.total_cost)} &yen;
                    </s>{" "}
                    <p className="font-bold">
                      {foreignPrice?.flexi.total_cost} &yen;
                    </p>
                  </div>
                </td>
              </tr>
            </table>
            <div className="bg-[#F9F9F9] justify-center flex items-center w-full pb-4 rounded-bl-[10px] rounded-br-[10px]">
              <button className="bg-[#FFAC01] py-2 px-12 rounded-3xl font-semibold text-md">
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}

      {/* item to display when origin is native */}
      {origin === "NATIVE" && (
        <div className="flex items-start md:w-[80%] overflow-x-auto w-full">
          <NativeCards native={nativePrice.five}/>
          <NativeCards native={nativePrice.ten}/>
          <NativeCards native={nativePrice.twenty}/>
          <NativeCards native={nativePrice.forty}/>
        </div>
      )}

      {/* conditionally render the pay button if the origin is foreigner and it is in a small screen(mobile) */}
      {origin === "FOREIGNER" && (
        <div className="flex flex-col items-start mt-[45px] md:hidden">
          <p className="font-semibold mb-2">Or, get a trial class:</p>
          <button className="bg-[#FFAC01] py-2 px-12 rounded-3xl font-semibold text-md">
            Pay 500 &yen;
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
