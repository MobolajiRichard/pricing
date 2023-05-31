import { useCallback, useState } from "react";
import { DURATION_OPTIONS, NB_CLASSES_OPTIONS, data, defaultForeignPlan } from "../utils";
import ForeignerCards from "./Foreign/ForeignerCards";
import NativeCards from "./NativeCards";
import { DataProps } from "../type";
import Select from "./Select";

const Table = () => {
  // states
  const [origin, setOrigin] = useState<string>("FOREIGNER");
  const [classes, setClasses] = useState<number>(5);
  const [duration, setDuration] = useState<number>(60);

  //manually passing in a default foreign and native plan based on the default class and duration 
  //as the foreign and native plan will be initially empty unless event is fired in the DOM
  const [items, setItems] = useState<DataProps[]>(defaultForeignPlan);

  const handleFilter = useCallback((classes: number, duration: number, origin: string) => {
    //gilter data based on origin
    const filteredOrigin = data.filter((d) => d.type === origin).filter(
      (o) => o.duration === Number(duration)
    );

    if (origin === "FOREIGNER") {
      setItems(filteredOrigin.filter(
        (o) =>
          o.nbLessons === Number(classes)
      ));
    } else {
      setItems(filteredOrigin);
    }
  }, []);

  const handleClassChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setClasses(Number(event.target.value));
    handleFilter(Number(event.target.value), duration, origin);
  }, [duration, origin, handleFilter]);

  const handleDurationChange = useCallback((
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDuration(Number(event.target.value));
    handleFilter(classes, Number(event.target.value), origin);
  }, [classes, origin, handleFilter]);

  const handleOriginChange = useCallback((origin: string) => {
    setOrigin(origin);
    handleFilter(classes, duration, origin);
  }, [classes, duration, handleFilter]);

  return (
    <div className="w-full flex flex-col font-source md:flex-row items-center md:items-start relative overflow-x-hidden h-full">
      {/* responsively render the select options on top and it is in a small screen(mobile) */}
      <div className="md:hidden flex flex-col">
        {/* select origin buttons (mobile view) */}
        <div className="flex items-center font-bold">
          <p
            className={`w-32 h-[39px] text-center p-2 border-2 ${origin === "FOREIGNER"
              ? "border-red-700"
              : "border-gray-300 text-gray-300"
              } rounded-tl-lg rounded-bl-lg cursor-pointer`}
            onClick={() => handleOriginChange("FOREIGNER")}
          >
            Foreigner
          </p>
          <p
            className={`w-32 h-[39px] text-center p-2 border-2  ${origin === "NATIVE"
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
          className={`flex mt-4 w-full  ${origin === "FOREIGNER"
            ? "items-start"
            : "items-center justify-center mb-4"
            }`}
        >
          <Select
            containerClassName={`bg-white h-[40px] mb-4 rounded-md px-4 flex items-center ${origin === "FOREIGNER" ? "w-full mr-4" : "w-[70%]"
              }`}
            options={DURATION_OPTIONS}
            value={duration}
            onChange={handleDurationChange}
          />

          {origin === "FOREIGNER" && (
            <Select
              containerClassName="bg-white h-[40px] rounded-md px-4 flex items-center w-full"
              options={NB_CLASSES_OPTIONS}
              value={classes}
              onChange={handleClassChange}
            />
          )}
        </div>
      </div>

      {/* select origin, classes and duration (desktop view) */}

      <div
        className={`hidden md:block ${origin === "FOREIGNER" ? "w-full" : "w-[20%]"
          }`}
      >
        <div
          className={`font-semibold py-2 ${origin === "FOREIGNER" ? "w-[27%]" : "w-full"
            }`}
        >
          {/* select origin design (desktop view) */}
          <div className="flex items-center">
            <button
              className={`w-32 h-[39px] p-2 border-2 text-center ${origin === "FOREIGNER"
                ? "border-red-700"
                : "border-gray-300 text-gray-300"
                } rounded-tl-lg rounded-bl-lg cursor-pointer`}
              onClick={() => handleOriginChange("FOREIGNER")}
            >
              Foreigner
            </button>
            <button
              className={`w-32 h-[39px] p-2 border-2 text-center ${origin === "NATIVE"
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

            <Select
              containerClassName="bg-white h-[40px] mb-4 rounded-md px-4 flex items-center w-full outline-none border-none"
              options={DURATION_OPTIONS}
              value={duration}
              onChange={handleDurationChange}
            />

            {origin === "FOREIGNER" && (
              <>
                <p className=" text-[#9f9f9f] mb-1 text-sm">Number classes</p>
                <Select
                  containerClassName="bg-white h-[40px] rounded-md px-4 flex items-center w-full  outline-none border-none"
                  options={NB_CLASSES_OPTIONS}
                  value={classes}
                  onChange={handleClassChange}
                />
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
          {items.map((f, i) => (
            <ForeignerCards foreign={f} key={i} />
          ))}
        </div>
      )}

      {/* item to display when origin is native */}
      {origin === "NATIVE" && (
        <div className="flex items-start md:w-[80%] overflow-x-auto w-full">
          {items.map((n, i) => (
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
