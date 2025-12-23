import { useState } from "react";
import { modifyingexpensecontext } from "../contexts/modifyingexpensecontext";
import {
  paidbycontext,
  splitbycontext,
} from "../contexts/modifyingexpensecontext";
import Paidbymodal from "./paidbymodal";
import Splitbymodal from "./Splitbymodal";
export default function Addexpenseform({ addingexpense, setaddingexpense }) {
  const [modifying, setmodifying] = useState("none");
  const [paidby, setpaidby] = useState();
  const [splitby, setsplitby] = useState();
  // const [paidby,setpaidby] = useContext(paidbycontext) ;
  // const [splitby,setsplitby] = useContext(splitbycontext) ;
  function closeaddinexpensemodal() {
    setaddingexpense(false);
  }
  function expenseformsubmit(data) {
    closeaddinexpensemodal();
  }
  return (
    <splitbycontext.Provider value={[splitby, setsplitby]}>
      <paidbycontext.Provider value={[paidby, setpaidby]}>
        <modifyingexpensecontext.Provider value={[modifying, setmodifying]}>
          <div className="flex flex-row">

          <div
            className="addexpensemodalbox"
            onClick={(e) => {
              e.stopPropagation();
            }}
            >
            <header>
              Add Expense<button onClick={closeaddinexpensemodal}>Close</button>
            </header>
            <form
              action={expenseformsubmit}
              className="addexpenseform text-s pl-5"
              >
              <div className="flex-col justify-center align-middle">
                <input
                  type="text"
                  name="description"
                  className="bg-amber-200 w-80 h-10 mt-10"
                  required
                  placeholder="Enter A Description"
                  />
              </div>
              <div className="flex-col justify-center align-middle">
                <input
                  className="bg-amber-200 w-80 h-10 mt-10"
                  type="number"
                  name="amount"
                  required
                  min="0"
                  placeholder="0.00"
                  step="0.01"
                  />
              </div>
              <div className="text-[#737171] m-10">
                Paid by{" "}
                <button
                  className="bg-[#f8b436] pl-5 pr-5 rounded-2xl"
                  type="button"
                  onClick={() => {
                    setmodifying("paidby");
                  }}
                  >
                  You
                </button>{" "}
                and split{" "}
                <button
                  className="bg-[#f8b436] pl-5 pr-5 rounded-2xl"
                  type="button"
                  onClick={() => {
                    setmodifying("splitby");
                  }}
                  >
                  Equally
                </button>
              </div>
              <div className="flex justify-center overflow-hidden">
                <button
                  type="submit"
                  className="bg-amber-600 w-60 h-12 rounded-xl text-white"
                  >
                  {" "}
                  Add expense{" "}
                </button>
              </div>
            </form>
          </div>
            {addingexpense && modifying == "paidby" && <Paidbymodal />}
            {addingexpense && modifying == "splitby" && <Splitbymodal />}
                  </div>
        </modifyingexpensecontext.Provider>
      </paidbycontext.Provider>
    </splitbycontext.Provider>
  );
}
