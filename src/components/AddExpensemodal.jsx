import { createPortal } from "react-dom";
import Header from "./Header";
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
      </div>
    </div>,
    document.body
  );
}
