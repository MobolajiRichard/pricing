import { Dash, Check } from "../../assets";
import { ForeignTable, Plan } from "../../type";
import { getOldPrice } from "../../utils";

const Table = ({ data }: { data: ForeignTable; }) => {
  return (
    <table className="pricing-table w-full mt-5 md:mt-0">
      <tbody>
        <tr className="w-full">
          <td className="show">{data.plan === Plan.regular ? <Dash /> : <Check />}</td>
          <td className={`hide ${data.plan === Plan.regular && "text-[#C1C1C1]"}`}>
            Flexible schedule
          </td>
        </tr>
        <tr className="w-full">
          {data.plan === Plan.regular ? (
            <>
              <td className="show">
                <Dash />
              </td>
              <td className="hide text-[#C1C1C1]">Reschedule class</td>
            </>
          ) : data.plan === Plan.plus ? (
            <td>4 times a month</td>
          ) : (
            <td>No limits</td>
          )}
        </tr>
        <tr>
          <td className="show">{data.plan === Plan.flexi ? <Check /> : <Dash />}</td>
          <td className={`hide ${data.plan !== Plan.flexi && "text-[#C1C1C1]"}`}>
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
          <td className="show">{data.plan === Plan.regular ? <Dash /> : <Check />}</td>
          <td className={`hide ${data.plan === Plan.regular && "text-[#C1C1C1]"}`}>
            Bonus program
          </td>
        </tr>
        <tr>
          <td className="show">{data.plan === Plan.regular ? <Dash /> : <Check />}</td>
          <td className={`hide ${data.plan === Plan.regular && "text-[#C1C1C1]"}`}>
            Referral program
          </td>
        </tr>
        <tr>
          <td>
            <p className="hide">Total Cost:</p>
            <div className="flex items-center justify-center">
              <s className="mr-2 opacity-40">{getOldPrice(data.price.primary)} &yen;</s>
              <p className="font-bold">{data.price.primary} &yen;</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
