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
        <Header content='Add Expense'><button onClick={closeaddinexpensemodal}>Close</button></Header>
      </div>
    </div>,
    document.body
  );
}
