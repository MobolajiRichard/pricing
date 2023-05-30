import { useState } from "react";
import { DownArrow } from "../assets";
import { data , defaultForeignPlan, defaultNativePlan} from "../utils";
import ForeignerCards from "./Foreign/ForeignerCards";
import NativeCards from "./NativeCards";
import { DataProps } from "../type";

const Table = () => {
  // states
  const [origin, setOrigin] = useState<string>("FOREIGNER");
  const [classes, setClasses] = useState<number>(5);
  const [duration, setDuration] = useState<number>(60);

  //manually passing in a default foreign and native plan based on the default class and duration 
  //as the foreign and native plan will be initially empty unless event is fired in the DOM
  const [foreignPlan, setForeignPlan] = useState<DataProps[]>(defaultForeignPlan);
  const [nativePlan, setNativePlan] = useState<DataProps[]>(defaultNativePlan);

  const handleFilter = (classes:number, duration:number, origin:string) => {
    //gilter data based on origin
    let filteredOrigin = data.filter((d) => d.type === origin);

    if (origin === "FOREIGNER") {
      //filter originPlan data based on the duration and classes selected
      let filteredForeignPlan = filteredOrigin.filter(
        (o) =>
          o.duration === Number(duration) && o.nbLessons === Number(classes)
      );
      setForeignPlan(filteredForeignPlan);
    } else {
      //filter originPlan data based on the duration and classes selected
      let filteredNativePlan = filteredOrigin.filter(
        (o) => o.duration === Number(duration)
      );
      setNativePlan(filteredNativePlan);
    }
  };

  //update class state, on change of values filter the data
  const handleClassChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setClasses(Number(event.target.value));
    //passing in the new class data to the filter function to ensure it fetches the correct data
    handleFilter(Number(event.target.value), duration, origin);
  };

  //update class state, on change of values  filter the data
  const handleDurationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDuration(Number(event.target.value));
    //passing in the new duration data to the filter function to ensure it fetches the correct data
    handleFilter(classes, Number(event.target.value), origin);
  };

  //update origin state, on change of values  filter the data
  const handleOriginChange = (origin: string) => {
    setOrigin(origin);
    //passing in the new origin data to the filter function to ensure it fetches the correct data
    handleFilter(classes, duration, origin);
  };


  return (
    <div className="w-full flex flex-col font-source md:flex-row items-center md:items-start relative overflow-x-hidden h-full">
      {/* responsively render the select options on top and it is in a small screen(mobile) */}
      <div className="md:hidden flex flex-col">
        {/* select origin buttons (mobile view) */}
        <div className="flex items-center font-bold">
          <p
            className={`w-32 h-[39px] text-center p-2 border-2 ${
              origin === "FOREIGNER"
                ? "border-red-700"
                : "border-gray-300 text-gray-300"
            } rounded-tl-lg rounded-bl-lg cursor-pointer`}
            onClick={() => handleOriginChange("FOREIGNER")}
          >
            Foreigner
          </p>
          <p
            className={`w-32 h-[39px] text-center p-2 border-2  ${
              origin === "NATIVE"
                ? "border-red-700"
                : "border-gray-300 text-gray-300"
            } rounded-tr-lg rounded-br-lg cursor-pointer`}
            onClick={() => handleOriginChange("NATIVE")}
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
          <div className="flex items-center">
            <button
              className={`w-32 h-[39px] p-2 border-2 text-center ${
                origin === "FOREIGNER"
                  ? "border-red-700"
                  : "border-gray-300 text-gray-300"
              } rounded-tl-lg rounded-bl-lg cursor-pointer`}
              onClick={() => handleOriginChange("FOREIGNER")}
            >
              Foreigner
            </button>
            <button
              className={`w-32 h-[39px] p-2 border-2 text-center ${
                origin === "NATIVE"
                  ? "border-red-700"
                  : "border-gray-300 text-gray-300"
              } rounded-tr-lg rounded-br-lg cursor-pointer`}
              onClick={() => handleOriginChange("NATIVE")}
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
            <tbody>
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
            </tbody>
          </table>
        )}

        {/* conditionally render the pay button under the table if the origin is foreigner and it is in a big screen(mobile) */}
        {origin === "FOREIGNER" && (
          <div className="flex flex-col items-start ml-[62px] mt-[45px]">
            <p className="font-semibold mb-2">Or, get a trial class:</p>
            <button className="bg-[#FFAC01] py-2 px-12 text-[#111111] rounded-3xl font-semibold text-md">
              Pay 500 &yen;
            </button>
          </div>
        )}
      </div>

      {/* designs for the foreign cards */}
      {origin === "FOREIGNER" && (
        <div className="md:absolute md:right-0 flex md:w-[60%] md:justify-between overflow-x-auto w-full mr-3 md:mr-0">
          {foreignPlan.map((f, i) => (
            <ForeignerCards foreign={f} key={i} />
          ))}
        </div>
      )}

      {/* item to display when origin is native */}
      {origin === "NATIVE" && (
        <div className="flex items-start md:w-[80%] overflow-x-auto w-full">
          {nativePlan.map((n, i) => (
            <NativeCards key={i} native={n} />
          ))}
        </div>
      )}

      {/* conditionally render the pay button if the origin is foreigner and it is in a small screen(mobile) */}
      {origin === "FOREIGNER" && (
        <div className="flex flex-col items-start mt-[45px] md:hidden">
          <p className="font-semibold mb-2">Or, get a trial class:</p>
          <button className="bg-[#FFAC01] text-[#111111] py-2 px-12 rounded-3xl font-semibold text-md">
            Pay 500 &yen;
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
