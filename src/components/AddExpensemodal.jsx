import { createPortal } from "react-dom";
import Addexpenseform from "./AddExpenseform";
export default function AddExpensemodal({ addingexpense, setaddingexpense }) {
  function closeaddinexpensemodal(e) {
    setaddingexpense(false);
  }
  return createPortal(
    <div id="modal-root" onClick={closeaddinexpensemodal}>
      <div
        className="addexpensemodalbox"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <header>
          Add Expense<button onClick={closeaddinexpensemodal}>Close</button>
        </header>
        <Addexpenseform/>
      </div>
    </div>,
    document.body
  );
}
