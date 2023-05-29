import { useState, useEffect, useLayoutEffect } from "react";
import data from "../utils/data.json";

const Table = () => {
  let initialForeignPrice = {
    flexi: { total_cost: 1400, price: 280 },
    plus: { total_cost: 1200, price: 240 },
    regular: { total_cost: 1000, price: 200 },
  };
  let initialNativePrice = {
    five: { total_cost: 1000, price: 200 },
    forty: { total_cost: 6800, price: 170 },
    ten: { total_cost: 1900, price: 190 },
    twenty: { total_cost: 5600, price: 280 },
  };
  const [origin, setOrigin] = useState<string>("FOREIGNER");
  const [originPlan, setOriginPlan] = useState(data);
  const [nativePrice, setNativePrice] = useState(initialNativePrice);
  const [foreignPrice, setForeignPrice] = useState(initialForeignPrice);
  const [classes, setClasses] = useState<number>(5);
  const [duration, setDuration] = useState<number>(60);
  useEffect(() => {
    let filteredOrigin = data.filter((d) => d.type === origin);
    setOriginPlan(filteredOrigin);
    if (origin === "FOREIGNER") {
      let filteredForeignPlan = originPlan.filter(
        (o) =>
          o.duration === Number(duration) && o.nbLessons === Number(classes)
      );
      const regular = filteredForeignPlan.find((f) => f.plan === "REGULAR");
      const plus = filteredForeignPlan.find((f) => f.plan === "PLUS");
      const flexi = filteredForeignPlan.find((f) => f.plan === "FLEXI");
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
      setForeignPrice(price);
    } else {
      let filteredNativePlan = originPlan.filter(
        (o) => o.duration === Number(duration)
      );
      const five = filteredNativePlan.find((f) => f.nbLessons === 5);
      const ten = filteredNativePlan.find((f) => f.nbLessons === 10);
      const twenty = filteredNativePlan.find((f) => f.nbLessons === 20);
      const forty = filteredNativePlan.find((f) => f.nbLessons === 40);
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
      setNativePrice(price);
    }
  }, [origin, duration, classes]);

  console.log(foreignPrice, nativePrice);
  const handleClassChange = (event) => {
    setClasses(event.target.value);
  };
  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const getOldPrice = (price: number) => {
    let old_price = price * 0.4 + price;
    return old_price;
  };
  const getPrice = (price: number, nbLesson: number) => {
    return Number((price / nbLesson).toFixed(2));
  };
  return (
    <div className="w-full flex flex-col font-source md:flex-row items-center md:items-start relative overflow-x-hidden h-full">
      <div className="md:hidden flex flex-col">
        <div className="flex items-center font-sans">
          <p
              className={`w-32 h-[39px] p-2 border-2 ${
                origin === "FOREIGNER"
                  ? "border-red-700"
                  : "border-gray-300 text-gray-300"
              } rounded-tl-lg rounded-bl-lg cursor-pointer`}
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
        <div className={`flex mt-4 w-full  ${origin === "FOREIGNER" ? "items-start" : "items-center justify-center mb-4"}`}>
          <div className={`bg-white h-[40px] mb-4 rounded-md px-4 flex items-center ${origin === "FOREIGNER" ? "w-full mr-4" : "w-[70%]"}`}>
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
            </div>
          )}
        </div>
      </div>
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
          <div className="flex flex-col items-start">
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
                </div>
              </>
            )}
          </div>
        </div>
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
        {origin === "FOREIGNER" && (
          <div className="flex flex-col items-start ml-[62px] mt-[45px]">
            <p className="font-semibold mb-2">Or, get a trial class:</p>
            <button className="bg-[#FFAC01] py-2 px-12 rounded-3xl font-semibold text-md">
              Pay 500 £
            </button>
          </div>
        )}
      </div>
      {origin === "FOREIGNER" && (
        <div className="md:absolute right-0 flex md:w-[60%] justify-between overflow-x-auto w-full">
          <div className=" w-[225px] bg-white rounded-[10px]   ml-4">
            <div className="font-normal  px-[24%] py-[3.5%] flex flex-col items-center w-full relative h-[225px] ">
              <p className="border-b border-red-200 border-dashed font-bold mb-4 w-full text-center">
                Regular
              </p>
              <div className="flex items-center text-sm">
                <p>{getOldPrice(foreignPrice?.regular.price)}</p>
                <p className="border border-black px-[4px] py-[1px] rounded-full font-bold ml-2">
                  -40%
                </p>
              </div>
              <p className="text-[#CE4A37] text-4xl font-bold my-2">
                {foreignPrice?.regular.price}
              </p>
              <p className="text-sm">per class</p>
            </div>
            <table className="pricing-table w-full">
              <tr className="w-full">
                <td> - </td>
              </tr>
              <tr>
                <td> - </td>
              </tr>
              <tr>
                <td> - </td>
              </tr>
              <tr>
                <td> check </td>
              </tr>
              <tr>
                <td> - </td>
              </tr>
              <tr>
                <td> - </td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center justify-center">
                    <s className="mr-2">
                      {getOldPrice(foreignPrice?.regular.total_cost)}
                    </s>{" "}
                    <p className="font-bold">{foreignPrice?.regular.total_cost}</p>
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
          <div className=" w-[225px] bg-white rounded-[10px]  ml-4">
            <div className="font-normal  px-[24%] py-[3.5%] flex flex-col items-center w-full relative h-[225px]">
              <p className="border-b border-red-200 border-dashed font-bold mb-4 w-full text-center">
                Plus
              </p>
              <div className="flex items-center text-sm">
                <p>{getOldPrice(foreignPrice?.plus.price)}</p>
                <p className="border border-black px-[4px] py-[1px] rounded-full font-bold ml-2">
                  -40%
                </p>
              </div>
              <p className="text-[#CE4A37] text-4xl font-bold my-2">
                {foreignPrice?.plus.price}
              </p>
              <p className="text-sm">per class</p>
            </div>
            <table className="pricing-table w-full">
              <tr className="w-full">
                <td> check </td>
              </tr>
              <tr>
                <td> 4 times a month </td>
              </tr>
              <tr>
                <td> - </td>
              </tr>
              <tr>
                <td> check </td>
              </tr>
              <tr>
                <td> check </td>
              </tr>
              <tr>
                <td> check </td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center justify-center">
                    <s className="mr-2">
                      {getOldPrice(foreignPrice?.plus.total_cost)}
                    </s>{" "}
                    <p className="font-bold">{foreignPrice?.plus.total_cost}</p>
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
          <div className=" w-[225px] bg-white rounded-[10px]  ml-4">
            <div className="font-normal  px-[24%] py-[3.5%] flex flex-col items-center w-full relative h-[225px] ">
              <p className="border-b border-red-200 border-dashed font-bold mb-4 w-full text-center">
                Flexi
              </p>
              <div className="flex items-center text-sm">
                <p>{getOldPrice(foreignPrice?.flexi.price)}</p>
                <p className="border border-black px-[4px] py-[1px] rounded-full font-bold ml-2">
                  -40%
                </p>
              </div>
              <p className="text-[#CE4A37] text-4xl font-bold my-2">
                {foreignPrice?.flexi.price}
              </p>
              <p className="text-sm">per class</p>
            </div>
            <table className="pricing-table w-full">
              <tr className="w-full">
                <td> check </td>
              </tr>
              <tr>
                <td> No limit </td>
              </tr>
              <tr>
                <td> check </td>
              </tr>
              <tr>
                <td> check </td>
              </tr>
              <tr>
                <td> check </td>
              </tr>
              <tr>
                <td> check </td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center justify-center">
                    <s className="mr-2">
                      {getOldPrice(foreignPrice?.flexi.total_cost)}
                    </s>{" "}
                    <p className="font-bold">{foreignPrice?.flexi.total_cost}</p>
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
      {origin === "NATIVE" && (
        <div className="flex items-start md:w-[80%] overflow-x-auto w-full">
          <div className=" w-full bg-white rounded-[10px]  ml-4">
            <div className="px-[24%]">
              <div className="font-normal   py-2 flex flex-col items-center w-full relative ">
                <p className="border-b border-red-200 border-dashed font-bold mb-4 w-full text-center">
                  5 Classes
                </p>
                <div className="flex items-center text-sm">
                  <p>{getOldPrice(nativePrice?.five.price)}</p>
                  <p className="border border-black px-[4px] py-[1px] rounded-full font-bold ml-2">
                    -40%
                  </p>
                </div>
                <p className="text-[#CE4A37] text-4xl font-bold my-2">
                  {nativePrice?.five.price}
                </p>
                <p className="text-sm">per class</p>
              </div>
            </div>

            <div className="bg-[#F9F9F9] w-full rounded-bl-[10px] rounded-br-[10px] mt-2">
              <div className="flex items-center justify-center mb-4">
                <s className="mr-2">
                  {getOldPrice(nativePrice?.five.total_cost)}
                </s>{" "}
                <p className="font-bold">{nativePrice?.five.total_cost}</p>
              </div>
              <div className=" justify-center flex items-center w-full pb-4 ">
                <button className="bg-[#FFAC01] py-2 px-12 rounded-3xl font-semibold text-md">
                  Proceed
                </button>
              </div>
            </div>
          </div>
          <div className=" w-full bg-white rounded-[10px]  ml-4">
            <div className="px-[24%]">
              <div className="font-normal   py-2 flex flex-col items-center w-full relative ">
                <p className="border-b border-red-200 border-dashed font-bold mb-4 w-full text-center">
                  10 Classes
                </p>
                <div className="flex items-center text-sm">
                  <p>{getOldPrice(nativePrice?.ten.price)}</p>
                  <p className="border border-black px-[4px] py-[1px] rounded-full font-bold ml-2">
                    -40%
                  </p>
                </div>
                <p className="text-[#CE4A37] text-4xl font-bold my-2">
                  {nativePrice?.ten.price}
                </p>
                <p className="text-sm">per class</p>
              </div>
            </div>

            <div className="bg-[#F9F9F9] w-full rounded-bl-[10px] rounded-br-[10px] mt-2">
              <div className="flex items-center justify-center mb-4">
                <s className="mr-2">
                  {getOldPrice(nativePrice?.ten.total_cost)}
                </s>{" "}
                <p className="font-bold">{nativePrice?.ten.total_cost}</p>
              </div>
              <div className=" justify-center flex items-center w-full pb-4 ">
                <button className="bg-[#FFAC01] py-2 px-12 rounded-3xl font-semibold text-md">
                  Proceed
                </button>
              </div>
            </div>
          </div>
          <div className=" w-full bg-white rounded-[10px]  ml-4">
            <div className="px-[24%]">
              <div className="font-normal   py-2 flex flex-col items-center w-full relative ">
                <p className="border-b border-red-200 border-dashed font-bold mb-4 w-full text-center">
                  20 Classes
                </p>
                <div className="flex items-center text-sm">
                  <p>{getOldPrice(nativePrice?.twenty.price)}</p>
                  <p className="border border-black px-[4px] py-[1px] rounded-full font-bold ml-2">
                    -40%
                  </p>
                </div>
                <p className="text-[#CE4A37] text-4xl font-bold my-2">
                  {nativePrice?.twenty.price}
                </p>
                <p className="text-sm">per class</p>
              </div>
            </div>

            <div className="bg-[#F9F9F9] w-full rounded-bl-[10px] rounded-br-[10px] mt-2">
              <div className="flex items-center justify-center mb-4">
                <s className="mr-2">
                  {getOldPrice(nativePrice?.twenty.total_cost)}
                </s>{" "}
                <p className="font-bold">{nativePrice?.twenty.total_cost}</p>
              </div>
              <div className=" justify-center flex items-center w-full pb-4 ">
                <button className="bg-[#FFAC01] py-2 px-12 rounded-3xl font-semibold text-md">
                  Proceed
                </button>
              </div>
            </div>
          </div>
          <div className=" w-full bg-white rounded-[10px]  ml-4">
            <div className="px-[24%]">
              <div className="font-normal   py-2 flex flex-col items-center w-full relative ">
                <p className="border-b border-red-200 border-dashed font-bold mb-4 w-full text-center">
                  40 Classes
                </p>
                <div className="flex items-center text-sm">
                  <p>{getOldPrice(nativePrice?.forty.price)}</p>
                  <p className="border border-black px-[4px] py-[1px] rounded-full font-bold ml-2">
                    -40%
                  </p>
                </div>
                <p className="text-[#CE4A37] text-4xl font-bold my-2">
                  {nativePrice?.forty.price}
                </p>
                <p className="text-sm">per class</p>
              </div>
            </div>

            <div className="bg-[#F9F9F9] w-full rounded-bl-[10px] rounded-br-[10px] mt-2">
              <div className="flex items-center justify-center mb-4">
                <s className="mr-2">
                  {getOldPrice(nativePrice?.forty.total_cost)}
                </s>{" "}
                <p className="font-bold">{nativePrice?.forty.total_cost}</p>
              </div>
              <div className=" justify-center flex items-center w-full pb-4 ">
                <button className="bg-[#FFAC01] py-2 px-12 rounded-3xl font-semibold text-md">
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {origin === "FOREIGNER" && (
        <div className="flex flex-col items-start mt-[45px] md:hidden">
          <p className="font-semibold mb-2">Or, get a trial class:</p>
          <button className="bg-[#FFAC01] py-2 px-12 rounded-3xl font-semibold text-md">
            Pay 500 £
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
