import { Dash, Check } from "../../assets";
import { ForeignTable } from "../../type";
import { getOldPrice } from "../../utils";

const Table = ({ data }: { data: ForeignTable }) => {
  const { type, total_cost } = data;

  return (
    <table className="pricing-table w-full mt-5 md:mt-0">
      <tbody>
        <tr className="w-full">
          <td className="show">{type === "Regular" ? <Dash /> : <Check />}</td>
          <td className={`hide ${type === "Regular" && "text-[#C1C1C1]"}`}>
            Flexible schedule
          </td>
        </tr>
        <tr className="w-full">
          {type === "Regular" ? (
            <>
              <td className="show">
                <Dash />
              </td>
              <td className="hide text-[#C1C1C1]">Reschedule class</td>
            </>
          ) : type === "Plus" ? (
            <td>4 times a month</td>
          ) : (
            <td>No limits</td>
          )}
        </tr>
        <tr>
          <td className="show">{type === "Flexi" ? <Check /> : <Dash />}</td>
          <td className={`hide ${type !== "Flexi" && "text-[#C1C1C1]"}`}>
            Free consultations
          </td>
        </tr>
        <tr>
          <td className="show">
            <Check />
          </td>
          <td className="hide ">Internal credits</td>
        </tr>
        <tr>
          <td className="show">{type === "Regular" ? <Dash /> : <Check />}</td>
          <td className={`hide ${type === "Regular" && "text-[#C1C1C1]"}`}>
            Bonus program
          </td>
        </tr>
        <tr>
          <td className="show">{type === "Regular" ? <Dash /> : <Check />}</td>
          <td className={`hide ${type === "Regular" && "text-[#C1C1C1]"}`}>
            Referral program
          </td>
        </tr>
        <tr>
          <td>
            <p className="hide">Total Cost:</p>
            <div className="flex items-center justify-center">
              <s className="mr-2 opacity-40">{getOldPrice(total_cost)} &yen;</s>
              <p className="font-bold">{total_cost} &yen;</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
